// components/ScrollingJobCards.js
import React, { useEffect, useState, useRef } from 'react';
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

    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef(null);

    // Start the scrolling effect
    useEffect(() => {
        const interval = setInterval(() => {
            scrollUp();
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const scrollUp = () => {
        if (containerRef.current) {
            containerRef.current.style.transition = 'transform 0.5s ease-in-out';
            containerRef.current.style.transform = 'translateY(-85px)'; // Move by one card height (70px + gap)

            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % jobs.length);

                // Reset the transition and translation after the animation
                containerRef.current.style.transition = 'none';
                containerRef.current.style.transform = 'translateY(0)';
            }, 500); // Wait for the transition to finish (0.5s)
        }
    };

    // Create a sliding window of 4 jobs, adjusting for when currentIndex moves past the array length
    const displayedJobs = [
        jobs[currentIndex % jobs.length],
        jobs[(currentIndex + 1) % jobs.length],
        jobs[(currentIndex + 2) % jobs.length],
        jobs[(currentIndex + 3) % jobs.length],
    ];

    return (
        <div className="scrolling-job-cards">
            <div className="job-card-container" ref={containerRef}>
                {displayedJobs.map((job, index) => (
                    <div key={index} className="job-card">
                        <p className="job-title">{job.title}</p>
                        <p className="job-salary">{job.salary}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ScrollingJobCards;
