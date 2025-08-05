import React from 'react';
import { IoMdTrendingUp } from 'react-icons/io';

const TotalCard = ({ title, value, percent, subText, icon, trendColor }) => {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-md shadow-md w-full sm:w-72 md:w-80 lg:w-96">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-gray-800 font-nunito text-sm sm:text-base font-semibold opacity-75">
            {title}
          </p>
          <h2 className="text-gray-900 font-nunito text-xl sm:text-2xl md:text-3xl font-bold mt-4 sm:mt-6">
            {value}
          </h2>
        </div>
        <div className="text-3xl sm:text-4xl w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
          {icon}
        </div>
      </div>
      <div className="flex gap-2 sm:gap-3 items-center mt-6 sm:mt-8">
        <IoMdTrendingUp color={trendColor} className="text-lg sm:text-xl" />
        <span className="text-tranding font-nunito text-sm sm:text-base font-semibold">
          {percent}
        </span>
        <span className="text-opacity font-nunito text-sm sm:text-base font-semibold">
          {subText}
        </span>
      </div>
    </div>
  );
};

export default TotalCard;
