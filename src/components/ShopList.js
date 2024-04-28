import React, { useEffect, useState } from 'react'
import ItemCard from './ItemCard'
import { books } from '../constant'
import ShimerBooksCardList from './ShimerBooksCardList'
const ShopList = () => {
  const [search, setSeachedItem] = useState('')
  const [bookData, setBookData] = useState([])
  useEffect(() => {
    fetchData();
  }, [])
  async function fetchData() {
    try {
      const data = await fetch('http://52.90.160.27:3000/api/book/')
      const dataJson = await data.json()
      setBookData(dataJson);
      console.log(dataJson);
    } catch {
      console.log("Something went wrong")
    }
  }
  const filterBooks = () => {

  }
  return (
    <div className="bg-bgColor w-screen px-16 py-5">
      <div className='w-full flex justify-between'>
        <h2 className="text-3xl font-bold py-8">Shop</h2>
        <div className='w-1/3 flex'>
          <input className='h-12 w-5/6 px-5 text-xl rounded-xl' type='text' name='search' placeholder='Search book' value={search} onChange={(e) => setSeachedItem(e.target.value)} />
          <button className='h-12 w-28 rounded-md bg-orange-400 text-white font-semibold hover:bg-orange-100' onClick={()=> filterBooks()}>Search</button>
        </div>
      </div>
      {
        bookData.length == 0 ? <ShimerBooksCardList /> : <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {bookData?.data?.map((book, index) => (
            <ItemCard key={index} book={book} />
          ))}
        </div>
      }
    </div>
  )
}

export default ShopList
