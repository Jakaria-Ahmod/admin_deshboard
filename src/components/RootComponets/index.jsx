import React from 'react';
import Header from '../../comonLayout/Header';
import { Outlet } from 'react-router'; // Ensure correct import
import SideBar from '../../comonLayout/Sidever';

const RootComponents = () => {
  return (
    <div className="flex">
      <div className="w-[270px]">
        <aside>
          {/* <SideBar /> */}
          <h1 className="bg-black">side</h1>
        </aside>
      </div>
      <div className="w-[1650px]">
        {/* Header */}
        <header>
          {/* <Header /> */}
          <h1 className="bg-green-700">heaeer</h1>
        </header>

        {/* Dynamic Page Content */}
        <main>
          {/* <Outlet /> */}
          <h1>side</h1>
        </main>
      </div>
    </div>
  );
};

export default RootComponents;
