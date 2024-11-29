import React from 'react';
import ProductForm from './ProductForm';

const AddProduct = () => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Add New Product</h2>
      <ProductForm />
    </div>
  );
};

export default AddProduct;