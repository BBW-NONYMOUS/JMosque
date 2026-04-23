import L from 'leaflet';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
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

function MapViewport({ mosques }) {
  const map = useMap();

  useEffect(() => {
    if (!mosques.length) {
      map.setView(KALAMANSIG_CENTER, 12);
      return;
    }

    if (mosques.length === 1) {
      map.setView([Number(mosques[0].latitude), Number(mosques[0].longitude)], 15);
      return;
    }

    const bounds = L.latLngBounds(
      mosques.map((mosque) => [Number(mosque.latitude), Number(mosque.longitude)])
    );

    map.fitBounds(bounds, { padding: [36, 36] });
  }, [map, mosques]);

  return null;
}

export default function MapView({ mosques = [], height = '520px' }) {
  const validMosques = mosques.filter(
    (mosque) =>
      Number.isFinite(Number(mosque.latitude)) && Number.isFinite(Number(mosque.longitude))
  );

  return (
    <div className="card-surface overflow-hidden p-2 sm:p-3">
      <div style={{ height }} className="overflow-hidden rounded-[1.5rem]">
        <MapContainer center={KALAMANSIG_CENTER} zoom={12} scrollWheelZoom className="h-full w-full">
          <TileLayer
            attribution={SATELLITE_TILE_LAYER.attribution}
            url={SATELLITE_TILE_LAYER.url}
          />

          <MapViewport mosques={validMosques} />

          {validMosques.map((mosque) => (
            <Marker key={mosque.id} position={[Number(mosque.latitude), Number(mosque.longitude)]}>
              <Popup>
                <div className="space-y-2">
                  <div>
                    <h3 className="text-base font-bold text-slate-900">{mosque.mosque_name}</h3>
                    <p className="text-sm text-slate-600">{mosque.barangay}</p>
                  </div>
                  <Link
                    to={`/mosques/${mosque.id}`}
                    className="inline-flex rounded-full bg-emerald-600 px-3 py-2 text-sm font-semibold text-white"
                  >
                    View Details
                  </Link>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}
