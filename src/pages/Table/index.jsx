import React, { useEffect } from 'react';
import { data } from './TabaleApi';

const Table = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8 flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 text-sm md:text-base">
            <thead className="bg-gray-50 sticky top-0 z-10">
              <tr>
                <th className="px-6 py-4 text-left font-semibold text-gray-700">
                  Name
                </th>
                <th className="px-6 py-4 text-left font-semibold text-gray-700">
                  Role
                </th>
                <th className="px-6 py-4 text-left font-semibold text-gray-700">
                  Email
                </th>
                <th className="px-6 py-4 text-left font-semibold text-gray-700">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data.map(({ id, name, role, email, status }) => (
                <tr
                  key={id}
                  className="hover:bg-gray-50 transition duration-150 ease-in-out"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-gray-800">
                    {name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                    {role}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-blue-600 hover:underline">
                    {email}
                  </td>
                  <td
                    className={`px-6 py-4 whitespace-nowrap font-semibold ${
                      status === 'Active' ? 'text-green-600' : 'text-red-500'
                    }`}
                  >
                    {status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
