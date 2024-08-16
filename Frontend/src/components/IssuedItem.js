import React, { useState } from 'react';
import logo from '../assets/pngegg.png'
import { useDispatch } from 'react-redux';
import { removeItem } from '../utils/cartSlice';

const IssuedItem = ({ item, booksIssued }) => {
    return (
        <div className="flex flex-col w-full md:flex-row justify-between gap-5 items-center">
            <div className="flex w-full items-center gap-5">
                <img src={item?.imageURLS?.large} alt={item.title} className="w-20 h-20 p-2 scale-125 md:scale-110 rounded shadow" />
                <div>
                    <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
                    <p className="text-gray-600">by {item.author}</p>
                    <p className="text-gray-600">Price: ₹{item.price}</p>
                    <p className='font-bold text-base'>Return Date: {booksIssued?.returnDate.split('T')[0]}</p>
                </div>
            </div>
            <button
                className="bg-orange-400 hover:bg-orange-700 text-white w-fit h-fit font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:-translate-y-1"
            >
                Read
            </button>
        </div>
    );
}
export default IssuedItem
