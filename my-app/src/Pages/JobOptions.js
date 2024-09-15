import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import axios from 'axios';

const JobOptions = () => {
  const [jobs, setJobs] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobMatches = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get('http://localhost:5000/get-job-matches');
        setJobs(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching job matches:', error);
        setError('Failed to fetch job matches. Please try again later.');
        setIsLoading(false);
      }
    };

    fetchJobMatches();
  }, []);

  const handleNextJob = () => {
    if (currentIndex < jobs.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePreviousJob = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const renderJobCard = (job) => (
    <div className="job-card p-6 border rounded-lg shadow-lg mb-4 bg-white" key={job.id}>
      <h3 className="text-2xl font-bold mb-2">{job.title}</h3>
      <p className="text-lg font-medium text-blue-600 mb-4">{(job.similarity * 100).toFixed(2)}% Match</p>
      <p className="text-gray-700 mb-4">{job.description}</p>
      <div className="skills mb-4">
        <h4 className="text-lg font-semibold mb-2">Required Skills:</h4>
        <div className="flex flex-wrap">
          {job.skills.map((skill, index) => (
            <span key={index} className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {skill.trim()}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  if (isLoading) {
    return <div className="text-center py-4">Loading job matches...</div>;
  }

  if (error) {
    return <div className="text-center py-4 text-red-500">{error}</div>;
  }

  return (
    <div className="job-options-container p-4 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Your Top Job Matches</h2>
      {jobs.length > 0 ? (
        <>
          {renderJobCard(jobs[currentIndex])}
          <div className="flex justify-between mt-4">
            <button 
              onClick={handlePreviousJob}
              disabled={currentIndex === 0}
              className={`bg-blue-500 text-white p-2 rounded-full shadow-lg ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={handleNextJob}
              disabled={currentIndex === jobs.length - 1}
              className={`bg-blue-500 text-white p-2 rounded-full shadow-lg ${currentIndex === jobs.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <ChevronRight size={24} />
            </button>
          </div>
          <p className="text-center mt-4">
            Job {currentIndex + 1} of {jobs.length}
          </p>
        </>
      ) : (
        <p className="text-center">No job matches found.</p>
      )}
    </div>
  );
};

export default JobOptions;