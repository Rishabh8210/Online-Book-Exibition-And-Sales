import React, { useState } from 'react'
import ProfileIcon from '../assets/icons8-male-user-100.png'
import { Link } from 'react-router-dom'
import Navigation from './Navigation'
import hamburgMenu from '../assets/hamburgMenu.png'
const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const token = window.localStorage.getItem('token');
    return (
        <div className='h-fit md:h-16 w-full bg-bgColor flex gap-10 p-3 lg:px-12 items-center justify-between'>
            <div className='h-full w-36 flex items-center font-extrabold'>
                <h1 className='text-4xl'>OB&S</h1>
            </div>
            <p className='h-fit  w-fit px-3 py-2 text-2xl font-bold text-white flex rounded-md bg-orange-400 items-center justify-center lg:hidden' onClick={() => setIsNavOpen(!isNavOpen)}><img src={hamburgMenu} alt='Menu'/></p>
            {
                isNavOpen && <Navigation trigger={isNavOpen} setTrigger={setIsNavOpen} />
            }
            <div className='hidden h-full w-fit lg:flex gap-20 items-center text-lg'>
                <Link to="/">
                    <p className='font-bold hover:underline'>Home</p>
                </Link>
                <Link to="/shop">
                    <p className='font-bold hover:underline'>Shop</p>
                </Link>
                <Link to="/about">
                    <p className='font-bold hover:underline'>About</p>
                </Link>
                
                <Link to="/bookFair">
                    <p className='font-bold hover:underline'>Book Fair</p>
                </Link>
                <Link to="/subscription">
                    <p className='font-bold hover:underline'>Subscription</p>
                </Link>
            </div>
            <div className='hidden lg:block'>
                {
                    token ? <Link to='/profile'><img className='w-10' src={ProfileIcon} alt='Profile' /></Link> :
                        <Link to="/signin">
                            <div className='h-10 w-24 flex rounded-md bg-orange-400 font-semibold items-center justify-center'>
                                <p className='text-white'>Sign in</p>
                            </div>
                        </Link>
                }
            </div>
        </div>
    )
}

export default Header