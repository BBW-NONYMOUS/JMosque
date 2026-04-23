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
  Loader2,
  RefreshCw,
  ShieldCheck,
} from 'lucide-react';
import { exportBackup } from '../../services/api';

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
  const [lastExport, setLastExport] = useState(() => localStorage.getItem('mosque_last_backup'));

  const handleExport = async () => {
    setExporting(true);
    setExportError('');
    setExportSuccess('');

    try {
      const data = await exportBackup();

      /* Trigger JSON file download */
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
      setExportSuccess(`Backup downloaded — ${data.total} mosque record${data.total !== 1 ? 's' : ''} exported.`);
    } catch (err) {
      setExportError(
        err.response?.data?.message || 'Export failed. Please try again.'
      );
    } finally {
      setExporting(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* ── Page header ── */}
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-green-800 text-white shadow-sm">
          <Database className="h-5 w-5" strokeWidth={2} />
        </div>
        <div>
          <h1 className="text-xl font-black text-slate-900">Backup & Data Recovery</h1>
          <p className="text-sm text-slate-500">Export mosque records and manage data recovery</p>
        </div>
      </div>

      {/* ── Stat cards ── */}
      <div className="grid gap-4 sm:grid-cols-3">
        <InfoCard icon={HardDrive} label="Storage" value="MySQL" sub="Relational database" color="blue" />
        <InfoCard icon={Clock} label="Last Backup" value={lastExport || '—'} sub="Manual export" color="amber" />
        <InfoCard icon={ShieldCheck} label="Data Status" value="Protected" sub="Sanctum-secured API" color="green" />
      </div>

      {/* ── Export section ── */}
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
                'Image URL',
                'Date created',
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
              <><Loader2 className="h-4 w-4 animate-spin" strokeWidth={2} /> Exporting…</>
            ) : (
              <><Download className="h-4 w-4" strokeWidth={2} /> Export as JSON</>
            )}
          </button>
        </div>
      </div>

      {/* ── Recovery guide ── */}
      <div className="card-surface overflow-hidden">
        <div className="flex items-center gap-3 border-b border-slate-100 bg-slate-50/60 px-6 py-4">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-600 text-white shadow-sm">
            <RefreshCw className="h-4 w-4" strokeWidth={2} />
          </div>
          <div>
            <h2 className="text-sm font-bold text-slate-900">Data Recovery</h2>
            <p className="text-xs text-slate-500">How to restore mosque data from a backup</p>
          </div>
        </div>

        <div className="p-6">
          <div className="space-y-4">
            {[
              {
                step: '1',
                title: 'Locate your backup file',
                desc: 'Find the JSON file you previously exported (e.g., mosque-backup-2025-01-01.json).',
              },
              {
                step: '2',
                title: 'Contact your system administrator',
                desc: 'Data restoration requires database access. Provide the backup file to your server admin.',
              },
              {
                step: '3',
                title: 'Restore via seeder or import script',
                desc: 'The developer can create a restoration seeder using the exported JSON data to re-seed the database.',
              },
            ].map(({ step, title, desc }) => (
              <div key={step} className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-800 text-sm font-black text-white">
                  {step}
                </div>
                <div className="pt-1">
                  <p className="text-sm font-bold text-slate-800">{title}</p>
                  <p className="mt-1 text-sm text-slate-500">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3">
            <FileJson className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" strokeWidth={2} />
            <p className="text-sm text-amber-700">
              <span className="font-semibold">Tip:</span> Export a backup regularly — especially before adding, editing, or deleting mosque records in bulk.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
