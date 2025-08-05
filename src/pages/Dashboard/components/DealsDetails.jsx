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
    <div className="overflow-auto">
      <table className="lg:w-full min-w-[600px] text-left border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-3 py-2 text-xs sm:text-sm md:text-base">
              Product
            </th>
            <th className="border px-3 py-2 text-xs sm:text-sm md:text-base">
              Location
            </th>
            <th className="border px-3 py-2 text-xs sm:text-sm md:text-base">
              Date - Time
            </th>
            <th className="border px-3 py-2 text-xs sm:text-sm md:text-base">
              Piece
            </th>
            <th className="border px-3 py-2 text-xs sm:text-sm md:text-base">
              Amount
            </th>
            <th className="border px-3 py-2 text-xs sm:text-sm md:text-base">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {dealsData.map((deal, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="border border-gray-600 px-3 py-2 flex items-center gap-2 text-xs sm:text-sm md:text-base">
                <span>{deal.productName}</span>
              </td>
              <td className="border px-3 py-2 text-xs sm:text-sm md:text-base">
                {deal.location}
              </td>
              <td className="border px-3 py-2 text-xs sm:text-sm md:text-base">
                {deal.dateTime}
              </td>
              <td className="border px-3 py-2 text-xs sm:text-sm md:text-base">
                {deal.piece}
              </td>
              <td className="border px-3 py-2 text-xs sm:text-sm md:text-base">
                {deal.amount}
              </td>
              <td className="border px-3 py-2 text-xs sm:text-sm md:text-base">
                <span
                  className={`text-[10px] sm:text-xs md:text-sm font-medium px-3 py-1 rounded border ${getStatusStyle(
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
