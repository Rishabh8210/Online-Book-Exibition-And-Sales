import React, { useState } from 'react';
import {cartData} from '../constant'
import logo from '../assets/pngegg.png'
const CartItem = ({ item, onRemove }) => (
  <div className="flex justify-between items-center mb-4 p-4 border-b border-gray-200">
    <div className="flex items-center">
      <img src={logo} alt={item.title} className="w-20 h-20 mr-4 rounded shadow" />
      <div>
        <h5 className="text-lg font-bold text-gray-800">{item.title}</h5>
        <p className="text-gray-600">by {item.author}</p>
        <p className="text-gray-600">Price: ₹{item.price}</p>
      </div>
    </div>
    <button
      onClick={() => onRemove(item.ISBN)}
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:-translate-y-1"
    >
      Remove
    </button>
  </div>
);

const Cart = () => {
  const [cart, setCart] = useState(cartData)
  const removeFromCart = (ISBN) => {
    setCart(cart.filter(product => product.ISBN !== ISBN));
  };

  const calculateTotal = () => {
    return cart.reduce((total, product) => total + (product.price * product.quantity), 0);
  };

  return (
    <div className="cart-page bg-gray-100 p-8 rounded-lg shadow-lg max-w-3xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Your Cart</h1>
      {cart.map((item, index) => (
        <CartItem key={index} item={item} onRemove={removeFromCart} />
      ))}
      <div className="flex justify-between items-center mt-8 p-4 bg-white rounded shadow">
        <h2 className="text-xl font-bold text-gray-800">Total Amount:</h2>
        <span className="text-xl font-bold text-green-500">₹{calculateTotal()}</span>
      </div>
      <div className="text-center mt-6">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition duration-300 ease-in-out transform hover:scale-110">
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Cart;