// src/App.js
import React, { useState, useRef } from 'react';
import './index.css'; // Ensure Tailwind is imported here

const App = () => {
    // Sample data for demonstration
    const sampleImages = Array.from({ length: 10 }, (_, index) => ({
        id: index,
        src: `https://via.placeholder.com/300x200?text=Image+${index + 1}`,
    }));

    // State to manage visible images
    const [images, setImages] = useState({
        category1: sampleImages,
        category2: sampleImages,
        category3: sampleImages,
    });

    // Ref for scrolling
    const scrollRef = useRef({});

    const scrollUp = (category) => {
        const container = scrollRef.current[category];
        container.scrollBy({ top: -container.clientHeight, behavior: 'smooth' });
    };

    const scrollDown = (category) => {
        const container = scrollRef.current[category];
        container.scrollBy({ top: container.clientHeight, behavior: 'smooth' });
    };

    return (
        <div className="p-6 space-y-8">
            {Object.keys(images).map((category, index) => (
                <div key={index} className="relative">
                    <h2 className="text-2xl font-bold mb-4">Category {index + 1}</h2>
                    <div className="relative overflow-hidden">
                        <button
                            className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 bg-gray-700 text-white rounded-full"
                            onClick={() => scrollUp(category)}
                        >
                            &uarr;
                        </button>
                        <button
                            className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 bg-gray-700 text-white rounded-full"
                            onClick={() => scrollDown(category)}
                        >
                            &darr;
                        </button>
                        <div
                            ref={(el) => (scrollRef.current = { ...scrollRef.current, [category]: el })}
                            className="overflow-y-scroll h-72 space-y-4 scrollbar-hide"
                        >
                            {images[category].map((image) => (
                                <div key={image.id} className="w-full h-48 flex items-center justify-center bg-white border border-gray-200 rounded-lg shadow-md">
                                    <img
                                        src={image.src}
                                        alt={`Image ${image.id}`}
                                        className="w-full h-full object-cover rounded-lg transition-transform duration-500 transform hover:scale-105"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default App;
