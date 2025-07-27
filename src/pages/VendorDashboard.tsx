import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import VendorLayout from '../components/vendor/VendorLayout';
import VendorHome from '../components/vendor/VendorHome';
import SupplierDiscovery from '../components/vendor/SupplierDiscovery';
import OrderManagement from '../components/vendor/OrderManagement';
import Analytics from '../components/vendor/Analytics';

export default function VendorDashboard() {
  return (
    <VendorLayout>
      <Routes>
        <Route path="/" element={<VendorHome />} />
        <Route path="/suppliers" element={<SupplierDiscovery />} />
        <Route path="/orders" element={<OrderManagement />} />
        <Route path="/analytics" element={<Analytics />} />
      </Routes>
    </VendorLayout>
  );
}