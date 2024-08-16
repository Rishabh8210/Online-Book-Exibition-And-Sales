import React from 'react'
import pngegg from '../assets/pngegg.png'
import { Link } from 'react-router-dom'
const MainHome = () => {
    const token = localStorage.getItem('token');
    return (
        <div className='w-screen h-fit p-3 bg-bgColor flex justify-between'>
            <div className='h-full w-full md:w-1/2 py-10 flex flex-col gap-10 justify-center ' >
                <h1 className='text-6xl font-semibold text-center leading-tight'>
                    A Library That's Always Open.
                </h1>
                <p className='text-center'>You may accesst the best collection with over +30 generes</p>
                <Link to='/shop'>
                    <div className='px-5 flex flex-col items-center '>
                        <div className='w-full md:w-1/2 h-12 border-2 border-black rounded-3xl flex items-center justify-between overflow-hidden '>
                            <p className='px-10 font-semibold'>Enter</p>
                            <div className='w-12 flex items-center justify-center h-full font-bold text-xl bg-black text-white rounded-full'>→</div>
                        </div>
                        <div className='w-full pb-5'>
                            <p className='text-right'>+500 reviews</p>
                        </div>
                        {
                            token ? <p className='text-2xl  font-semibold underline'>Go to Shop →</p> : <Link to="/signin">
                                <div className='h-fit p-3 w-28 flex rounded-md text-xl bg-orange-400 font-semibold items-center justify-center'>
                                    <p className='text-white'>Sign in</p>
                                </div>
                            </Link>
                        }
                    </div>
                </Link>
            </div>
            <div className='hidden lg:flex justify-center items-center px-24'>
                <img src={pngegg} alt='MailImg' />
            </div>
        </div>
    )
}

export default MainHome