import React from 'react'
import ig from '../assets/Designer (4).png';
const SubscriptionCard = ({subscription}) => {
      const handleAddItem = () => {
    
  };
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img
        className="w-full aspect-[9/12]"
        src={ig}
        alt={subscription?.title}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{subscription?.title}</div>
        <p className="text-gray-700 text-base">Subscription for {subscription?.duration} days</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          ₹{subscription?.amount}
        </span>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleAddItem()}
        >
          Subscribe Now
        </button>
      </div>
    </div>
  )
}

export default SubscriptionCard