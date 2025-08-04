import React from 'react';
import { orders } from './OrderListData';

const statusStyles = {
  Delivered: 'bg-green-100 text-green-800',
  Pending: 'bg-yellow-100 text-yellow-800',
  Shipped: 'bg-blue-100 text-blue-800',
  Cancelled: 'bg-red-100 text-red-800',
};

const OrderList = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-semibold mb-6 text-gray-800">Order List</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border-separate border-spacing-y-3 table-auto">
          <thead>
            <tr className="bg-gray-50">
              {['ID', 'Name', 'Address', 'Date', 'Type', 'Status'].map(
                header => (
                  <th
                    key={header}
                    className="text-left px-6 py-3 text-sm font-medium text-gray-600 uppercase tracking-wide"
                  >
                    {header}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr
                key={order.id}
                className="bg-white hover:shadow-md hover:bg-gray-50 transition-shadow rounded-lg"
              >
                <td className="px-6 py-4 whitespace-nowrap font-mono text-gray-700">
                  {order.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap font-semibold text-gray-900">
                  {order.name}
                </td>
                <td className="px-6 py-4 max-w-xs truncate text-gray-600">
                  {order.address}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                  {order.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                  {order.type}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                      statusStyles[order.status]
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderList;
