import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../store/slices/authSlice';
import { useNavigate } from 'react-router-dom';

const TestLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const createTestUser = async (role) => {
    setLoading(true);
    setError('');
    
    try {
      const response = await axios.post('/api/auth/create-test-user', { role });
      const { token, user } = response.data;
      
      // Store token and update auth state
      localStorage.setItem('token', token);
      dispatch(loginSuccess({ user, token }));
      
      // Show credentials in a more user-friendly way
      const message = `Test Account Created!\n\nEmail: ${user.email}\nPassword: Test123!\n\nPlease save these credentials for future use.`;
      window.alert(message);
      
      navigate('/');
    } catch (err) {
      // Safely handle error message
      const errorMessage = err.response?.data?.message || 'Failed to create test user. Please try again.';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-primary-light flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-lg">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900">Test Accounts</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Create test accounts with different roles
          </p>
        </div>
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
            {error}
          </div>
        )}
        
        <div className="space-y-4">
          <button
            onClick={() => createTestUser('customer')}
            disabled={loading}
            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
          >
            {loading ? 'Creating...' : 'Create Test Customer Account'}
          </button>
          
          <button
            onClick={() => createTestUser('vendor')}
            disabled={loading}
            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50"
          >
            {loading ? 'Creating...' : 'Create Test Vendor Account'}
          </button>
          
          <button
            onClick={() => createTestUser('admin')}
            disabled={loading}
            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50"
          >
            {loading ? 'Creating...' : 'Create Test Admin Account'}
          </button>
        </div>
        
        <div className="mt-6 text-sm text-gray-500">
          <p className="text-center">Note: All test accounts will be created with the password: <span className="font-mono bg-gray-100 px-2 py-1 rounded">Test123!</span></p>
          <p className="mt-2 text-center text-xs">The credentials will be displayed after account creation.</p>
        </div>
      </div>
    </div>
  );
};

export default TestLogin;