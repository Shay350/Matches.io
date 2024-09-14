import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-navy-blue p-4">
      <div className="text-white text-xl font-bold">CareersIO</div>
      <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded">
        Submit
      </button>
    </nav>
  );
};

export default Navbar;