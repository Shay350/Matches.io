import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png'

const Navbar = () => {
  return (
    <div className="flex justify-center w-full bg-blue-900 shadow-lg">
      <nav className="flex justify-between items-center w-4/5 p-4">
        

        <div className="flex space-x-4">

          <a href="http://localhost:3000/">
            <img id="Logo" src={logo} alt="CareersIO Logo" className="h-0" />
          </a>

          <Link to="/job-listings" className="text-white font-bold py-2 px-4">
            About Us
          </Link>

          <Link to="/job-options" className="text-white font-bold py-2 px-4">
            Job Options
          </Link>
          
          <Link to="/resume-upload" className="text-white font-bold py-2 px-4">
            Resume Upload
          </Link>

          <Link to="/job-listings" className="text-white font-bold py-2 px-4">
            Job Listings
          </Link>

          <button id="Upload" class="button">
            Upload Resume
          </button>

        </div>
      </nav>
    </div>
  );
};

export default Navbar;
