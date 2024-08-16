import React from 'react';
import {subscription} from '../constant'
import SubscriptionCard from './SubscriptionCard';
const Subscription = () => {
 


  return (
    <div className='flex flex-col gap-10 md:flex-row justify-around p-3'>
        {
            subscription && subscription.map((data, ind) => {
                return <SubscriptionCard key={ind} subscription={data} index = {ind}/>
            })
        }
    </div>
  );
};

export default Subscription;