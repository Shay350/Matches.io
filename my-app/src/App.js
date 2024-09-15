import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ShufflingDisplay from './components/ShufflingDisplay';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'; // Import useNavigate
import { JobOptions } from './Pages/JobOptions';
import ResumeUpload from './Pages/ResumeUpload';
import { JobListings } from './Pages/JobListings';
import About from './Pages/AboutUs';
import ScrollingJobCards from './components/ScrollingJobCards'; // Import the new component

function App() {
  const items = ['Research', 'Law', 'Chemistry', 'Journalism', 'Accounting'];

  // Component for the Home Page with "Get Started" Button
  function HomePage() {
    const navigate = useNavigate(); // Hook to navigate to other routes

    const handleGetStartedClick = () => {
      navigate('/job-options'); // Redirect to the job-options page
    };

    return (
      <div className="App-content flex flex-col items-center justify-center min-h-screen py-10 bg-gradient-to-r from-blue-200 to-blue-100">
        <header className="App-header text-center mb-12">
          <h1 className="background: linear-gradient(45deg, #BEEBE1, #223A60);">
            Welcome to Internships.io

            <p className="text-lg text-gray-700 mb-6">
              Everyone deserves to have a clear perspective of the job market and how much they should be paid, especially people in roles like:
            </p>
          </h1>

          <ShufflingDisplay items={items} />

          <div className="my-10 w-full">
            <ScrollingJobCards />
          </div>
          <br>
          </br>
          <br>
          </br>
          <button
            onClick={handleGetStartedClick} // Handle click to navigate to JobOptions
            className="navbar-button"
          >
            Get Started
          </button>

        </header>

        {/* Get Started button */}
        <div className="mt-8">

          
        </div>
      </div>
    );
  }

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          {/* Home page route */}
          <Route path="/" element={<HomePage />} />

          {/* Other routes */}
          <Route path="/job-options" element={<JobOptions />} />
          <Route path="/resume-upload" element={<ResumeUpload />} />
          <Route path="/job-listings" element={<JobListings />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
