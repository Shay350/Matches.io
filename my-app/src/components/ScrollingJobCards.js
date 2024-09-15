import React from 'react';
import './ScrollingJobCards.css';

const ScrollingJobCards = () => {
    const jobs = [
        { title: 'Software Engineer', salary: '$120,000' },
        { title: 'Data Scientist', salary: '$110,000' },
        { title: 'Product Manager', salary: '$100,000' },
        { title: 'Graphic Designer', salary: '$60,000' },
        { title: 'Financial Analyst', salary: '$80,000' },
        { title: 'Marketing Manager', salary: '$90,000' },
        { title: 'HR Specialist', salary: '$70,000' },
        { title: 'Operations Manager', salary: '$95,000' },
    ];

    // Double the job list to create a seamless loop
    const doubledJobs = [...jobs, ...jobs];

    return (
        <div className="scrolling-cards-container">
            <div className="scrolling-job-cards">
                <div className="job-card-container">
                    {doubledJobs.map((job, index) => (
                        <div key={index} className="job-card">
                            <p className="job-title">{job.title}</p>
                            <p className="job-salary">{job.salary}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ScrollingJobCards;