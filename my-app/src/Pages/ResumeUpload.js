import React, { useState } from 'react';

const ResumeUpload = () => {
  const [resumeText, setResumeText] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create the data object to send to Flask
    const data = {
      resume: resumeText,
      info: additionalInfo,
    };

    // Send POST request to Flask server
    fetch('http://localhost:5000/upload', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        // Handle success response here
      })
      .catch((error) => {
        console.error('Error:', error);
        // Handle error response here
      });
  };

  return (
    <div className="resume-upload flex flex-col items-center justify-center min-h-screen bg-gray-50 py-10">
      <h1 className="text-5xl font-bold text-gray-900 mb-6">Upload Your Resume</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-2xl">
        <div className="form-group mb-6">
          <h3 className="text-2xl font-semibold text-gray-700 mb-2">Paste Your Skills Here</h3>
          <textarea
            id="resumeText"
            value={resumeText}
            onChange={(e) => setResumeText(e.target.value)}
            className="form-textarea w-full p-6 rounded-lg shadow-lg focus:ring-2 focus:ring-blue-400 border border-gray-300 text-lg resize-none"
            rows="12"
          ></textarea>
        </div>
        <div className="form-group mb-6">
          <h3 className="text-2xl font-semibold text-gray-700 mb-2">Paste Your Experience Here</h3>
          <textarea
            id="additionalInfo"
            value={additionalInfo}
            onChange={(e) => setAdditionalInfo(e.target.value)}
            className="form-textarea w-full p-6 rounded-lg shadow-lg focus:ring-2 focus:ring-blue-400 border border-gray-300 text-lg resize-none"
            rows="12"
          ></textarea>
        </div>
        <button
          type="submit"
          className="submit-button w-full py-4 rounded-lg bg-blue-600 text-white font-semibold text-xl hover:bg-blue-700 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ResumeUpload;
