import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AuthPage from './pages/AuthPage';
import VendorDashboard from './pages/VendorDashboard';
import SupplierDashboard from './pages/SupplierDashboard';
import { AuthProvider, useAuth } from './contexts/AuthContext';

function ProtectedRoute({ children, role }: { children: React.ReactNode; role?: string }) {
  const { user } = useAuth();
  
  if (!user) {
    return <Navigate to="/auth" replace />;
  }
  
  if (role && user.role !== role) {
    return <Navigate to="/auth" replace />;
  }
  
  return <>{children}</>;
}

function AppContent() {
  const { user } = useAuth();

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={user ? 
            (user.role === 'vendor' ? <Navigate to="/vendor" replace /> : <Navigate to="/supplier" replace />) 
            : <LandingPage />
          } />
          <Route path="/auth" element={user ? 
            (user.role === 'vendor' ? <Navigate to="/vendor" replace /> : <Navigate to="/supplier" replace />)
            : <AuthPage />
          } />
          <Route path="/vendor/*" element={
            <ProtectedRoute role="vendor">
              <VendorDashboard />
            </ProtectedRoute>
          } />
          <Route path="/supplier/*" element={
            <ProtectedRoute role="supplier">
              <SupplierDashboard />
            </ProtectedRoute>
          } />
        </Routes>
      </div>
    </Router>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;