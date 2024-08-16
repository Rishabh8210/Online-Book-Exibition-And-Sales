import React, { useState, useEffect } from 'react';
import ig from '../assets/Designer (3).png'
import ShimerBooksCardList from './ShimerBooksCardList';
import ItemCard from './ItemCard';
import axios from 'axios'
const BookFair = () => {
    const [bookData, setBookData] = useState([])
    const token = localStorage.getItem('token');
    if (!token) {
        window.location = '/signin'
    }
    useEffect(() => {
        fetchData();
    }, [])
    async function fetchData() {
        try {
            const data = await axios.get('https://online-book-exibition-and-sales.onrender.com/api/fair/')
            setBookData(data?.data?.data?.books);
            console.log(data?.data?.data?.books);
        } catch {
            console.log("Something went wrong")
        }
    }
    return (
        <>
            <div className="flex flex-col-reverse md:flex-row w-full h-fit gap-10 bg-bgColor px-5 py-5">
                <div className="w-full md:w-2/5">
                    <img
                        src={ig}
                        alt="Book Fair"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="w-full md:w-3/5 flex flex-col items-center justify-center gap-10 ">
                    <h1 className="text-bold text-8xl text-center font-semibold uppercase cursor-pointer hover:text-orange-500">
                        Book <span className='text-bold text-9xl text-orange-500 hover:text-black cursor-pointer text-center font-semibold uppercas'> Fair</span>
                    </h1>
                    <p className='hidden md:block text-center px-10 text-xl font-medium leading-loose'>Discover a world of literary wonders at our Book Fair, where every genre finds its home. Whether you're a seasoned reader or new to the world of books, there's something for everyone to explore and enjoy.</p>
                </div>  
            </div>
            <div className="bg-bgColor w-full flex flex-col justify-center items-center px-5 py-5">
                <div className='w-full flex justify-between'>
                    <h2 className="text-5xl font-bold py-8 uppercase">Sale</h2>
                </div>
                {
                    bookData && bookData.length == 0 ? <ShimerBooksCardList /> :
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                            {
                                bookData && bookData.map((book, index) => {
                                    return <ItemCard key={index} book={book} />
                                })
                            }
                        </div>
                }
            </div>
        </>
    );
};

export default BookFair;