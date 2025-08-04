import React from 'react';
import { Link } from 'react-router';
import SideMenu from './components/SideMenu';

const SideBar = () => {
  return (
    <div className="bg-white shadow-2xl w-[300px] fixed h-screen">
      <div>
        <div className="pt-[24px] text-center">
          <Link to="/">
            <span className="text-primary font-nunito text-[20px] font-extrabold">
              Dash
            </span>
            <span className="text-seco font-nunito text-[20px] font-extrabold">
              Stack
            </span>
          </Link>
        </div>
      </div>
      <SideMenu></SideMenu>
    </div>
  );
};

export default SideBar;
