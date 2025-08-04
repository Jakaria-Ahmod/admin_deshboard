import React from 'react';
import { FaDollarSign, FaUsers } from 'react-icons/fa';
import { IoMdTrendingUp } from 'react-icons/io';

const TotalCard = ({ title, value, percent, subText, icon, trendColor }) => {
  return (
    <div className=" bg-white p-[16px] rounded-md shadow-md">
      <div className="flex justify-between">
        <div>
          <p className="text-balck01 font-nunito text-base font-semibold opacity-75">
            {title}
          </p>
          <h2 className="text-balck01 font-nunito text-[28px] font-bold mt-[16px]">
            {value}
          </h2>
        </div>
        <div>{icon}</div>
      </div>
      <div className="flex gap-x-[8px] items-center mt-[30px]">
        <IoMdTrendingUp color={trendColor} />
        <span className="text-tranding font-nunito text-base font-semibold">
          {percent}
        </span>
        <span className="text-opacity font-nunito text-base font-semibold">
          {subText}
        </span>
      </div>
    </div>
  );
};

export default TotalCard;
