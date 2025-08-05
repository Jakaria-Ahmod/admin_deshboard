import React from 'react';

const data = [
  {
    id: 1,
    name: 'Jakaria Ahmod',
    role: 'Frontend Developer',
    email: 'jakaria@example.com',
    status: 'Active',
  },
  {
    id: 2,
    name: 'Sarah Khan',
    role: 'Backend Developer',
    email: 'sarah@example.com',
    status: 'Inactive',
  },
  {
    id: 3,
    name: 'Rafi Ahmed',
    role: 'UI/UX Designer',
    email: 'rafi@example.com',
    status: 'Active',
  },
  {
    id: 4,
    name: 'Nadia Islam',
    role: 'Project Manager',
    email: 'nadia@example.com',
    status: 'Active',
  },
  {
    id: 5,
    name: 'Arif Hossain',
    role: 'DevOps Engineer',
    email: 'arif@example.com',
    status: 'Inactive',
  },
];

const Table = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen flex justify-center">
      <div className="overflow-x-auto w-full max-w-5xl bg-white rounded-lg shadow-md">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="px-6 py-3 text-left font-semibold">Name</th>
              <th className="px-6 py-3 text-left font-semibold">Role</th>
              <th className="px-6 py-3 text-left font-semibold">Email</th>
              <th className="px-6 py-3 text-left font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map(({ id, name, role, email, status }) => (
              <tr
                key={id}
                className="border-b hover:bg-gray-100 cursor-pointer transition"
              >
                <td className="px-6 py-4 whitespace-nowrap">{name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{role}</td>
                <td className="px-6 py-4 whitespace-nowrap">{email}</td>
                <td
                  className={`px-6 py-4 whitespace-nowrap font-semibold ${
                    status === 'Active' ? 'text-green-600' : 'text-red-600'
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
  );
};

export default Table;
