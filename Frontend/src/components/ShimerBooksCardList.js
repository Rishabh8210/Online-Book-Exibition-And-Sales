import React from 'react'
import ShimerBooksCard from './ShimerBooksCard'
import {shimerCount} from '../constant'
const ShimerBooksCardList = () => {
  return (
    <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8' >
        {
            shimerCount.map((d, ind) => {
                return <ShimerBooksCard key={ind} />
            })
        }  
    </div>
  )
}

export default ShimerBooksCardList