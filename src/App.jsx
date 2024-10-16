import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import Nav from './Nav';
import Data from './Data';
import Categories from './Categories';
import Products from './Product';
import Footer from './Footer';
import Login from './Login'; // Import Login component

// Layout Wrapper to apply conditional layout components
const Layout = ({ children }) => {
  const location = useLocation(); // Detect current route

  // Only show Nav, Data, and Footer on non-login routes
  const showLayout = location.pathname !== '/login';

  return (
    <>
      {showLayout && <Nav />}
      {showLayout && <Data />}
      {children}
      {showLayout && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Categories />} />
          <Route path="/products/:category" element={<Products />} />
          <Route path="/login" element={<Login />} /> {/* Login route */}
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;










