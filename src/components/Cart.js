import React, { useState } from 'react';
import {cartData} from '../constant'
import CartItem from './CartItem';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Cart = () => {
  let totalAmount = 0;
  const cartItemsData = useSelector(store => store.cart.items)
  console.log(cartItemsData)

  const handlePlaceOrder = () => {
    if(totalAmount == 0){
      alert("Cart is Empty")
    }
    else
    {
      window.location.href = '/invoice'
    }
  }

  const calculateTotal = () => {
    let total = 0
    for(let item of cartItemsData){
      total += item.price;
    }
    totalAmount = total
    return total
  }
  return (
    <div className="cart-page h-[650px] w-[900px] bg-bgColor px-8 py-3 rounded-lg shadow-lg overflow-scroll">
       <h1 className="text-xl font-bold text-center text-gray-800">Your Cart - {cartItemsData.length} items</h1>
      {cartItemsData.map((item, index) => (
        <CartItem key={index} item={item}/>
      ))}
      <div className="flex justify-between items-center mt-8 p-4 bg-white rounded shadow">
        <h2 className="text-xl font-bold text-gray-800">Total Amount:</h2>
        <span className="text-xl font-bold text-green-500">₹{calculateTotal()}</span>
      </div>
      
      <div className="text-center mt-6 w-full flex justify-center">
      {
        totalAmount == 0 ? <p className="w-fit bg-red-600 cursor-pointer text-white font-bold py-2 px-6 rounded transition duration-300 ease-in-out transform hover:scale-110">Your Cart is Empty !</p> : 
        <Link to='/invoice'>
          <p className="w-fit bg-blue-500 hover:bg-orange-400 cursor-pointer text-white font-bold py-2 px-6 rounded transition duration-300 ease-in-out transform hover:scale-110">Place Order</p>
        </Link>
      }
      </div>
    </div>
  );
};

export default Cart;