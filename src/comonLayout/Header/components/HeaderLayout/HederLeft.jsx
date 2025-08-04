import React from 'react';
import { IoMenuSharp } from 'react-icons/io5';

const HederLeft = () => {
  return (
    <div>
      <div className="flex gap-x-[25px] items-center">
        <IoMenuSharp size={22} className="cursor-pointer" />
        <input
          type="text"
          placeholder="Search"
          className="w-[388px] p-[10px] border border-gray-400 rounded-full outline-none"
        />
      </div>
    </div>
  );
};

export default HederLeft;
