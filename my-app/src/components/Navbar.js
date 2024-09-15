import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="flex justify-center w-full bg-blue-900 shadow-lg">
      <nav className="flex justify-between items-center w-4/5 p-4">
        <div className="text-white text-xl font-bold">CareersIO</div>
        <div className="flex space-x-4">
          <Link to="/" className="text-white font-bold py-2 px-4">
            Home
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
          <button className="bg-pink-500 hover:bg-pink-600 transition-colors duration-300 text-white font-bold py-2 px-4 rounded">
            Submit
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
