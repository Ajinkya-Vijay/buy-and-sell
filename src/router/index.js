import { Routes, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import ProductListingPage from '../pages/ProductListingPage';
import ProductDetailsPage from '../pages/ProductDetailsPage';
import CartPage from '../pages/CartPage';
import CheckoutPage from '../pages/CheckoutPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import UserDashboard from '../pages/UserDashboard';
import NotFoundPage from '../pages/NotFoundPage';
import RedirectPageToHomePage from '../pages/RedirectPageToHomePage';

const AppRoutes = () => {
  return (
      <Routes>
        {/* Public Routes */}
        <Route path="/buy-and-sell" element={<HomePage />} />
        <Route path="/" element={<RedirectPageToHomePage/>} />
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
  );
};

export default AppRoutes;