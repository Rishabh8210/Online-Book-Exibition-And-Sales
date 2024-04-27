import React from 'react'
import { BookData } from '../constant'
const BookCard = ({id}) => {
  return (
    <div className='h-80 w-44 flex items-center flex-col gap-2 flex-shrink-0 hover:border-2 border-orange-400 cursor-pointer'>
        <div className='h-4/6 p-2 flex-shrink-0'>
            <img className='h-full rounded-lg' src={BookData[id]?.bookImage} alt='BookImg'/>
        </div>
        <p className='text-sm text-gray-400 font-semibold'>{BookData[id]?.bookAuthor.substr(0,10)}</p>
        <p>{BookData[id]?.title}</p>
        <div className='flex w-full px-2 justify-between text-orange-400 font-semibold'>
            <p>₹{BookData[id]?.price}</p>
            <p>+{BookData[id]?.rating}★</p>
        </div>
    </div>
  )
}

export default BookCard