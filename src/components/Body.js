import React from 'react'

import Footer from './Footer'
import ShopList from './ShopList'
import Cart from '../components/Cart'
import Invoice from './Invoice'
import { Outlet } from 'react-router-dom'
const Body = () => {
  return (
    <div className='min-h-screen bg-bgColor'>
        <Outlet />
        
        {/* <ShopList /> */}
        {/* <Cart /> */}
        {/* <Invoice /> */}
    </div>
  )
}

export default Body