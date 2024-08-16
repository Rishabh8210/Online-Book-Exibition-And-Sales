import React from 'react'
import LibraryGirl from '../assets/Library-girl.png'
const LearningBanner = () => {
  return (
    <div className='h-fit w-full flex flex-col p-16 gap-10 bg-gray-800'>
        <div className='w-full md:w-1/2 flex justify-end relative'>
            <div className='w-28 md:w-40 fit p-2 rounded-lg -top-10 -right-10 bg-orange-500 hover:bg-orange-700 absolute text-xl font-semibold flex justify-center items-center cursor-pointer'>
              <p className='w-10 text-center text-white'>+12k Books</p>
            </div>
            <img className='h-full' src={LibraryGirl} alt='Lib-Girl'/>
        </div>
        <div className='h-full md:w-1/2  justify-center flex flex-col'>
            <h1 className='text-5xl text-white font-semibold'>
                Keep Reading. Keep Learning
            </h1>
        </div>
    </div>
  )
}

export default LearningBanner