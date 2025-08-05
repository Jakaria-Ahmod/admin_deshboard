import React, { useState } from 'react';
import { products as initialProducts } from './PorductStockApi';

const ProductStock = () => {
  const [products, setProducts] = useState(initialProducts);

  const getStatusColor = status => {
    switch (status) {
      case 'In Stock':
        return 'text-green-600 bg-green-100';
      case 'Low Stock':
        return 'text-yellow-600 bg-yellow-100';
      case 'Out of Stock':
        return 'text-red-600 bg-red-100';
      default:
        return '';
    }
  };

  const handleEdit = product => {
    alert(`Editing product: ${product.name}`);
    console.log('Edit product:', product);
  };

  const handleDelete = productId => {
    setProducts(products.filter(product => product.id !== productId));
    console.log(productId);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Product Stock</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 shadow-sm rounded-lg bg-white">
          <thead>
            <tr className="bg-gray-100 text-gray-700 text-sm">
              <th className="py-3 px-4 text-left">Product</th>
              <th className="py-3 px-4 text-left">SKU</th>
              <th className="py-3 px-4 text-left">Quantity</th>
              <th className="py-3 px-4 text-left">Status</th>
              <th className="py-3 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index} className="border-t hover:bg-gray-50 text-sm">
                <td className="py-3 px-4">{product.name}</td>
                <td className="py-3 px-4">{product.sku}</td>
                <td className="py-3 px-4">{product.quantity}</td>
                <td className="py-3 px-4">
                  <span
                    className={`px-3 py-1 rounded-full font-medium text-xs ${getStatusColor(
                      product.status
                    )}`}
                  >
                    {product.status}
                  </span>
                </td>
                <td className="py-3 px-4 space-x-2">
                  <button
                    onClick={() => handleEdit(product)}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 text-sm rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(product?.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 text-sm rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {products.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center py-4 text-gray-500">
                  No products available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductStock;
