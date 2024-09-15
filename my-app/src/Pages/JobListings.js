import React, { useState, useEffect } from 'react';

const JobListings = () => {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch job listings here
    // For now, we'll use dummy data
    setJobs([
      { id: 1, title: 'Frontend Developer', company: 'Tech Co', location: 'Remote' },
      { id: 2, title: 'UX Designer', company: 'Design Inc', location: 'New York' },
      // Add more dummy jobs...
    ]);
  }, []);

  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="job-listings">
      <h2>Get Paid Fairly</h2>
      <input
        type="text"
        placeholder="Search jobs"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="job-list">
        {filteredJobs.map(job => (
          <div key={job.id} className="job-item">
            <h3>{job.title}</h3>
            <p>{job.company} - {job.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export { JobListings };
