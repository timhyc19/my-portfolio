import Head from 'next/head';
import { GooglecloudOriginal, PythonOriginal, DockerPlain, KubernetesPlain, TerraformOriginal } from 'devicons-react';
import Image from 'next/image';
import deved from '../public/capture.png';
import ecobee from '../public/ecobee.jpg';
import ecobeeHover from '../public/ecobee-hover.png'
import bdo from '../public/bdo-lixar.png'
import bdohover from '../public/bdo-hover.png'
import npx from '../public/npx.png'
import transportcanadahover from '../public/transportCanadaHover.jpg'
import web1 from '../public/web1.png'
import web2 from '../public/web2.png'
import web3 from '../public/web3.png'
import web4 from '../public/web4.png'
import web5 from '../public/web5.png'
import web6 from '../public/web6.png'
import airflow from '../public/airflow.svg'
import {useState} from "react"

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark": ""}>
      <Head>
        <title>Timothy Chung Portfolio</title>
      </Head>
      <main className="bg-slate-100 px-10 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-xl">Developed by Tim Chung</h1>
          <ul className="flex items-center">
          <div className="flex gap-6">
            <a href="https://www.linkedin.com/in/tim-chung/" target="_blank" className="text-xl">Linkedin</a>
            <a href="https://github.com/timhyc19" target="_blank" className="text-xl">Github</a>
            <a href="https://www.youtube.com/channel/UCiVbYC5i7KlZw7b2pBa4byw" target="_blank" className="text-xl">Youtube</a>
          </div>
          <li>
            <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="#">
              Resume
            </a>
          </li>
        </ul>
        </nav>

          <div className="flex items-center justify-center md:justify-start p-10">
          <div className="mr-20">
            <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
              <Image src={deved} layout="fill" objectFit="cover" />
            </div>
          </div>
          <div>
          <h2 className="animate-typing text-5xl py-2 text-teal-600 font-medium md:text-6xl">Timothy Chung</h2>
          <h3 className="text-2xl py-2 md:text-3xl">3B Computer Science Student at UofWaterloo</h3>
          <p className="text-left text-md py-5 leading-8 text-gray-800 max-w-xl md:text-xl">
            Hi, I'm Tim Chung. A passionate software and data engineer based in Toronto, Canada 📍
          </p>
          <div className="flex items-center text-xl py-2">
            <p className="text-left text-md leading-8 text-gray-800 mr-4">
              Tech Stack |
            </p>
            <div className="flex items-center">
            <PythonOriginal size="50" className="mr-7 ml-7" />
            <GooglecloudOriginal size="50" className="mr-7" />
            <DockerPlain size="50" className="mr-7" />
            <KubernetesPlain size="50" className="mr-7"/>
            <TerraformOriginal size="50" className="mr-7"/>
            </div>
          </div>
        </div>
        </div>
        </section>
        
        <section>
          <div>
            <h3 className="text-4xl py-1">Internship Experiences</h3>
            <p className="text-xl py-3 leading-8 text-gray-800">
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-10">
  <div className="relative overflow-hidden transition duration-300 ease-in-out transform hover:scale-105">
    <Image src={ecobeeHover} objectFit="cover" className="rounded-xl w-80 h-80" />
    <div className="rounded-xl absolute inset-0 flex flex-col justify-center items-start p-6 bg-white bg-opacity-90 opacity-0 hover:opacity-100 transition duration-300 ease-in-out w-80 h-80">
      <h1 className="text-4xl font-medium pb-2">Ecobee</h1>
      <h2 className="text-2xl pb-1">Software Engineering Intern</h2>
      <i className="pb-2">May 2023 - August 2023</i>
    </div>
  </div>
  
  <div className="relative overflow-hidden transition duration-300 ease-in-out transform hover:scale-105">
    <Image src={bdohover} objectFit="cover" className="rounded-xl w-80 h-80" />
    <div className="rounded-xl absolute inset-0 flex flex-col justify-center items-start p-6 bg-white bg-opacity-90 opacity-0 hover:opacity-100 transition duration-300 ease-in-out w-80 h-80">
      <h1 className="text-4xl font-medium pb-2">BDO</h1>
      <h2 className="text-2xl pb-1">Software Engineering Intern</h2>
      <i className="pb-2">May 2023 - August 2023</i>
    </div>
  </div>
  
  <div className="relative overflow-hidden transition duration-300 ease-in-out transform hover:scale-105">
    <Image src={ecobeeHover} objectFit="cover" className="rounded-xl w-80 h-80" />
    <div className="rounded-xl absolute inset-0 flex flex-col justify-center items-start p-6 bg-white bg-opacity-90 opacity-0 hover:opacity-100 transition duration-300 ease-in-out w-80 h-80">
      <h1 className="text-4xl font-medium pb-2">Ecobee</h1>
      <h2 className="text-2xl pb-1">Software Engineering Intern</h2>
      <i className="pb-2">May 2023 - August 2023</i>
    </div>
  </div>
  
  <div className="relative overflow-hidden transition duration-300 ease-in-out transform hover:scale-105">
    <Image src={ecobeeHover} objectFit="cover" className="rounded-xl w-80 h-80" />
    <div className="rounded-xl absolute inset-0 flex flex-col justify-center items-start p-6 bg-white bg-opacity-90 opacity-0 hover:opacity-100 transition duration-300 ease-in-out w-80 h-80">
      <h1 className="text-4xl font-medium pb-2">Ecobee</h1>
      <h2 className="text-2xl pb-1">Software Engineering Intern</h2>
      <i className="pb-2">May 2023 - August 2023</i>
    </div>
  </div>
</div>


        </section>

        <section>
          <div>
            <h3 className="mt-10 text-4xl py-1">My Projects</h3>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 ..">
              <a href='' target="_blank">
                <Image src={web1} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
              </a>
            </div>
            <div className="basis-1/3 flex-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 ..">
              
              <a href='' target="_blank">
                <Image src={web2} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
              </a>
            </div>
            <div className="basis-1/3 flex-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 ..">
            <a href="" target="_blank">
              <Image src={web3} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
            </a>
            </div>
            <div className="basis-1/3 flex-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 ..">
            <a href="" target="_blank">
              <Image src={web4} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
            </a>
            </div>
            <div className="basis-1/3 flex-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 ..">
            <a href="" target="_blank">
              <Image src={web5} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
            </a>
            </div>
            
            <div className="basis-1/3 flex-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 ..">
            <a href="" target="_blank">
              <Image src={web6} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
            </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
