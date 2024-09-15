import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ShufflingDisplay from './components/ShufflingDisplay';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import JobOptions from './Pages/JobOptions';
import ResumeUpload from './Pages/ResumeUpload';
import JobListings from './Pages/JobListings';

function App() {
  const items = ['Research', 'Law', 'Chemistry', 'Journalism', 'Accounting'];

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          {/* Home page route */}
          <Route
            path="/"
            element={
              <div className="App-content flex flex-col items-center justify-center min-h-screen py-10 bg-gradient-to-r from-blue-200 to-blue-100">
                <header className="App-header text-center mb-12">
                  <h1 className="text-5xl font-extrabold text-gray-900 mb-6 drop-shadow-lg">
                    Welcome to Internships.io
                  </h1>
                  <p className="text-lg text-gray-700">
                    Everyone deserves to have a clear perspective of the job market, especially people in roles like: 
                    <ShufflingDisplay items={items} />
                  </p>
                </header>
              </div>
            }
          />

          {/* Other routes */}
          <Route path="/job-options" element={<JobOptions />} />
          <Route path="/resume-upload" element={<ResumeUpload />} />
          <Route path="/job-listings" element={<JobListings />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
