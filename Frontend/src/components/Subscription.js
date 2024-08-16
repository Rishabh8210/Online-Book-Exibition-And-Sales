import React from 'react';
import {subscription} from '../constant'
import SubscriptionCard from './SubscriptionCard';
const Subscription = () => {
 


  return (
    <div className='flex w-full flex-col gap-10 md:flex-row md:justify-around justify-center items-center p-3 py-10'>
        {
            subscription && subscription.map((data, ind) => {
                return <SubscriptionCard key={ind} subscription={data} index = {ind}/>
            })
        }
    </div>
  );
};

export default Subscription;