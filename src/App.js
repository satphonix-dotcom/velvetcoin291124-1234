import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { useAuth } from './hooks/useAuth';
import Layout from './components/layout/Layout';
import Home from './components/pages/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import TestLogin from './components/auth/TestLogin';
import Profile from './components/auth/Profile';
import PrivateRoute from './components/auth/PrivateRoute';
import CartPage from './components/cart/CartPage';
import CheckoutPage from './components/checkout/CheckoutPage';
import OrderConfirmation from './components/checkout/OrderConfirmation';
import SearchResults from './components/search/SearchResults';
import OrderList from './components/orders/OrderList';
import OrderDetails from './components/orders/OrderDetails';
import VendorDashboard from './components/vendor/Dashboard';
import VendorOrders from './components/vendor/OrderManagement';
import VendorRegistration from './components/vendor/VendorRegistration';
import PageList from './components/admin/PageList';
import ContentEditor from './components/admin/ContentEditor';
import DynamicPage from './components/common/DynamicPage';

const AppContent = () => {
  useAuth();

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/test-login" element={<TestLogin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/vendor/register" element={<VendorRegistration />} />
        <Route path="/search" element={<SearchResults />} />

        {/* Protected Routes */}
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path="/checkout"
          element={
            <PrivateRoute>
              <CheckoutPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/order-confirmation/:orderId"
          element={
            <PrivateRoute>
              <OrderConfirmation />
            </PrivateRoute>
          }
        />
        <Route
          path="/orders"
          element={
            <PrivateRoute>
              <OrderList />
            </PrivateRoute>
          }
        />
        <Route
          path="/orders/:orderId"
          element={
            <PrivateRoute>
              <OrderDetails />
            </PrivateRoute>
          }
        />
        <Route
          path="/vendor/dashboard"
          element={
            <PrivateRoute roles={['vendor']}>
              <VendorDashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/vendor/orders"
          element={
            <PrivateRoute roles={['vendor']}>
              <VendorOrders />
            </PrivateRoute>
          }
        />

        {/* Admin Routes */}
        <Route
          path="/admin/pages"
          element={
            <PrivateRoute roles={['admin']}>
              <PageList />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/pages/:slug"
          element={
            <PrivateRoute roles={['admin']}>
              <ContentEditor />
            </PrivateRoute>
          }
        />

        {/* Dynamic Pages */}
        <Route path="/:slug" element={<DynamicPage />} />
      </Routes>
    </Layout>
  );
};

function App() {
  return (
    <Provider store={store}>
      <Router>
        <AppContent />
      </Router>
    </Provider>
  );
}

export default App;