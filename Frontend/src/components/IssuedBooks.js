import React, { useState, useEffect } from 'react';
import { cartData } from '../constant'
import ItemCard from './ItemCard';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios'
import IssuedItem from './IssuedItem';

const IssuedBooks = () => {
    const id = localStorage.getItem('userId')
    const [issuedBooks, setIssuedBooks] = useState([])
    async function fetchData() {
        try {
            const data = await axios.get(`https://online-book-exibition-and-sales.onrender.com/api/user/${id}`)
            setIssuedBooks(data?.data?.data?.booksIssued)
            // console.log("liii",data?.data?.data?.booksIssued);
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        fetchData();
    }, [])
    // console.log(issuedBooks)
    const calculateTotal = () => {
        let total = 0
        for (let item of issuedBooks) {
            total += item.price;
        }

        return total
    }
    return (
        <div className="max-h-[650px] h-fit w-full bg-bgColor p-3 rounded-lg shadow-lg overflow-scroll overflow-x-hidden">
            <h1 className="text-xl font-bold text-center text-gray-800 pb-10 underline">Total issued - {issuedBooks.length} items</h1>
            <div className='w-full h-fit flex flex-col gap-7'>
                {issuedBooks.map((item, index) => (
                    <>
                        <IssuedItem key={index} item={item?.bookId} booksIssued={item} />
                        <hr className='border-black border-opacity-25' />
                    </>
                ))}
            </div>
        </div>
    )
}

export default IssuedBooks