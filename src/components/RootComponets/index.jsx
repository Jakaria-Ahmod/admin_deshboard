import React, { useState } from 'react';
import Header from '../../comonLayout/Header';
import { Outlet } from 'react-router';
import SideBar from '../../comonLayout/Sidever';
import { Menu } from 'lucide-react';

const RootComponents = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen overflow-hidden relative">
      {/* Mobile Menu Button */}
      {/* Sidebar */}
      <aside>
        <div className="h-full overflow-y-auto">
          <SideBar />
        </div>
      </aside>
      {/* Overlay for mobile sidebar close */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-30 z-30 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
      {/* Main Content */}
      <div className="flex-1 flex flex-col h-full w-full">
        {/* <header className="bg-white shadow w-full z-10">
          <Header />
        </header> */}

        <main className="flex-1 overflow-y-auto bg-gray-100 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default RootComponents;
