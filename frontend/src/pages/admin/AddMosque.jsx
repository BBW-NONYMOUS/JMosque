import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MosqueForm from '../../components/MosqueForm';
import { createMosque } from '../../services/api';

export default function AddMosque() {
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (formData) => {
    try {
      setSubmitting(true);
      setError('');
      await createMosque(formData);
      navigate('/admin/mosques');
    } catch (requestError) {
      setError(
        requestError.response?.data?.message ||
          Object.values(requestError.response?.data?.errors || {})[0]?.[0] ||
          'Unable to create mosque record.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="mx-auto max-w-5xl">
      <MosqueForm
        title="Add Mosque"
        description="Create a new mosque listing with image, imam details, and exact coordinates."
        submitLabel="Save Mosque"
        onSubmit={handleSubmit}
        submitting={submitting}
        error={error}
      />
    </div>
  );
}
