import React from 'react';
import { Link } from 'react-router-dom';
import ProductList from './ProductList';

const Dashboard = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Vendor Dashboard</h1>
        <Link
          to="/vendor/products/add"
          className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-md hover:bg-yellow-500"
        >
          Add New Product
        </Link>
      </div>
      <ProductList />
    </div>
  );
};

export default Dashboard;