// pages/experience/0.js
import React from 'react';

const WorkExperience2 = () => {
    return (
        <div className="min-h-screen">
          <div className="px-10 md:px-20 lg:px-40 mt-20">
            <h1 className="text-2xl font-medium">BDO</h1>
            <p className="text-gray-600 text-xl">Data Engineer Intern | Fall 2022</p>
            <p className="text-gray-600 text-xl">Oustanding Rating</p>

            <p className="mt-10 text-black-600 text-xl">Tech Stack: PySpark, SQL, Azure Data Factory, Data Lake</p>
    
            <h2 className="mt-10 text-xl">Summary</h2>
            <div className="max-w-4xl"> {/* Limit the width here */}
              <p className="text-xl">
              During my tenure at BDO, I had the opportunity to delve into the world of data engineering, 
              gaining valuable insights and experience in various facets of this field. 
              </p>
    
              <p className="text-xl mt-10">
              One of the significant accomplishments during my time at BDO was constructing a <strong>Python ETL </strong>
              (Extract, Transform, Load) pipeline using a combination of Databricks and Azure Data Factory. 
              This pipeline played a crucial role in processing and migrating over 1 million insurance claims 
              from Oracle and SQL data sources to an IFRS17 compliant data warehouse. This task required a deep 
              understanding of data integration techniques and the ability to handle large volumes of data efficiently.
              </p>
    
              <p className="text-xl mt-10">
              <strong>PySpark</strong> and <strong>SQL</strong> were my primary tools for data manipulation and transformation. I used PySpark to 
              perform tasks like data aggregation, merging, and validation, particularly with hundreds of financial
               transaction files. This allowed our end clients to efficiently manage their financial performance and 
               cashflow statements. The use of PySpark demonstrated my proficiency in distributed data processing and
                data transformation.
              </p>

              <p className="text-xl mt-10">
              In addition to technical skills, my role at BDO emphasized the importance of soft skills. I honed my 
              communication and collaboration abilities by working closely with various stakeholders, including senior 
              data engineers, business analysts, and clients. Daily interactions with these teams allowed me to translate 
              technical concepts into actionable insights, ensuring that our data engineering solutions aligned with the 
              broader business goals.
              </p>
            </div>
    
            {/* You can add more details or sections as needed */}
          </div>
        </div>
      );
};

export default WorkExperience2;
