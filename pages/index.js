import Head from 'next/head';
import Image from 'next/image';
import TCLogo from '../public/TCLogo.png'
import { useState } from "react"
import Link from 'next/link'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  // Define your work experience data
  const workExperience = [
    {
      company: "Cohere 📍",
      role: "Software Engineer Intern | Fall 2023",
      description: "Data infra and pipelines",
    },
    {
      company: "Ecobee",
      role: "Software Engineer Intern | Summer 2023",
      description: "Data platforms",
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

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Timothy Chung Portfolio</title>
      </Head>
      <main className="px-10 md:px-20 lg:px-40 bg-gray-200">
        <section className="min-h-screen">
          <div className="flex font-sans">
            <Image src={TCLogo} objectFit="cover" className="mt-3" />
            <h1 className="text-xl mt-8 ml-5 animate-fade-right animate-delay-150">Tim Chung</h1>
            <ul className="flex ml-auto items-center">
              <div className="flex gap-6 mt-8 text-xl">
                <li className="transition ease-in-out delay-150 hover:scale-105 duration-300">
                  <a className="animate-fade-right-left" href="https://www.linkedin.com/in/tim-chung/" target="_blank">
                    Linkedin
                  </a>
                </li>
                <li className="transition ease-in-out delay-150 hover:scale-105 duration-300">
                  <a className="animate-fade-right-left" href="https://github.com/timhyc19" target="_blank">
                    Github
                  </a>
                </li>
                <li className="transition ease-in-out delay-150 hover:scale-105 duration-300">
                  <a className="animate-fade-right-left" href="https://drive.google.com/file/d/1dqPWt4EzM9_1sGd9NkXMFCi6WdZDNihE/view?usp=sharing" target="_blank">
                    Resume
                  </a>
                </li>
              </div>
            </ul>
          </div>

          <div className="flex items-center justify-center md:justify-start">
            <div className="">
              <h2 className="animate-fade-right animate-delay-150  font-sans max-w-xl text-5xl py-10 font-medium md:text-7xl mt-20">Hello, I'm Tim<br /></h2>
              <h3 className="text-2xl animate-fade-right animate-delay-150 font-sans max-w-2xl md:text-3xl">A Computer Science Student at the University of Waterloo, passionate about <strong>software and data</strong>.</h3>
              <div className="">
              </div>
            </div>
            <div className="order-1 md:order-2 ml-40 mt-20 relative">
              {/* Add your work experience section here */}
              <section className="mt-8">
                <h3 className="text-3xl font-semibold animate-fade-right animate-delay-150">Work Experience</h3>
                <ul className="mt-4">
                  {workExperience.map((experience, index) => (
                    <li key={index} className="mb-6">
                      <Link href={`/experience/${index}`}>
                          <h4 className="text-xl font-medium animate-fade-right animate-delay-150">
                            {experience.company}
                          </h4>
                          <p className="text-gray-600 animate-fade-right animate-delay-150">
                            {experience.role}
                          </p>
                          <p className="mt-2 animate-fade-right animate-delay-150">
                            {experience.description}
                          </p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
