import React from 'react';
import TotalCard from '../../globalComponents/TotalCard';
import { cardData } from './components/TotalUserAndSels.api';
import SimpleLineChart from './components/LineChart';
import DealsDetails from './components/DealsDetails';

const Dashboard = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen  bg-gray-50">
      <h1 className="text-black font-nunito text-2xl sm:text-3xl font-bold">
        Dashboard
      </h1>

      <div className="mt-8 space-y-8">
        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cardData.map((item, idx) => (
            <TotalCard
              key={idx}
              title={item?.title}
              value={item?.value}
              percent={item?.percent}
              subText={item?.subText}
              trendColor={item?.trendColor}
              icon={item?.icon}
            />
          ))}
        </div>

        {/* Sales Details Chart */}
        <section className="bg-white shadow-lg rounded-md p-6 sm:p-8">
          <h2 className="text-black font-nunito text-xl sm:text-2xl font-bold mb-8">
            Sales Details
          </h2>
          <SimpleLineChart />
        </section>

        {/* Deals Details */}
        <section className="bg-white shadow-lg rounded-md p-6 sm:p-8 hidden md:block">
          <h2 className="text-black font-nunito text-xl sm:text-2xl font-bold mb-8">
            Deals Details
          </h2>
          <DealsDetails />
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
