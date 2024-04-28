import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const Invoice = () => {
   const cartItemsData = useSelector(store => store.cart.items)
   console.log(cartItemsData)
   const calculateTotal = () => {
    let total = 0
    for(let item of cartItemsData){
      total += item.price;
    }
    return total
  }
  return (
    <div className="invoice-page bg-white px-16 py-8">
      <h1 className="text-2xl font-bold mb-4">OB&S Invoice</h1>
      <p>GST Number: vit00000</p>
      <p>Date: {new Date().toLocaleDateString()}</p>
      <table className="min-w-full leading-normal mt-8">
        <thead>
          <tr>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Title
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Quantity
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          {cartItemsData.map((product, index) => (
            <tr key={index}>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                {product?.title}
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                {product.quantity ? product.quantity : 1}
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                ₹{product.price}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end mt-6">
        <h2 className="text-xl font-bold">Total Amount: ₹{calculateTotal()}</h2>
      </div>
    </div>
  );
};

export default Invoice;