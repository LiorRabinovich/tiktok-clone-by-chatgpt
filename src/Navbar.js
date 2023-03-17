import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-item">
        <svg className="icon icon-home" viewBox="0 0 24 24">
          <path d="M22 9.24l-10-8-10 8v11a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1z"></path>
          <path d="M2 10.62l10-7.48 10 7.48v-2.97l-10-7.48-10 7.48z"></path>
        </svg>
      </div>
      <div className="navbar-item">
        <svg className="icon icon-discover" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="8"></circle>
          <circle cx="12" cy="12" r="3"></circle>
        </svg>
      </div>
      <div className="navbar-item">
        <svg className="icon icon-add" viewBox="0 0 24 24">
          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"></path>
        </svg>
      </div>
      <div className="navbar-item">
        <svg className="icon icon-inbox" viewBox="0 0 24 24">
          <path d="M21 5H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h9v-6h4v6h5a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z"></path>
        </svg>
      </div>
      <div className="navbar-item">
        <svg className="icon icon-profile" viewBox="0 0 24 24">
          <path d="M12 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 2c-2.66 0-8 1.34-8 4v2h16v-2c0-2.66-5.34-4-8-4z"></path>
        </svg>
      </div>
    </nav>
  );
};

export default Navbar;
