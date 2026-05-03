import { useState } from 'react';
import {
  AlertCircle,
  Archive,
  CheckCircle2,
  Clock,
  Database,
  Download,
  FileJson,
  HardDrive,
  Import,
  Loader2,
  ShieldCheck,
  Upload,
} from 'lucide-react';
import { exportBackup, importBackup } from '../../services/api';

function InfoCard({ icon: Icon, label, value, sub, color = 'green' }) {
  const colors = {
    green: 'bg-green-100 text-green-700',
    blue: 'bg-sky-100 text-sky-700',
    amber: 'bg-amber-100 text-amber-700',
    slate: 'bg-slate-100 text-slate-600',
  };

  return (
    <div className="card-surface flex items-center gap-4 p-5">
      <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${colors[color]}`}>
        <Icon className="h-5 w-5" strokeWidth={2} />
      </div>
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-slate-400">{label}</p>
        <p className="mt-0.5 text-xl font-black text-slate-900">{value}</p>
        {sub && <p className="text-xs text-slate-500">{sub}</p>}
      </div>
    </div>
  );
}

export default function Backup() {
  const [exporting, setExporting] = useState(false);
  const [exportSuccess, setExportSuccess] = useState('');
  const [exportError, setExportError] = useState('');
  const [importing, setImporting] = useState(false);
  const [importMode, setImportMode] = useState('merge');
  const [importFile, setImportFile] = useState(null);
  const [importSuccess, setImportSuccess] = useState('');
  const [importError, setImportError] = useState('');
  const [lastExport, setLastExport] = useState(() => localStorage.getItem('mosque_last_backup'));

  const handleExport = async () => {
    setExporting(true);
    setExportError('');
    setExportSuccess('');

    try {
      const data = await exportBackup();
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `mosque-backup-${new Date().toISOString().slice(0, 10)}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      const ts = new Date().toLocaleString('en-PH', { dateStyle: 'medium', timeStyle: 'short' });
      localStorage.setItem('mosque_last_backup', ts);
      setLastExport(ts);
      setExportSuccess(`Backup downloaded - ${data.total} mosque record${data.total !== 1 ? 's' : ''} exported.`);
    } catch (err) {
      setExportError(err.response?.data?.message || 'Export failed. Please try again.');
    } finally {
      setExporting(false);
    }
  };

  const handleImport = async (event) => {
    event.preventDefault();
    setImportError('');
    setImportSuccess('');

    if (!importFile) {
      setImportError('Please choose a JSON backup file to import.');
      return;
    }

    setImporting(true);

    try {
      const text = await importFile.text();
      const backup = JSON.parse(text);
      const records = Array.isArray(backup) ? backup : backup.data;

      if (!Array.isArray(records) || records.length === 0) {
        throw new Error('Invalid backup file. The JSON must contain a non-empty data array.');
      }

      const response = await importBackup({ mode: importMode, data: records });
      const stats = response.data;
      setImportSuccess(
        `Import complete: ${stats.created} created, ${stats.updated} updated from ${stats.total} record${stats.total !== 1 ? 's' : ''}.`
      );
      setImportFile(null);
      event.target.reset();
    } catch (err) {
      setImportError(
        err.response?.data?.message ||
          err.response?.data?.errors?.data?.[0] ||
          err.message ||
          'Import failed. Please check the backup file and try again.'
      );
    } finally {
      setImporting(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-green-800 text-white shadow-sm">
          <Database className="h-5 w-5" strokeWidth={2} />
        </div>
        <div>
          <h1 className="text-xl font-black text-slate-900">Backup & Data Recovery</h1>
          <p className="text-sm text-slate-500">Export and restore mosque records</p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <InfoCard icon={HardDrive} label="Storage" value="SQLite" sub="Local database" color="blue" />
        <InfoCard icon={Clock} label="Last Backup" value={lastExport || '-'} sub="Manual export" color="amber" />
        <InfoCard icon={ShieldCheck} label="Data Status" value="Protected" sub="Sanctum-secured API" color="green" />
      </div>

      <div className="card-surface overflow-hidden">
        <div className="flex items-center gap-3 border-b border-slate-100 bg-slate-50/60 px-6 py-4">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-green-800 text-white shadow-sm">
            <Archive className="h-4 w-4" strokeWidth={2} />
          </div>
          <div>
            <h2 className="text-sm font-bold text-slate-900">Export Mosque Data</h2>
            <p className="text-xs text-slate-500">Download a JSON backup of all mosque records</p>
          </div>
        </div>

        <div className="p-6">
          <div className="mb-5 rounded-xl border border-sky-100 bg-sky-50 px-5 py-4">
            <p className="text-sm font-semibold text-sky-800">What is included in the export?</p>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {[
                'Mosque name & ID',
                'Address & barangay',
                'Imam name',
                'Description',
                'GPS coordinates',
                'Image path & URL',
                'Created and updated dates',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-sky-700">
                  <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-sky-500" strokeWidth={2} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {exportSuccess && (
            <div className="mb-4 flex items-center gap-3 rounded-xl border border-green-200 bg-green-50 px-4 py-3">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-green-700" strokeWidth={2} />
              <p className="text-sm font-medium text-green-800">{exportSuccess}</p>
            </div>
          )}

          {exportError && (
            <div className="mb-4 flex items-start gap-3 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-rose-600" strokeWidth={2} />
              <p className="text-sm text-rose-700">{exportError}</p>
            </div>
          )}

          <button
            type="button"
            onClick={handleExport}
            disabled={exporting}
            className="btn-primary disabled:cursor-not-allowed disabled:opacity-70"
          >
            {exporting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" strokeWidth={2} /> Exporting...
              </>
            ) : (
              <>
                <Download className="h-4 w-4" strokeWidth={2} /> Export as JSON
              </>
            )}
          </button>
        </div>
      </div>

      <div className="card-surface overflow-hidden">
        <div className="flex items-center gap-3 border-b border-slate-100 bg-slate-50/60 px-6 py-4">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-600 text-white shadow-sm">
            <Import className="h-4 w-4" strokeWidth={2} />
          </div>
          <div>
            <h2 className="text-sm font-bold text-slate-900">Import Backup Data</h2>
            <p className="text-xs text-slate-500">Restore mosque records from an exported JSON file</p>
          </div>
        </div>

        <div className="p-6">
          <form onSubmit={handleImport} className="space-y-5">
            <label className="block">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Backup JSON file</span>
              <input
                type="file"
                accept="application/json,.json"
                onChange={(event) => setImportFile(event.target.files?.[0] || null)}
                className="mt-2 block w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 file:mr-4 file:rounded-lg file:border-0 file:bg-green-800 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:border-green-300 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-100"
              />
            </label>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                ['merge', 'Merge with current data', 'Updates matching records and creates missing records.'],
                ['replace', 'Replace current mosque data', 'Deletes current mosque records before importing the file.'],
              ].map(([value, title, desc]) => (
                <label
                  key={value}
                  className={`cursor-pointer rounded-xl border px-4 py-3 transition ${
                    importMode === value ? 'border-green-300 bg-green-50' : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <span className="flex items-start gap-3">
                    <input
                      type="radio"
                      name="importMode"
                      value={value}
                      checked={importMode === value}
                      onChange={(event) => setImportMode(event.target.value)}
                      className="mt-1 h-4 w-4 accent-green-700"
                    />
                    <span>
                      <span className="block text-sm font-bold text-slate-800">{title}</span>
                      <span className="mt-1 block text-xs text-slate-500">{desc}</span>
                    </span>
                  </span>
                </label>
              ))}
            </div>

            {importSuccess && (
              <div className="flex items-center gap-3 rounded-xl border border-green-200 bg-green-50 px-4 py-3">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-green-700" strokeWidth={2} />
                <p className="text-sm font-medium text-green-800">{importSuccess}</p>
              </div>
            )}

            {importError && (
              <div className="flex items-start gap-3 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3">
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-rose-600" strokeWidth={2} />
                <p className="text-sm text-rose-700">{importError}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={importing}
              className="btn-primary disabled:cursor-not-allowed disabled:opacity-70"
            >
              {importing ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" strokeWidth={2} /> Importing...
                </>
              ) : (
                <>
                  <Upload className="h-4 w-4" strokeWidth={2} /> Import JSON Backup
                </>
              )}
            </button>
          </form>

          <div className="mt-6 flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3">
            <FileJson className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" strokeWidth={2} />
            <p className="text-sm text-amber-700">
              <span className="font-semibold">Tip:</span> Use merge for normal restores. Use replace only when the current mosque list should be overwritten by the backup file.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
