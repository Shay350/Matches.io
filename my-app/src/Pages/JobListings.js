import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

const JobListings = () => {
  const [jobs, setJobs] = useState({
    tier1: [],
    tier2: [],
    tier3: []
  });
  const [currentTier, setCurrentTier] = useState('tier1');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Mock data - replace with actual API call
    const mockJobs = {
      tier1: [
        { id: 1, title: 'Senior Developer', company: 'Tech Co', match: 90 },
        { id: 2, title: 'Project Manager', company: 'Manage Inc', match: 85 },
      ],
      tier2: [
        { id: 3, title: 'UX Designer', company: 'Design Co', match: 75 },
        { id: 4, title: 'Data Analyst', company: 'Data Inc', match: 60 },
      ],
      tier3: [
        { id: 5, title: 'Junior Developer', company: 'Start Up', match: 45 },
        { id: 6, title: 'Marketing Assistant', company: 'Ad Agency', match: 30 },
      ]
    };
    setJobs(mockJobs);
  }, []);

  const handleNextJob = () => {
    const currentTierJobs = jobs[currentTier];
    if (currentIndex < currentTierJobs.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else if (currentTier === 'tier1') {
      setCurrentTier('tier2');
      setCurrentIndex(0);
    } else if (currentTier === 'tier2') {
      setCurrentTier('tier3');
      setCurrentIndex(0);
    }
  };

  const renderJobCard = (job) => (
    <div className="job-card p-4 border rounded-lg shadow-sm mb-4">
      <h3 className="text-lg font-semibold">{job.title}</h3>
      <p className="text-sm text-gray-600">{job.company}</p>
      <p className="text-sm font-medium text-blue-600">{job.match}% Match</p>
    </div>
  );

  return (
    <div className="tiered-job-listings p-4">
      <h2 className="text-2xl font-bold mb-4">Roles 4 u :D</h2>
      <div className="tiers flex">
        <div className="tier flex-1 mr-2">
          <h3 className="text-lg font-semibold mb-2">Tier 1 (80%+ Match)</h3>
          {jobs.tier1.map(renderJobCard)}
        </div>
        <div className="tier flex-1 mx-2">
          <h3 className="text-lg font-semibold mb-2">Tier 2 (50-80% Match)</h3>
          {jobs.tier2.map(renderJobCard)}
        </div>
        <div className="tier flex-1 ml-2">
          <h3 className="text-lg font-semibold mb-2">Tier 3 (&lt;50% Match)</h3>
          {jobs.tier3.map(renderJobCard)}
        </div>
      </div>
      <button 
        onClick={handleNextJob}
        className="fixed right-4 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full shadow-lg"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default JobListings;