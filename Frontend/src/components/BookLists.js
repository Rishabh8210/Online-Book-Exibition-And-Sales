import React, {useState, useEffect} from 'react'
import BookCard from './BookCard'
import { BookData } from '../constant'
const BookLists = () => {
  const [bookData, setBookData] = useState([])
  const [newBooks, setNewbooks] = useState([])
  useEffect(() => {
    fetchData();
  },[])
  async function fetchData(){
    try{
      const data = await fetch('https://online-book-exibition-and-sales.onrender.com/api/book/')
      const dataJson = await data.json()
      setBookData(dataJson?.data);
      let filterData = dataJson?.data.filter(element => element?.yearOfPublication >= 1950);
      setNewbooks(filterData)
    }catch{
      console.log("Something went wrong")
    }
  }
  return (
    <div className='min-h-80 w-full p-3'>
        <p className='text-2xl font-semibold py-5'>New Books</p>
        <div className='flex gap-5 overflow-auto'>
            {
              newBooks && newBooks.map((data, ind) => {
                 return <BookCard key={data.ISBN} data = {data}/>
              })
            }
        </div>
    </div>
  )
}

export default BookLists