import React from 'react'
import cross from '../assets/cross.png'
import { Link } from 'react-router-dom'

const Navigation = ({trigger, setTrigger}) => {
  const token = localStorage.getItem('token')
  return (
    <div className='z-50 h-screen w-screen fixed left-0 top-0 p-3 uppercase bg-white flex flex-col gap-5 items-center '>
      <div className=' w-full flex justify-end' onClick={() => setTrigger(!trigger)}>
        <button className='rounded-lg text-lg text-white bg-orange-400 font-bold'><img className='scale-90' src={cross} alt='X'/></button>
      </div>
      <div className='py-10 flex flex-col gap-5 justify-center items-center'>
        <Link to='/'><h1 className='text-4xl font-semibold hover:text-orange-400' onClick={() => setTrigger(!trigger)}>Home</h1></Link>
        <Link to='/about'><h1 className='text-4xl font-semibold hover:text-orange-400' onClick={() => setTrigger(!trigger)}>About us</h1></Link>
        <Link to='/subscription'><h1 className='text-4xl font-semibold hover:text-orange-400' onClick={() => setTrigger(!trigger)}>subscription</h1></Link>
        {token && <Link to='/shop'><h1 className='text-4xl font-semibold hover:text-orange-400' onClick={() => setTrigger(!trigger)}>Shop</h1></Link>}
        {token && <Link to='/bookFair'><h1 className='text-4xl font-semibold hover:text-orange-400' onClick={() => setTrigger(!trigger)}>Fair</h1></Link>}
        {token ?<Link to='/profile'><h1 className='text-4xl font-semibold text-orange-400' onClick={() => setTrigger(!trigger)}>Profile</h1></Link>:  <Link to='/signin'><h1 className='text-4xl font-semibold text-orange-400' onClick={() => setTrigger(!trigger)}>Sign in</h1></Link>}
      </div>
    </div>
  )
}

export default Navigation