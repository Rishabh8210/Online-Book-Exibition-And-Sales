import React, { useEffect, useState } from 'react'
import Cart from './Cart';
import NotificationList from './NotificationList';
import { useSelector } from 'react-redux';
import notification from '../assets/notification.png'
import IssuedBooks from './IssuedBooks'
const Profile = () => {
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);
    const issuedBoooks = useSelector(store => store.issued.items)
    
    
    console.log(issuedBoooks)
    const handleClick = () => {
        window.localStorage.clear();
        window.location.href = '/signin'
    }
    return (
        <>
            <div className='min-h-[650px]  w-full flex flex-col py-8 px-3 gap-20 relative'>
                <div className='h-fit w-full flex justify-end'>
                    {!isNotificationOpen ?<img className='size-10 cursor-pointer hover:scale-110 hover:brightness-95 hover:contrast-200' src={notification} alt='O' onClick={() => setIsNotificationOpen(!isNotificationOpen)}/> : <NotificationList trigger = {isNotificationOpen} setTrigger = {setIsNotificationOpen}/>}
                    <div className='w-full flex justify-end'>
                        <button className="w-fit bg-orange-400 hover:bg-orange-700 cursor-pointer text-white font-bold py-2 px-6 rounded transition duration-300 ease-in-out transform hover:scale-110" onClick={() => handleClick()}>
                            Sign out
                        </button>
                    </div>
                </div>
                <div className='flex flex-col gap-10'>
                    <Cart />
                    <IssuedBooks />
                </div>
            </div>
        </>
    )
}

export default Profile