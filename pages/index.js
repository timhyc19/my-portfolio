import Head from 'next/head';
import Image from 'next/image';
import TCLogo from '../public/TCLogo.png';
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const workExperience = [
    {
      company: "Cohere 📍",
      role: "Member of Technical Staff | January 2025 ~ Present",
      description: "LLM Pretraining and Data Infrastructure",
    },
    {
      company: "Cohere",
      role: "Software Engineer Intern | Fall 2023 & Winter 2024",
      description: "Data Infrastructure, Pipelines, Base Models",
    },
    {
      company: "Ecobee",
      role: "Software Engineer Intern | Summer 2023",
      description: "Data Platforms and Infrastructure",
    },
    {
      company: "BDO",
      role: "Data Engineer Intern | Fall 2022",
      description: "Insurance Data Team",
    },
    {
      company: "NPX",
      role: "Machine Learning Engineer Intern | Spring 2022",
      description: "Data and AI Team",
    },
    {
      company: "Transport Canada",
      role: "Data Science Intern | Summer 2021",
      description: "Data and Analytics Division",
    },
  ];

  const education = {
    university: "University of Waterloo",
    degree: "Honours Bachelor of Computer Science (Distinction)",
    startDate: "September 2020",
    graduationDate: "December 2024",
    coursework: [
      "Data Structures & Algorithms (CS 341)",
      "Application Development (CS 346)",
      "User Interfaces (CS 349)",
      "Operating Systems (CS 350)",
      "Numerical Computation (CS 370)",
      "Human-Computer Interaction (CS 449)",
      "Introduction to Machine Learning (CS 480)",
      "Introduction to Artificial Intelligence (CS 486)",
      "Mathematical Statistics (STAT 330)",
    ],
  };

  const research = {
    papers: [
      {
        title: "Aya Expanse: Combining Research Breakthroughs for a New Multilingual Frontier",
        description: "Co-author for Cohere’s Aya Expanse model family (8B & 32B parameters), achieving state-of-the-art multilingual performance. Helped prepare large-scale datasets for different data-mixture experiments.",
      }
    ],
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Timothy Chung Portfolio</title>
      </Head>
      <main className="px-10 md:px-20 lg:px-40 bg-gray-200">
        <section className="min-h-screen">
          <div className="flex font-sans items-center">
            <Image src={TCLogo} objectFit="cover" className="mt-3" />
            <h1 className="text-xl mt-8 ml-5">Tim Chung</h1>
            <ul className="flex ml-auto items-center gap-6 text-xl mt-8">
              <li className="transition hover:scale-105 duration-300">
                <a href="https://www.linkedin.com/in/tim-chung/" target="_blank">Linkedin</a>
              </li>
              <li className="transition hover:scale-105 duration-300">
                <a href="https://github.com/timhyc19" target="_blank">Github</a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col md:flex-row items-center mt-20">
            <div>
              <h2 className="text-5xl md:text-7xl font-medium">Hello, I&apos;m Tim</h2>
              <h3 className="text-2xl md:text-3xl mt-4">
                A recent CS grad from UofWaterloo, passionate about <strong>machine learning</strong> and <strong>software engineering</strong>.
              </h3>
            </div>
          </div>

          <div className="flex flex-col md:flex-row mt-20 gap-12">
            {/* Education Section */}
            <div className="flex-1">
              <h3 className="text-3xl font-semibold">Education</h3>
              <div className="mt-4">
                <h4 className="text-xl font-medium">{education.university}</h4>
                <p className="text-gray-600">{education.degree}</p>
                <p className="text-gray-600">{education.startDate} ~ {education.graduationDate}</p>
                <h5 className="mt-4 font-medium">Relevant Coursework:</h5>
                <ul className="list-disc list-inside">
                  {education.coursework.map((course, index) => (
                    <li key={index} className="text-gray-600">{course}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Work Experience Section */}
            <div className="flex-1">
              <h3 className="text-3xl font-semibold">Work Experience</h3>
              <ul className="mt-4">
                {workExperience.map((experience, index) => (
                  <li key={index} className="mb-3">
                    <h4 className="text-xl font-medium">
                      {experience.company}
                    </h4>
                    <p className="text-gray-600">{experience.role}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Research Section */}
            <div className="flex-1">
              <h3 className="text-3xl font-semibold">Research</h3>
              <div className="mt-4">
                {research.papers.map((paper, index) => (
                  <div key={index} className="text-gray-600 mb-4">
                    <strong>{paper.title}</strong>
                    <a
                      href="https://arxiv.org/abs/2412.04261"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 ml-2 underline"
                    >
                      [View Paper]
                    </a>
                    <p className="text-gray-500 text-sm">{paper.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
