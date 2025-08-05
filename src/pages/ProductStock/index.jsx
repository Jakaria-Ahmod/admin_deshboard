import React from 'react';

const ProductStock = () => {
  const products = [
    {
      id: 1,
      name: 'iPhone 15 Pro',
      sku: 'APL-IP15P',
      quantity: 20,
      status: 'In Stock',
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24',
      sku: 'SMS-S24',
      quantity: 5,
      status: 'Low Stock',
    },
    {
      id: 3,
      name: 'Google Pixel 9',
      sku: 'GGL-PX9',
      quantity: 0,
      status: 'Out of Stock',
    },
    {
      id: 1,
      name: 'iPhone 15 Pro',
      sku: 'APL-IP15P',
      quantity: 20,
      status: 'In Stock',
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24',
      sku: 'SMS-S24',
      quantity: 5,
      status: 'Low Stock',
    },
    {
      id: 3,
      name: 'Google Pixel 9',
      sku: 'GGL-PX9',
      quantity: 0,
      status: 'Out of Stock',
    },
    {
      id: 1,
      name: 'iPhone 15 Pro',
      sku: 'APL-IP15P',
      quantity: 20,
      status: 'In Stock',
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24',
      sku: 'SMS-S24',
      quantity: 5,
      status: 'Low Stock',
    },
    {
      id: 3,
      name: 'Google Pixel 9',
      sku: 'GGL-PX9',
      quantity: 0,
      status: 'Out of Stock',
    },
    {
      id: 1,
      name: 'iPhone 15 Pro',
      sku: 'APL-IP15P',
      quantity: 20,
      status: 'In Stock',
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24',
      sku: 'SMS-S24',
      quantity: 5,
      status: 'Low Stock',
    },
    {
      id: 3,
      name: 'Google Pixel 9',
      sku: 'GGL-PX9',
      quantity: 0,
      status: 'Out of Stock',
    },
    {
      id: 1,
      name: 'iPhone 15 Pro',
      sku: 'APL-IP15P',
      quantity: 20,
      status: 'In Stock',
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24',
      sku: 'SMS-S24',
      quantity: 5,
      status: 'Low Stock',
    },
    {
      id: 3,
      name: 'Google Pixel 9',
      sku: 'GGL-PX9',
      quantity: 0,
      status: 'Out of Stock',
    },
    {
      id: 1,
      name: 'iPhone 15 Pro',
      sku: 'APL-IP15P',
      quantity: 20,
      status: 'In Stock',
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24',
      sku: 'SMS-S24',
      quantity: 5,
      status: 'Low Stock',
    },
    {
      id: 3,
      name: 'Google Pixel 9',
      sku: 'GGL-PX9',
      quantity: 0,
      status: 'Out of Stock',
    },
    {
      id: 1,
      name: 'iPhone 15 Pro',
      sku: 'APL-IP15P',
      quantity: 20,
      status: 'In Stock',
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24',
      sku: 'SMS-S24',
      quantity: 5,
      status: 'Low Stock',
    },
    {
      id: 3,
      name: 'Google Pixel 9',
      sku: 'GGL-PX9',
      quantity: 0,
      status: 'Out of Stock',
    },
  ];

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
            {products.map(product => (
              <tr
                key={product.id}
                className="border-t hover:bg-gray-50 text-sm"
              >
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
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 text-sm rounded">
                    Edit
                  </button>
                  <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 text-sm rounded">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductStock;
