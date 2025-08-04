import React from 'react';
import { Link } from 'react-router';
import routesData from './SideMenuApi';

const SideMenu = () => {
  return (
    <div className="px-[24px] mt-[30px]">
      {routesData.map(item => (
        <div key={item?.id}>
          <Link
            to={item?.path}
            className="flex items-center  gap-x-[16px] mx-auto w-[192px] p-[16px] hover:bg-primary transition-all group rounded-md"
          >
            <span className=" text-balck01 text-[22px] font-medium group-hover:text-white">
              {item?.icon}
            </span>{' '}
            <span className="text-balck01 font-nunito text-sm font-semibold group-hover:text-white">
              {item?.name}
            </span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SideMenu;
