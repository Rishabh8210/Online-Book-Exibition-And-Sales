import React, {useEffect, useState} from 'react'
import ItemCard from './ItemCard'
import {books} from '../constant'
const ShopList = () => {
  const [bookData, setBookData] = useState([])
  useEffect(() => {
    fetchData();
  },[])
  async function fetchData(){
    try{
      const data = await fetch('http://52.90.160.27:3000/api/book/')
      const dataJson = await data.json()
      setBookData(dataJson);
      console.log(dataJson);
    }catch{
      console.log("Something went wrong")
    }
  }
  return (
    <div className="bg-bgColor w-screen px-16 py-5">
      <h2 className="text-3xl font-bold py-8">Shop</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {bookData?.data?.map((book, index) => (
          <ItemCard key={index} book={book} />
        ))}
      </div>
    </div>
  )
}

export default ShopList
