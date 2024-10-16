// src/pages/Products.js
import React from 'react';
import { useParams } from 'react-router-dom';

const productsByCategory = {
  football: [{ name: 'Football Shoes', price: 3000, img: '/fs.jpg' }, ],
  cricket: [{ name: 'Cricket Bat', price: 5000, img: '/images/cricket-bat.jpg' }],
  hockey: [{ name: 'Hockey Stick', price: 2000, img: '/images/hockey-stick.jpg' }],
  tennis: [{ name: 'Tennis Racket', price: 1500, img: '/images/tennis-racket.jpg' }],
  basketball: [{ name: 'Basketball', price: 1200, img: '/images/basketball.jpg' }],
  baseball: [{ name: 'Baseball Glove', price: 2500, img: '/images/baseball-glove.jpg' }],
  badminton: [{ name: 'Badminton Shuttlecock', price: 300, img: '/images/shuttlecock.jpg' }],
  'table-tennis': [{ name: 'Table Tennis Paddle', price: 800, img: '/images/tt-paddle.jpg' }],
  golf: [{ name: 'Golf Club', price: 7000, img: '/images/golf-club.jpg' }],
  rugby: [{ name: 'Rugby Ball', price: 1800, img: '/images/rugby-ball.jpg' }],
  volleyball: [{ name: 'Volleyball', price: 1100, img: '/images/volleyball.jpg' }],
  cycling: [{ name: 'Cycling Helmet', price: 2000, img: '/images/cycling-helmet.jpg' }],
  'martial-arts': [{ name: 'Karate Gi', price: 1500, img: '/images/karate-gi.jpg' }],
  boxing: [{ name: 'Boxing Gloves', price: 2200, img: '/images/boxing-gloves.jpg' }],
  skateboarding: [{ name: 'Skateboard', price: 3500, img: '/images/skateboard.jpg' }],
  wrestling: [{ name: 'Wrestling Shoes', price: 3500, img: '/images/wrestling-shoes.jpg' }],
};

const Products = () => {
  const { category } = useParams();
  const products = productsByCategory[category] || [];

  return (
    <div className="min-h-screen p-6 bg-[#18181b] relative z-[2]">
      <h1 className="text-3xl font-bold text-center text-white mb-8">
        {category.charAt(0).toUpperCase() + category.slice(1).replace(/-/g, ' ')} Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="product-card bg-[#313131] rounded-lg relative overflow-hidden transition transform hover:scale-105 hover:rotate-1"
          >
            <img
              src={product.img}
              alt={product.name}
              className="product-img w-full h-48 object-cover transition-all duration-300"
            />
            <div className="textBox opacity-0 flex flex-col items-center justify-center gap-3 absolute inset-0 bg-black/70 text-white transition-opacity duration-300">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-lg">₹{product.price}</p>
              <div className="flex gap-2">
                <button className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">
                  Buy Now
                </button>
                <button className="bg-green-500 px-4 py-2 rounded hover:bg-green-600">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
