import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SupplierLayout from '../components/supplier/SupplierLayout';
import SupplierHome from '../components/supplier/SupplierHome';
import ProductManagement from '../components/supplier/ProductManagement';
import SupplierOrders from '../components/supplier/SupplierOrders';
import SupplierAnalytics from '../components/supplier/SupplierAnalytics';

export default function SupplierDashboard() {
  return (
    <SupplierLayout>
      <Routes>
        <Route path="/" element={<SupplierHome />} />
        <Route path="/products" element={<ProductManagement />} />
        <Route path="/orders" element={<SupplierOrders />} />
        <Route path="/analytics" element={<SupplierAnalytics />} />
      </Routes>
    </SupplierLayout>
  );
}