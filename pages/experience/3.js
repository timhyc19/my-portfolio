// pages/experience/0.js
import React from 'react';

const WorkExperience3 = () => {
    return (
        <div className="min-h-screen">
          <div className="px-10 md:px-20 lg:px-40 mt-20">
            <h1 className="text-2xl font-medium">NPX</h1>
            <p className="text-gray-600 text-xl">Machine Learning Engineer Intern | Fall 2022</p>
            <p className="text-gray-600 text-xl">Oustanding Rating</p>

            <p className="mt-10 text-black-600 text-xl">Tech Stack: Python, Scikit-Learn, AutoML</p>
    
            <h2 className="mt-10 text-xl">Summary</h2>
            <div className="max-w-4xl"> {/* Limit the width here */}
            <p className="text-xl">
            During my role, I had the privilege of spearheading a groundbreaking initiative in the realm 
            of machine learning, which significantly contributed to our project's success.
            </p>

              <p className="text-xl mt-10">
              A standout achievement was leading the inception of a novel machine learning model for project cost forecasting. 
              Leveraging Python libraries such as <strong>Scikit-learn</strong> (Sklearn) and <strong>Pandas</strong>, along with <strong>AutoML</strong>
              tools, I developed a sophisticated predictive model that surpassed our client's expectations. This innovative approach 
              led to a remarkable improvement, enhancing the accuracy of existing client predictions by 6%. This achievement 
              underscored my proficiency in machine learning techniques and my ability to deliver tangible value to our clients.
              </p>

              <p className="text-xl mt-10">
              To further enhance the accuracy of our cost forecasting model, I employed advanced feature selection and encoding 
              techniques. By meticulously curating and engineering the input features, I aimed to capture the most relevant 
              information for the prediction task. These efforts paid off significantly, as we were able to reduce the mean 
              error of our baseline models by a remarkable 8%. This outcome highlighted my expertise in data preprocessing 
              and feature engineering, crucial components of successful machine learning projects.
              </p>  

            </div>
    
            {/* You can add more details or sections as needed */}
          </div>
        </div>
      );
};

export default WorkExperience3;
