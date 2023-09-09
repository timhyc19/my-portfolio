// pages/experience/0.js
import React from 'react';

const WorkExperience4 = () => {
    return (
        <div className="min-h-screen">
          <div className="px-10 md:px-20 lg:px-40 mt-20">
            <h1 className="text-2xl font-medium">Transport Canada</h1>
            <p className="text-gray-600 text-xl">Data Science Intern | Summer & Winter 2021</p>
            <p className="text-gray-600 text-xl">Oustanding Rating</p>

            <p className="mt-10 text-black-600 text-xl">Tech Stack: Python, SQL, Azure Databricks</p>
    
            <h2 className="mt-10 text-xl">Summary</h2>
            <div className="max-w-4xl"> {/* Limit the width here */}
    
              <p className="text-xl mt-10">
              My role involved harnessing the power of <strong>Python</strong>, <strong>Apache Spark</strong>, and <strong>SQL</strong> on Databricks to design and implement 
              a sophisticated ETL (Extract, Transform, Load) pipeline. This pipeline was instrumental in processing and 
              forecasting distributions for over 30 categorical variables within an extensive dataset containing 35 million 
              rows of highly granular vehicle collision data. The scale and complexity of this endeavor demonstrated my ability 
              to handle large-scale data processing tasks efficiently and effectively.
              </p>

              <p className="text-xl mt-10">
              Within this project, I delved into the realm of predictive analytics, leveraging <strong>time series</strong> and <strong>regression</strong> algorithms. 
              Through careful model selection and <strong>hyperparameter tuning</strong>, I achieved a 95% forecast accuracy for the 
              categorical variable distributions. This level of accuracy was crucial in providing reliable insights for 
              decision-making and policy planning.
              </p>

              <p className="text-xl mt-10">
              To capitalize on the forecasted distributions and their predictive power, I took the initiative to build a 
              comprehensive artificial database comprising over 280,000 rows. This database was constructed using a random 
              sampling technique and the forecasted distributions. Its purpose was to facilitate the analysis of future road 
              behavior trends, particularly in anticipation of upcoming policy changes. This initiative showcased my ability 
              to translate data-driven insights into actionable strategies, contributing to informed decision-making.
              </p>
            </div>
    
            {/* You can add more details or sections as needed */}
          </div>
        </div>
      );
};

export default WorkExperience4;
