import React from 'react';
import TotalCard from '../../globalComponents/TotalCard';
import { cardData } from './components/TotalUserAndSels.api';
import LineAnimation from './components/LineChart';
import SimpleLineChart from './components/LineChart';
import DealsDetails from './components/DealsDetails';

const Dashboard = () => {
  window.scrollTo(0, 0);
  return (
    <div>
      <div className="pb-[80px]">
        <h1 className="text-balck01 font-nunito text-[32px] font-bold ">
          Dashboard
        </h1>
        <div className="mt-[30px]">
          <div className="grid grid-cols-4 gap-[30px]">
            {cardData.map(item => (
              <div>
                <TotalCard
                  title={item?.title}
                  value={item?.value}
                  percent={item?.percent}
                  subText={item?.subText}
                  trendColor={item?.trendColor}
                  icon={item?.icon}
                ></TotalCard>
              </div>
            ))}
          </div>
          <div className="bg-white shadow-1xl mt-[30px] py-[37px] px-[30px] rounded-md">
            <h1 className="text-balck01 font-nunito text-[32px] font-bold mb-[51px]">
              Sales Details
            </h1>
            <SimpleLineChart></SimpleLineChart>
          </div>
          <div className="bg-white shadow-1xl mt-[30px] py-[37px] px-[30px] rounded-md">
            <h1 className="text-balck01 font-nunito text-[32px] font-bold mb-[51px]">
              Deals Details
            </h1>
            <DealsDetails></DealsDetails>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
