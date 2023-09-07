// pages/experience/0.js
import React from 'react';

const WorkExperience2 = () => {
    return (
        <div className="min-h-screen">
          <div className="px-10 md:px-20 lg:px-40 mt-20">
            <h1 className="text-2xl font-medium">BDO</h1>
            <p className="text-gray-600 text-xl">Data Engineer Intern | Fall 2022</p>
            <p className="text-gray-600 text-xl">Oustanding Rating</p>
    
            <h2 className="mt-10 text-xl">Summary</h2>
            <div className="max-w-4xl"> {/* Limit the width here */}
              <p className="text-xl">
                My experience at BDO gave me a great introduction to the fundamentals of data engineering. I began the term learning
                how to incorporate Azure tools (Databricks, Data Factory, Data Lake) to build robust data pipelines that processed large
                amounts of data. Almost all of my coding was done using PySpark and SQL, and as the term progressed I grew a stronger 
                understanding of concurrent programming. 
              </p>
    
              <p className="text-xl mt-10">
              On top of building my technical skills in data pipelines, I developed my communication and collaboration skills by working
              closely with senior data engineers, business analysts, and clients on a daily basis. 
              </p>
    
              <p className="text-xl mt-10">

              </p>
            </div>
    
            {/* You can add more details or sections as needed */}
          </div>
        </div>
      );
};

export default WorkExperience2;
