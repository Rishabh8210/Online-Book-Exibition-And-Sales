import React from 'react'
import MainHome from './MainHome'
import BookLists from './BookLists'
import LearningBanner from './LearningBanner'
import BookCategories from '../components/BookCategories'
import FeaturedCollection from './FeaturedCollection'
import Footer from './Footer'
import ShopList from './ShopList'
import Cart from '../components/Cart'
import Invoice from './Invoice'
const Body = () => {
  return (
    <div className='min-h-screen bg-bgColor'>
        {/* <MainHome />
        <BookLists />
        <LearningBanner />
        <FeaturedCollection />
        <BookCategories />
        <Footer /> */}
        {/* <ShopList /> */}
        {/* <Cart /> */}
        <Invoice />
    </div>
  )
}

export default Body