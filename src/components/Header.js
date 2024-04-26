import React from 'react';
import '../style/Header.css';
import '../style/App.css';

import logo from '../images/home/icon-logo.svg';
import userIcon from '../images/home/icon-person.svg';
import searchIcon from '../images/home/icon-lupa.svg';
import heartIcon from '../images/home/icon-heart.svg';
import cartIcon from '../images/home/icon-cart.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
        <a className="text-logo"><h2><strong>Furniro</strong></h2></a>
      </div>
      <nav className="menu">
        <ul className="menu-list">
        
          <li><a href="/home">Home</a></li>
          <li><a href="/shop">Shop</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>

      <div className="user-actions">
        <img src={userIcon} alt="User" className="user-icon" />
        <img src={searchIcon} alt="Search" className="search-icon" />
        <img src={heartIcon} alt="Favorites" className="favorites-icon" />
        <img src={cartIcon} alt="Cart" className="cart-icon" />
      </div>
    </header>
  );
}

export default Header;
