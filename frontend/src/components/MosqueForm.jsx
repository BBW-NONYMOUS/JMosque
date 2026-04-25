import { useState, useCallback, useEffect } from 'react';
import L from 'leaflet';
import {
  AlertCircle,
  FileImage,
  ImagePlus,
  Landmark,
  LoaderCircle,
  MapPin,
  Navigation,
  PlusCircle,
  Save,
  User,
} from 'lucide-react';
import { MapContainer, Marker, TileLayer, useMap, useMapEvents } from 'react-leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import { SATELLITE_TILE_LAYER } from '../constants/mapTiles';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const KALAMANSIG_CENTER = [6.5515, 124.0528];

/* ── Form primitives ── */

function Label({ htmlFor, children, required }) {
  return (
    <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-semibold text-slate-700">
      {children}
      {required && <span className="ml-1 text-rose-500">*</span>}
    </label>
  );
}

function Input({ id, name, type = 'text', step, placeholder, value, onChange, defaultValue, required, className = '' }) {
  return (
    <input
      id={id}
      name={name}
      type={type}
      step={step}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      defaultValue={defaultValue}
      required={required}
      className={`flex h-11 w-full rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-900 shadow-sm transition placeholder:text-slate-400 focus:border-green-500 focus:outline-none focus:ring-3 focus:ring-green-100 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
    />
  );
}

function Textarea({ id, name, rows = 4, placeholder, defaultValue, required }) {
  return (
    <textarea
      id={id}
      name={name}
      rows={rows}
      placeholder={placeholder}
      defaultValue={defaultValue}
      required={required}
      className="flex min-h-25 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm transition placeholder:text-slate-400 focus:border-green-500 focus:outline-none focus:ring-3 focus:ring-green-100"
    />
  );
}

function FormField({ label, htmlFor, required, children, hint }) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={htmlFor} required={required}>
        {label}
      </Label>
      {children}
      {hint && <p className="text-xs text-slate-400">{hint}</p>}
    </div>
  );
}

function SectionHeader({ icon: Icon, label }) {
  return (
    <div className="flex items-center gap-3 pb-1">
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-50 text-green-800">
        <Icon className="h-4 w-4" strokeWidth={2} />
      </div>
      <span className="text-xs font-bold uppercase tracking-widest text-slate-500">{label}</span>
      <div className="flex-1 border-t border-slate-100" />
    </div>
  );
}

/* ── Map click handler ── */
function LocationPicker({ onPick }) {
  useMapEvents({
    click(e) {
      onPick(e.latlng.lat, e.latlng.lng);
    },
  });
  return null;
}

/* ── Pan map when coordinates are typed manually ── */
function DraggableMarker({ position, onPick }) {
  const map = useMap();

  useEffect(() => {
    if (position) {
      map.flyTo(position, map.getZoom() < 15 ? 16 : map.getZoom(), { duration: 0.6 });
    }
  }, [map, position]);

  if (!position) return null;

  return (
    <Marker
      draggable
      position={position}
      eventHandlers={{
        dragend(event) {
          const nextPosition = event.target.getLatLng();
          onPick(nextPosition.lat, nextPosition.lng);
        },
      }}
    />
  );
}

function FlyToCoords({ lat, lng }) {
  const map = useMap();
  useEffect(() => {
    const parsedLat = Number(lat);
    const parsedLng = Number(lng);
    if (lat !== '' && lng !== '' && Number.isFinite(parsedLat) && Number.isFinite(parsedLng)) {
      map.flyTo([parsedLat, parsedLng], map.getZoom() < 13 ? 15 : map.getZoom(), { duration: 0.8 });
    }
  }, [lat, lng, map]);
  return null;
}

/* ── Default values ── */
const defaultValues = {
  mosque_name: '',
  address: '',
  barangay: '',
  imam_name: '',
  description: '',
  latitude: '',
  longitude: '',
};

export default function MosqueForm({
  title,
  description,
  initialValues = defaultValues,
  submitLabel,
  onSubmit,
  submitting = false,
  error = '',
}) {
  const isCreateMode = title.toLowerCase().includes('add');

  const [lat, setLat] = useState(
    initialValues.latitude !== '' ? String(initialValues.latitude) : ''
  );
  const [lng, setLng] = useState(
    initialValues.longitude !== '' ? String(initialValues.longitude) : ''
  );
  const [locationStatus, setLocationStatus] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(initialValues.image_url || null);

  const markerPos =
    lat !== '' && lng !== '' && !isNaN(Number(lat)) && !isNaN(Number(lng))
      ? [Number(lat), Number(lng)]
      : null;

  const handleMapPick = useCallback((pickedLat, pickedLng) => {
    setLat(pickedLat.toFixed(7));
    setLng(pickedLng.toFixed(7));
    setLocationStatus('Pin updated.');
  }, []);

  const handleUseCurrentLocation = () => {
    if (!navigator.geolocation) {
      setLocationStatus('GPS is not supported by this browser.');
      return;
    }

    setLocationStatus('Getting GPS location...');
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLat(position.coords.latitude.toFixed(7));
        setLng(position.coords.longitude.toFixed(7));
        setLocationStatus(`GPS pinned within about ${Math.round(position.coords.accuracy)} meters.`);
      },
      () => {
        setLocationStatus('Unable to get GPS location. Allow location access and try again.');
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 0,
      }
    );
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0] ?? null;
    if (file && file.size > 5 * 1024 * 1024) {
      alert('Image must be smaller than 5 MB.');
      e.target.value = '';
      return;
    }
    setImageFile(file);
    if (file) {
      const url = URL.createObjectURL(file);
      setImagePreview(url);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    formData.set('latitude', lat);
    formData.set('longitude', lng);
    onSubmit(formData);
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">

      {/* ── Card Header ── */}
      <div className="border-b border-slate-100 bg-green-800 px-7 py-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 text-white">
            {isCreateMode ? (
              <PlusCircle className="h-5 w-5" strokeWidth={2} />
            ) : (
              <Save className="h-5 w-5" strokeWidth={2} />
            )}
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">{title}</h2>
            <p className="mt-0.5 text-sm text-green-200">{description}</p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8 px-7 py-7">

        {/* ── Mosque Info ── */}
        <div className="space-y-5">
          <SectionHeader icon={Landmark} label="Mosque Information" />

          <FormField label="Mosque Name" htmlFor="mosque_name" required>
            <Input
              id="mosque_name"
              name="mosque_name"
              placeholder="e.g. Al-Noor Grand Mosque"
              defaultValue={initialValues.mosque_name}
              required
            />
          </FormField>

          <div className="grid gap-4 sm:grid-cols-2">
            <FormField label="Address" htmlFor="address" required>
              <Input
                id="address"
                name="address"
                placeholder="Street / purok / sitio"
                defaultValue={initialValues.address}
                required
              />
            </FormField>
            <FormField label="Barangay" htmlFor="barangay" required>
              <Input
                id="barangay"
                name="barangay"
                placeholder="Barangay name"
                defaultValue={initialValues.barangay}
                required
              />
            </FormField>
          </div>

          <FormField label="Imam Name" htmlFor="imam_name" required>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-3.5 flex items-center">
                <User className="h-4 w-4 text-slate-400" strokeWidth={2} />
              </div>
              <Input
                id="imam_name"
                name="imam_name"
                placeholder="Full name of the imam"
                defaultValue={initialValues.imam_name}
                required
                className="pl-10"
              />
            </div>
          </FormField>

          <FormField label="Description" htmlFor="description" required>
            <Textarea
              id="description"
              name="description"
              rows={4}
              placeholder="Brief overview of the mosque, its history, capacity, facilities…"
              defaultValue={initialValues.description}
              required
            />
          </FormField>
        </div>

        {/* ── Location ── */}
        <div className="space-y-5">
          <SectionHeader icon={MapPin} label="Location & Coordinates" />

          {/* Map picker */}
          <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex flex-wrap items-center gap-2.5 border-b border-slate-100 bg-slate-50 px-4 py-3">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-green-50">
                <MapPin className="h-3.5 w-3.5 text-green-800" strokeWidth={2} />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-700">
                  Click on the map to pin the mosque location
                </p>
                <p className="text-xs text-slate-400">
                  Drag the pin, use GPS, or type coordinates manually below
                </p>
              </div>
              <button
                type="button"
                onClick={handleUseCurrentLocation}
                className="ml-auto inline-flex items-center gap-2 rounded-lg border border-emerald-200 bg-white px-3 py-2 text-xs font-semibold text-emerald-800 shadow-sm transition hover:border-emerald-300 hover:bg-emerald-50"
              >
                <Navigation className="h-3.5 w-3.5" strokeWidth={2} />
                Use GPS
              </button>
              {markerPos && (
                <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-800">
                  📍 Pinned
                </span>
              )}
            </div>
            <div style={{ height: 320 }}>
              <MapContainer
                center={markerPos ?? KALAMANSIG_CENTER}
                zoom={markerPos ? 15 : 12}
                scrollWheelZoom
                className="h-full w-full"
              >
                <TileLayer
                  attribution={SATELLITE_TILE_LAYER.attribution}
                  url={SATELLITE_TILE_LAYER.url}
                />
                <LocationPicker onPick={handleMapPick} />
                <FlyToCoords lat={lat} lng={lng} />
                <DraggableMarker position={markerPos} onPick={handleMapPick} />
              </MapContainer>
            </div>
          </div>
          {locationStatus && <p className="text-xs font-medium text-slate-500">{locationStatus}</p>}

          {/* Coordinate inputs */}
          <div className="grid gap-4 sm:grid-cols-2">
            <FormField label="Latitude" htmlFor="latitude" required hint="North (+) / South (−)">
              <Input
                id="latitude"
                name="latitude"
                type="number"
                step="any"
                placeholder="e.g. 6.551500"
                value={lat}
                onChange={(e) => setLat(e.target.value)}
                required
              />
            </FormField>
            <FormField label="Longitude" htmlFor="longitude" required hint="East (+) / West (−)">
              <Input
                id="longitude"
                name="longitude"
                type="number"
                step="any"
                placeholder="e.g. 124.052800"
                value={lng}
                onChange={(e) => setLng(e.target.value)}
                required
              />
            </FormField>
          </div>
        </div>

        {/* ── Media ── */}
        <div className="space-y-5">
          <SectionHeader icon={FileImage} label="Mosque Photo" />

          <label
            htmlFor="image"
            className={`group flex cursor-pointer flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed px-6 py-8 text-center transition ${
              imagePreview
                ? 'border-green-300 bg-green-50'
                : 'border-slate-200 bg-slate-50 hover:border-green-400 hover:bg-green-50'
            }`}
          >
            {imagePreview ? (
              <div className="flex flex-col items-center gap-3">
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="h-32 w-48 rounded-xl object-cover shadow-sm"
                />
                <p className="text-sm font-semibold text-green-800">
                  {imageFile ? imageFile.name : 'Current image'}
                </p>
                <p className="text-xs text-green-600">Click to replace</p>
              </div>
            ) : (
              <>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-400 transition group-hover:bg-green-100 group-hover:text-green-700">
                  <ImagePlus className="h-6 w-6" strokeWidth={1.8} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-700 group-hover:text-green-800">
                    Click to upload a mosque photo
                  </p>
                  <p className="text-xs text-slate-400">PNG, JPG, WEBP — up to 5 MB</p>
                </div>
              </>
            )}
            <input
              id="image"
              name="image"
              type="file"
              accept="image/*"
              className="sr-only"
              onChange={handleImageChange}
            />
          </label>
        </div>

        {/* ── Error banner ── */}
        {error && (
          <div className="flex items-start gap-3 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3.5">
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-rose-600" strokeWidth={2} />
            <p className="text-sm text-rose-700">{error}</p>
          </div>
        )}

        {/* ── Form Actions ── */}
        <div className="flex items-center justify-end gap-3 border-t border-slate-100 pt-5">
          <button
            type="button"
            onClick={() => window.history.back()}
            className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={submitting}
            className="btn-primary px-7 py-3 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {submitting ? (
              <>
                <LoaderCircle className="h-4 w-4 animate-spin" strokeWidth={2.2} />
                Saving…
              </>
            ) : (
              <>
                {isCreateMode ? (
                  <PlusCircle className="h-4 w-4" strokeWidth={2.2} />
                ) : (
                  <Save className="h-4 w-4" strokeWidth={2.2} />
                )}
                {submitLabel}
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
