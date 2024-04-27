import React from 'react'

const Header = () => {
  return (
    <div className='h-16 w-full bg-bgColor flex gap-10 px-12 items-center justify-between'>
        <div className='h-full w-36 flex items-center font-extrabold'>
            <h1 className='text-4xl'>OB&S</h1>
        </div>
        <div className='h-full w-fit  flex gap-20 items-center text-lg'>
            <p>Home</p>
            <p>Shop</p>
            <p>About</p>
            <p>Team</p>
        </div>
        <div className='h-full w-fit flex gap-7 items-center'>
            <button className='h-10 border-2 w-28 rounded-md bg-orange-400 font-semibold'>Sign up</button>
            <button className='h-10 border-2 w-28 rounded-md bg-orange-400 font-semibold'>Login</button>
            
        </div>
    </div>
  )
}

export default Header