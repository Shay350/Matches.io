import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png'; // Ensure this path is correct

const Navbar = () => {
  return (
    <div className="navbar-container">
      <nav className="flex justify-between items-center w-full p-4">
        {/* Left side: Logo */}
        <div className="flex items-center">
          <a href="http://localhost:3000/">
            <img id="Logo" src={logo} alt="CareersIO Logo" className="h-12" />
          </a>
        </div>

        {/* Center: Links */}
        <div className="flex space-x-8 items-center">
          <Link to="/job-listings" className="navbar-link">
            About Us
          </Link>
          <Link to="/job-options" className="navbar-link">
            How It Works
          </Link>
          <Link to="/resume-upload" className="navbar-link">
            Why
          </Link>
          {/* <Link to="/job-listings" className="navbar-link">
            Job Listings
          </Link> */}
        </div>

        {/* Right side: Button */}
        <div className="flex items-center">
          <button className="navbar-button">
            <Link to="/resume-upload" className="navbar-link">
            Upload Resume
          </Link>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
