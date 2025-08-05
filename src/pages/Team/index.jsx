import React from 'react';

const teamMembers = [
  {
    id: 1,
    name: 'Jakaria Ahmod',
    role: 'Frontend Developer',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    id: 2,
    name: 'Sarah Khan',
    role: 'Backend Developer',
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  {
    id: 3,
    name: 'Rafi Ahmed',
    role: 'UI/UX Designer',
    image: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
  {
    id: 4,
    name: 'Nadia Islam',
    role: 'Project Manager',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    id: 5,
    name: 'Arif Hossain',
    role: 'DevOps Engineer',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    id: 6,
    name: 'Lina Rahman',
    role: 'QA Engineer',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
  {
    id: 7,
    name: 'Shakil Ahmed',
    role: 'Fullstack Developer',
    image: 'https://randomuser.me/api/portraits/men/7.jpg',
  },
  {
    id: 8,
    name: 'Maya Chowdhury',
    role: 'Content Writer',
    image: 'https://randomuser.me/api/portraits/women/8.jpg',
  },
  {
    id: 9,
    name: 'Sajid Khan',
    role: 'Business Analyst',
    image: 'https://randomuser.me/api/portraits/men/9.jpg',
  },
  {
    id: 10,
    name: 'Tania Sultana',
    role: 'HR Manager',
    image: 'https://randomuser.me/api/portraits/women/10.jpg',
  },
  {
    id: 11,
    name: 'Fahim Islam',
    role: 'Security Analyst',
    image: 'https://randomuser.me/api/portraits/men/11.jpg',
  },
  {
    id: 12,
    name: 'Rumana Akter',
    role: 'Graphic Designer',
    image: 'https://randomuser.me/api/portraits/women/12.jpg',
  },
  {
    id: 13,
    name: 'Omar Faruk',
    role: 'Mobile Developer',
    image: 'https://randomuser.me/api/portraits/men/13.jpg',
  },
  {
    id: 14,
    name: 'Nusrat Jahan',
    role: 'Marketing Specialist',
    image: 'https://randomuser.me/api/portraits/women/14.jpg',
  },
  {
    id: 15,
    name: 'Imran Hossain',
    role: 'Data Scientist',
    image: 'https://randomuser.me/api/portraits/men/15.jpg',
  },
  {
    id: 16,
    name: 'Riya Begum',
    role: 'SEO Expert',
    image: 'https://randomuser.me/api/portraits/women/16.jpg',
  },
  {
    id: 17,
    name: 'Sabbir Rahman',
    role: 'Cloud Engineer',
    image: 'https://randomuser.me/api/portraits/men/17.jpg',
  },
  {
    id: 18,
    name: 'Anika Sultana',
    role: 'Product Owner',
    image: 'https://randomuser.me/api/portraits/women/18.jpg',
  },
  {
    id: 19,
    name: 'Tanvir Ahmed',
    role: 'Scrum Master',
    image: 'https://randomuser.me/api/portraits/men/19.jpg',
  },
  {
    id: 20,
    name: 'Rasheda Akter',
    role: 'Customer Support',
    image: 'https://randomuser.me/api/portraits/women/20.jpg',
  },
];

const Team = () => {
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
