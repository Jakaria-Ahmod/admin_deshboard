import React from 'react';
import { MdNotifications } from 'react-icons/md';

const HederRight = ({ user }) => {
  return (
    <div className="flex items-center gap-4 bg-white px-4 py-2 rounded-md ">
      {/* Notification icon */}
      <div className="relative">
        <MdNotifications className="text-2xl text-gray-600 cursor-pointer" />
        <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
      </div>

      {/* User Info */}
      <div className="flex items-center gap-2">
        <img
          src={user?.photoURL || 'https://i.ibb.co/ZYW3VTp/brown-brim.png'}
          alt="user"
          className="w-8 h-8 rounded-full object-cover"
        />
        <div className="text-sm">
          <p className="font-semibold text-gray-800">
            {user?.name || 'Username'}
          </p>
          <p className="text-xs text-gray-500 capitalize">
            {user?.role || 'user'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HederRight;
