import React from 'react';

const WorkExperience1 = () => {
  return (
    <div className="min-h-screen">
      <div className="px-10 md:px-20 lg:px-40 mt-20">
        <h1 className="text-2xl font-medium">Ecobee</h1>
        <p className="text-gray-600 text-xl">Software Engineer Intern | Summer 2023</p>
        <p className="text-gray-600 text-xl">Outstanding Rating</p>

        <p className="mt-10 text-black-600 text-xl">Tech Stack: Python, Google Cloud, Airflow, Kubernetes, Docker</p>

        <h2 className="mt-10 text-xl">Summary</h2>
        <div className="max-w-4xl"> {/* Limit the width here */}
          <p className="text-xl">
            My initial work at ecobee was assisting with a new smart home doorbell camera.
            One of the products&apos; features was a push notification to the user&apos;s phone regarding any
            person, vehicle, and package detections. I contributed to the ML inference pipeline,
            which reported F1-scores of different models&apos; results based on a &apos;golden set&apos; of
            video images. Apart from following <strong>SOLID</strong> software principles, I was exposed to 
            technologies such as <strong>Python Multithreading</strong>, <strong>Kubernetes</strong>, and <strong>Docker</strong>.
          </p>

          <p className="text-xl mt-10">
          I then transitioned more into full-stack development; creating an image annotation application,
          which allowed us to create different golden sets more efficiently. I built endpoints in <strong>Flask</strong> to
          retrieve and update image data in a <strong>GCP MySQL</strong> database and wrote the database schema / code using 
          object-relational mapping and object-oriented principles. 
          </p>

          <p className="text-xl mt-10">
            I concluded my term by diving into infrastructure and technical debt work. I learned how to use Terraform
            to maintain proper infrastructure for our GCP services and also created new services like an Airflow Composer
            to host all our DAGs. I also developed the <strong>CI/CD</strong> procedure using GitHub Workflows and Actions for the Airflow repo and 
            implemented new operators to run the pipelines more efficiently. 
          </p>
        </div>

        {/* You can add more details or sections as needed */}
      </div>
    </div>
  );
};

export default WorkExperience1;
