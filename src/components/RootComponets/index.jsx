import React from 'react';
import Header from '../../comonLayout/Header';
import { Outlet } from 'react-router'; // Ensure correct import
import SideBar from '../../comonLayout/Sidever';

const RootComponents = () => {
  return (
    <div className="flex gap-x-[30px]">
      <div className="w-[270px]">
        <aside>
          <SideBar />
        </aside>
      </div>
      <div className="w-[1650px]">
        {/* Header */}
        <header>
          <Header />
        </header>

        {/* Dynamic Page Content */}
        <main className="bg-white01 p-[30px]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default RootComponents;
