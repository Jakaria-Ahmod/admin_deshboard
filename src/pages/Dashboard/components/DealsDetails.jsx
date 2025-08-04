import React from 'react';
import { dealsData } from './Delevart.api';

const getStatusStyle = status => {
  switch (status) {
    case 'Delivered':
      return 'bg-green-100 text-green-700 border-green-300';
    case 'Pending':
      return 'bg-yellow-100 text-yellow-700 border-yellow-300';
    case 'Cancelled':
      return 'bg-red-100 text-red-700 border-red-300';
    default:
      return '';
  }
};

const DealsDetails = () => {
  return (
    <div>
      <table className="w-full text-start border border-gray-300">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="border px-4 py-2">Product</th>
            <th className="border px-4 py-2">Location</th>
            <th className="border px-4 py-2">Date - Time</th>
            <th className="border px-4 py-2">Piece</th>
            <th className="border px-4 py-2">Amount</th>
            <th className="border px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {dealsData.map((deal, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="border border-gray-600 px-4 py-2 flex items-center gap-2">
                <span>{deal.productName}</span>
              </td>
              <td className="border px-4 py-2">{deal.location}</td>
              <td className="border px-4 py-2">{deal.dateTime}</td>
              <td className="border px-4 py-2">${deal.piece}</td>
              <td className="border px-4 py-2">{deal.amount}</td>
              <td className="border px-4 py-2">
                <span
                  className={`text-sm font-medium px-3 py-1 rounded border ${getStatusStyle(
                    deal.status
                  )}`}
                >
                  {deal.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DealsDetails;
