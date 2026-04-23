import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import MosqueForm from '../../components/MosqueForm';
import { fetchMosque, updateMosque } from '../../services/api';

export default function EditMosque() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [mosque, setMosque] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadMosque = async () => {
      try {
        setLoading(true);
        const response = await fetchMosque(id);
        setMosque(response.data);
      } catch (requestError) {
        setError(requestError.response?.data?.message || 'Unable to load mosque record.');
      } finally {
        setLoading(false);
      }
    };

    loadMosque();
  }, [id]);

  const handleSubmit = async (formData) => {
    try {
      setSubmitting(true);
      setError('');
      await updateMosque(id, formData);
      navigate('/admin/mosques');
    } catch (requestError) {
      setError(
        requestError.response?.data?.message ||
          Object.values(requestError.response?.data?.errors || {})[0]?.[0] ||
          'Unable to update mosque record.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="mx-auto max-w-5xl">
        <div className="card-surface p-8 text-center text-slate-600">Loading mosque record...</div>
      </div>
    );
  }

  if (!mosque) {
    return (
      <div className="mx-auto max-w-5xl">
        <div className="card-surface p-8 text-center text-rose-600">
          {error || 'Mosque record not found.'}
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl">
      <MosqueForm
        title="Edit Mosque"
        description="Update the mosque information, image, and coordinates used in the public directory."
        initialValues={mosque}
        submitLabel="Update Mosque"
        onSubmit={handleSubmit}
        submitting={submitting}
        error={error}
      />
    </div>
  );
}
