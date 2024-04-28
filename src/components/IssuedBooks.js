import React, { useState } from 'react';
import { cartData } from '../constant'
import CartItem from './CartItem';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const IssuedBooks = () => {
    const issuedBooks = useSelector(store => store.issued.items)
    console.log(issuedBooks)
    const calculateTotal = () => {
        let total = 0
        for (let item of issuedBooks) {
          total += item.price;
        }
        
        return total
      }
    return (
        <div className="cart-page max-h-[650px] h-fit w-[900px] bg-bgColor px-8 py-3 rounded-lg shadow-lg overflow-scroll">
            <h1 className="text-xl font-bold text-center text-gray-800">Total issued books - {issuedBooks.length}</h1>
            {issuedBooks.map((item, index) => (
                <CartItem key={index} item={item} />
            ))}
            <div className="flex justify-between items-center mt-8 p-4 bg-white rounded shadow">
                <h2 className="text-xl font-bold text-gray-800">Total Amount:</h2>
                <span className="text-xl font-bold text-green-500">₹{calculateTotal()}</span>
            </div>

             
        </div>
    )
}

export default IssuedBooks