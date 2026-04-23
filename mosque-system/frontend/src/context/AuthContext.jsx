import { createContext, useContext, useEffect, useState } from 'react';
import { clearStoredAuth, loginAdmin, logoutAdmin } from '../services/api';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem('mosque_admin_token'));
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('mosque_admin_user');

    if (!savedUser) {
      return null;
    }

    try {
      return JSON.parse(savedUser);
    } catch (error) {
      clearStoredAuth();
      return null;
    }
  });
  const [authLoading, setAuthLoading] = useState(false);

  useEffect(() => {
    const handleAuthExpired = () => {
      setToken(null);
      setUser(null);
      clearStoredAuth();
    };

    window.addEventListener('mosque-auth-expired', handleAuthExpired);

    return () => {
      window.removeEventListener('mosque-auth-expired', handleAuthExpired);
    };
  }, []);

  useEffect(() => {
    if (token && user) {
      localStorage.setItem('mosque_admin_token', token);
      localStorage.setItem('mosque_admin_user', JSON.stringify(user));
    } else {
      clearStoredAuth();
    }
  }, [token, user]);

  const login = async (credentials) => {
    setAuthLoading(true);

    try {
      const response = await loginAdmin(credentials);
      setToken(response.token);
      setUser(response.user);
      return response;
    } finally {
      setAuthLoading(false);
    }
  };

  const logout = async () => {
    try {
      if (token) {
        await logoutAdmin();
      }
    } catch (error) {
      // Clear the local session even if the API logout fails.
    } finally {
      setToken(null);
      setUser(null);
      clearStoredAuth();
    }
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        user,
        authLoading,
        isAuthenticated: Boolean(token),
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
