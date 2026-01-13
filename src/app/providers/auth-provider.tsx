'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { authCookies } from '@/utils/auth';

type AuthContextType = {
  isAuthenticated: boolean;
  userData: any | null;
  login: (userData: any) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState<any | null>(null);

  useEffect(() => {
    const checkAuth = () => {
      const data = authCookies.get();
      setUserData(data);
      setIsAuthenticated(!!data?.token);
    };

    checkAuth();
    
    // Listen for auth changes
    window.addEventListener('authChange', checkAuth);
    
    return () => {
      window.removeEventListener('authChange', checkAuth);
    };
  }, []);

  const login = (userData: any) => {
    authCookies.store(userData);
    setUserData(userData);
    setIsAuthenticated(true);
    window.dispatchEvent(new Event('authChange'));
  };

  const logout = () => {
    authCookies.delete();
    setUserData(null);
    setIsAuthenticated(false);
    window.dispatchEvent(new Event('authChange'));
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userData, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider');
  return ctx;
};
