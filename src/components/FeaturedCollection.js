import React from 'react'
import BookCard from './BookCard'
const FeaturedCollection = () => {
  return (
    <div className='min-h-80 w-full px-16'>
        <p className='text-2xl font-semibold py-5'>Featured Collections</p>
        <div className='flex gap-10 overflow-auto'>
            <BookCard id={1}/>
            <BookCard id={0}/>
            <BookCard id={1}/>
            <BookCard id={0}/>
            <BookCard id={1}/>
            <BookCard id={1}/>
            <BookCard id={0}/>
            <BookCard id={1}/>
            <BookCard id={0}/>
            <BookCard id={1}/>
        </div>
    </div>
  )
}

export default FeaturedCollection