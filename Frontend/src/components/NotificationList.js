import React, { useEffect, useState } from 'react'
import cross from '../assets/cross.png'
const NotificationList = ({ trigger, setTrigger }) => {
    const [notificationData, setNotificationData] = useState([])
    async function fetchNotification() {
        const data = await fetch('https://online-book-exibition-and-sales.onrender.com/api/notify/')
        const notifyData = await data.json();
        console.log(notifyData)
        setNotificationData(notifyData)
    }
    useEffect(() => {
        fetchNotification();
    }, [])
    return (
        <div className='w-screen h-full absolute left-0 top-0 bg-white z-50 p-5 overflow-hidden '>
            <div className=' w-full h-fit p-3 pb-10 flex justify-between items-center' onClick={() => setTrigger(!trigger)}>
                <h1 className='font-bold text-3xl underline'>Notification</h1>
                <button className='rounded-lg w-fit h-fit text-lg text-white bg-orange-400 font-bold'><img className='scale-90' src={cross} alt='X' /></button>
            </div>
            <div className='w-full h-full p-5 overflow-y-scroll'>

                <div className='flex flex-col gap-5'>
                    {
                        notificationData?.data && notificationData?.data.map((data, index) => {
                            return <p className='text-base p-3 bg-orange-200 rounded-lg font-semibold'>{data?.title}</p>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default NotificationList