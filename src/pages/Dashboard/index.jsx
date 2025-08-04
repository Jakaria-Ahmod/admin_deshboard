import React from 'react';
import TotalCard from '../../globalComponents/TotalCard';
import { cardData } from './components/TotalUserAndSels.api';

const Dashboard = () => {
  return (
    <div>
      <div>
        <h1 className="text-balck01 font-nunito text-[32px] font-bold">
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
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
