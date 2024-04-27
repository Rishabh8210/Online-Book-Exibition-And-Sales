import React, { useState } from 'react';

const Invoice = () => {
  const [products, setProducts] = useState([
    {
      "ISBN": "526147852",
      "title": "Whispers of the Past",
      "author": "Evelyn Oak",
      "yearOfPublication": 2003,
      "rating": 4,
      "price": 40,
      "publisher": "Pinecone Press",
      "quantity": 1
    },
    {
      "ISBN": "781369402",
      "title": "Journey Through the Stars",
      "author": "Leo P. Orion",
      "yearOfPublication": 2010,
      "rating": 5,
      "price": 30,
      "publisher": "Galaxy Books",
      "quantity": 1
    },
    {
      "ISBN": "394085729",
      "title": "The Art of Solitude",
      "author": "Sara M. Lonewood",
      "yearOfPublication": 1998,
      "rating": 3.5,
      "price": 25,
      "publisher": "Quiet Corner Publishing",
      "quantity": 1
    },
    {
      "ISBN": "840275931",
      "title": "Echoes of the Future",
      "author": "Cassandra Visions",
      "yearOfPublication": 2020,
      "rating": 4.5,
      "price": 45,
      "publisher": "Tomorrow's Tales",
      "quantity": 1
    }
  ]
  );

  const addProduct = (newProduct) => {
    setProducts([...products, { ...newProduct, quantity: 1 }]);
  };

  const calculateTotal = () => {
    return products.reduce((total, product) => total + (product.price * product.quantity), 0);
  };

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
          {products.map((product, index) => (
            <tr key={index}>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                {product.title}
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                {product.quantity}
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