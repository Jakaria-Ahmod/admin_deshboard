import React, { useEffect } from 'react';
import { teamMembers } from './TemApi';

const Team = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6">
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
        Meet Our Team
      </h2>

      <div className="max-w-7xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {teamMembers.map(member => (
          <div
            key={member.id}
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center hover:shadow-xl transition"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-28 h-28 rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900">
              {member.name}
            </h3>
            <p className="text-gray-600 mb-4">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
