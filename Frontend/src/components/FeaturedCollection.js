import React, { useState, useEffect } from 'react'
import BookCard from './BookCard'
const FeaturedCollection = () => {
  const [bookData, setBookData] = useState([])
  const [featuredBooks, setFeaturedBooks] = useState([])
  useEffect(() => {
    fetchData();
  }, [])
  async function fetchData() {
    try {
      const data = await fetch('https://online-book-exibition-and-sales.onrender.com/api/book/')
      const dataJson = await data.json()
      setBookData(dataJson?.data);
      let filterData = dataJson?.data?.filter(element => element?.ratings >= 4);
      setFeaturedBooks(filterData)
      console.log(dataJson?.data);
    } catch {
      console.log("Something went wrong")
    }
  }
  return (
    <div className='h-fit w-full p-3'>
      <p className='text-2xl font-semibold'>Featured Collections</p>
      <div className='w-full flex gap-5 py-5 overflow-auto'>
        {
          featuredBooks && featuredBooks.map((data, ind) => {
            return <BookCard key={data.ISBN} data={data} />
          })
        }
      </div>
    </div>
  )
}

export default FeaturedCollection