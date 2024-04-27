import React, { useState } from 'react';
import {cartData} from '../constant'
import CartItem from './CartItem';

const Cart = () => {
  const [cart, setCart] = useState(cartData)
  const removeFromCart = (ISBN) => {
    setCart(cart.filter(product => product.ISBN !== ISBN));
  };

  const calculateTotal = () => {
    return cart.reduce((total, product) => total + (product.price * product.quantity), 0);
  };

  return (
    <div className="cart-page h-[650px] w-[900px] bg-bgColor px-8 py-3 rounded-lg shadow-lg overflow-scroll">
      <h1 className="text-xl font-bold text-center text-gray-800">Your Cart</h1>
      {cart.map((item, index) => (
        <CartItem key={index} item={item} onRemove={removeFromCart} />
      ))}
      {cart.map((item, index) => (
        <CartItem key={index} item={item} onRemove={removeFromCart} />
      ))}
      <div className="flex justify-between items-center mt-8 p-4 bg-white rounded shadow">
        <h2 className="text-xl font-bold text-gray-800">Total Amount:</h2>
        <span className="text-xl font-bold text-green-500">₹{calculateTotal()}</span>
      </div>
      <div className="text-center mt-6">
        <button className="bg-blue-500 hover:bg-orange-400 text-white font-bold py-2 px-6 rounded transition duration-300 ease-in-out transform hover:scale-110">
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Cart;