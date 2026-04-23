import { useCallback, useEffect, useState } from 'react';
import { fetchMosques } from '../services/api';

const defaultState = {
  data: [],
  loading: true,
  error: '',
};

export default function useFetchMosques(filters = {}) {
  const [state, setState] = useState(defaultState);

  const loadMosques = useCallback(async () => {
    try {
      setState((current) => ({ ...current, loading: true, error: '' }));
      const response = await fetchMosques(filters);

      setState({
        data: response.data ?? [],
        loading: false,
        error: '',
      });
    } catch (error) {
      setState({
        data: [],
        loading: false,
        error: error.response?.data?.message || 'Unable to load mosque records.',
      });
    }
  }, [filters.barangay, filters.search]);

  useEffect(() => {
    loadMosques();
  }, [loadMosques]);

  return {
    mosques: state.data,
    loading: state.loading,
    error: state.error,
    refetch: loadMosques,
  };
}
