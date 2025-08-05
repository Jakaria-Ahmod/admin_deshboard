import React, { useEffect } from 'react';
import OrderList from './components/OrderList';

const OrderLists = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="bg-white01">
        <OrderList></OrderList>
      </div>
    </div>
  );
};

export default OrderLists;
