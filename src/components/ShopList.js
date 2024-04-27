import React from 'react'
import ItemCard from './ItemCard'
import {books} from '../constant'
const ShopList = () => {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold py-8">Shop</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {books.map((book, index) => (
          <ItemCard key={index} book={book} />
        ))}
      </div>
    </div>
  )
}

export default ShopList
