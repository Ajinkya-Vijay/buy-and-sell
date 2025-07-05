import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import your page components
import HomePage from '../pages/HomePage';
import ProductListingPage from '../pages/ProductListingPage';
import ProductDetailsPage from '../pages/ProductDetailsPage';
import CartPage from '../pages/CartPage';
import CheckoutPage from '../pages/CheckoutPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import UserDashboard from '../pages/UserDashboard';
import NotFoundPage from '../pages/NotFoundPage';

// You might also have a layout component, e.g., for Header/Footer
// import MainLayout from '../components/layout/MainLayout';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      {/* You can wrap your Routes in a layout component if you have a consistent layout 
        For example:
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="products" element={<ProductListingPage />} />
            ...
          </Route>
        </Routes>
        For simplicity, we'll keep it flat here, but consider a Layout for common UI elements.
      */}
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductListingPage />} />
        <Route path="/products/:id" element={<ProductDetailsPage />} /> {/* Dynamic segment for product ID */}
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Protected Routes (Example - you'd implement actual protection with an AuthGuard or similar) */}
        {/* For a real app, you'd likely have a wrapper component like <PrivateRoute> */}
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/dashboard" element={<UserDashboard />} />

        {/* Catch-all route for 404 Not Found */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;