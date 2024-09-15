import React from 'react';

const Navbar = () => {
  return (
    <div className="flex justify-center w-full bg-blue-900 shadow-lg">
      <nav className="flex justify-between items-center w-4/5 p-4">
        <div className="text-white text-xl font-bold">CareersIO</div>
        <button className="bg-pink-500 hover:bg-pink-600 transition-colors duration-300 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
