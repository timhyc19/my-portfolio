import React from 'react';

const WorkExperience1 = () => {
  return (
    <div className="min-h-screen">
      <div className="px-10 md:px-20 lg:px-40 mt-20">
        <h1 className="text-2xl font-medium">Cohere</h1>
        <p className="text-gray-600 text-xl">Software Engineer Intern | Fall 2023</p>
        <p className="text-gray-600 text-xl">Current Intern</p>

        <p className="mt-10 text-black-600 text-xl">Tech Stack: Python, Google Cloud, Airflow</p>

        <h2 className="mt-10 text-xl">Summary</h2>
        <div className="max-w-4xl"> {/* Limit the width here */}
          <p className="text-xl">
            Currently interning on Cohere&apos;s data engineering team!
          </p>
        </div>

        {/* You can add more details or sections as needed */}
      </div>
    </div>
  );
};

export default WorkExperience1;



