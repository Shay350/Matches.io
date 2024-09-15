// components/ScrollingJobCards.js
import React, { useEffect, useState } from 'react';
import './ScrollingJobCards.css';

const ScrollingJobCards = () => {
    const jobs = [
        { title: 'Software Engineer', salary: '$120,000' },
        { title: 'Data Scientist', salary: '$110,000' },
        { title: 'Product Manager', salary: '$100,000' },
        { title: 'Graphic Designer', salary: '$60,000' },
        { title: 'Financial Analyst', salary: '$80,000' },
        { title: 'Mechanical Engineer', salary: '$85,000' },
        { title: 'Marketing Specialist', salary: '$70,000' },
        { title: 'Operations Manager', salary: '$95,000' },
    ];

    const [startIndex, setStartIndex] = useState(0);

    // Automatically scroll to the next set of jobs every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setStartIndex((prevIndex) => (prevIndex + 1) % jobs.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [jobs.length]);

    // Get the current four jobs to display
    const visibleJobs = jobs.slice(startIndex, startIndex + 4).concat(
        jobs.slice(0, Math.max(0, 4 - (jobs.length - startIndex)))
    );

    return (
        <div className="scrolling-job-cards">
            {visibleJobs.map((job, index) => (
                <div key={index} className="job-card">
                    <p className="job-title">{job.title}</p>
                    <p className="job-salary">{job.salary}</p>
                </div>
            ))}
        </div>
    );
};

export default ScrollingJobCards;
