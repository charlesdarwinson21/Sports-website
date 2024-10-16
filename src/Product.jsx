// src/pages/Products.js
import React from 'react';
import { useParams } from 'react-router-dom';

const Products = () => {
  const { category } = useParams();
  let products = [];

  // Manually handle each category with an if-else block
  if (category === 'football') {
    products = [{ name: 'Football Shoes', price: 3000, img: '/fs.jpg' }];
  } else if (category === 'cricket') {
    products = [{ name: 'Cricket Bat', price: 5000, img: '/images/cricket-bat.jpg' }];
  } else if (category === 'hockey') {
    products = [{ name: 'Hockey Stick', price: 2000, img: '/images/hockey-stick.jpg' }];
  } else if (category === 'tennis') {
    products = [{ name: 'Tennis Racket', price: 1500, img: '/images/tennis-racket.jpg' }];
  } else if (category === 'basketball') {
    products = [{ name: 'Basketball', price: 1200, img: '/images/basketball.jpg' }];
  } else if (category === 'baseball') {
    products = [{ name: 'Baseball Glove', price: 2500, img: '/images/baseball-glove.jpg' }];
  } else if (category === 'badminton') {
    products = [{ name: 'Badminton Shuttlecock', price: 300, img: '/images/shuttlecock.jpg' }];
  } else if (category === 'table-tennis') {
    products = [{ name: 'Table Tennis Paddle', price: 800, img: '/images/tt-paddle.jpg' }];
  } else if (category === 'golf') {
    products = [{ name: 'Golf Club', price: 7000, img: '/images/golf-club.jpg' }];
  } else if (category === 'rugby') {
    products = [{ name: 'Rugby Ball', price: 1800, img: '/images/rugby-ball.jpg' }];
  } else if (category === 'volleyball') {
    products = [{ name: 'Volleyball', price: 1100, img: '/images/volleyball.jpg' }];
  } else if (category === 'cycling') {
    products = [{ name: 'Cycling Helmet', price: 2000, img: '/images/cycling-helmet.jpg' }];
  } else if (category === 'martial-arts') {
    products = [{ name: 'Karate Gi', price: 1500, img: '/images/karate-gi.jpg' }];
  } else if (category === 'boxing') {
    products = [{ name: 'Boxing Gloves', price: 2200, img: '/images/boxing-gloves.jpg' }];
  } else if (category === 'skateboarding') {
    products = [{ name: 'Skateboard', price: 3500, img: '/images/skateboard.jpg' }];
  } else if (category === 'wrestling') {
    products = [{ name: 'Wrestling Shoes', price: 3500, img: '/images/wrestling-shoes.jpg' }];
  }

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
