import React from 'react'

const ItemCard = ({book}) => {
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
        <img className="w-full" src='https://www.bing.com/th?id=OIP.4zygV7JXARRma1FeXBTxtgHaL0&w=130&h=208&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' alt={book.name} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{book.name}</div>
          <p className="text-gray-700 text-base">
            by {book.author}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><span className='line-through text-gray-400 px-2'>₹{(book.amount * 1.1).toFixed(2)}</span> ₹{book.amount}</span>
        </div>
        <div className="px-6 pt-4 pb-2">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add to Cart
          </button>
        </div>
      </div>
    );
}

export default ItemCard

