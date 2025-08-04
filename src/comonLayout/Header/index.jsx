import React from 'react';
import { IoMenuSharp } from 'react-icons/io5';
import HederLeft from './components/HeaderLayout/HederLeft';
import HederRight from './components/HeaderLayout/HederRight';

const Heder = () => {
  const user = {
    name: 'Jakaria Ahmod',
    role: 'admin', // or 'user'
    photoURL: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
  };
  return (
    <div>
      <div className="px-[30px] py-[16px] flex justify-between">
        <HederLeft></HederLeft>
        <div>
          <HederRight user={user}></HederRight>
        </div>
      </div>
    </div>
  );
};

export default Heder;
