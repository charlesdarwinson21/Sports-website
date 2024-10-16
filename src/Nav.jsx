import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login"); 
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>SPORTIFY</h2>
      </div>
      <div className="navbar-links">
        <a href="/">Home</a>
        <a href="#about">About</a>
        <a href="#store">Store</a>
        <a href="#contact">Contact</a>
        <button className="login-btn" onClick={handleLogin}>
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
