import Head from 'next/head';
import Image from 'next/image';
import ecobeeHover from '../public/ecobeehover.jpg'
import bdohover from '../public/bdohover.png'
import npxhover from '../public/npxhover.png'
import transportcanadahover from '../public/transportcanadahover.png'
import TCLogo from '../public/TCLogo.png'
import TimProfile from '../public/TimProfile.png'
import {useState} from "react"

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark": ""}>
      <Head>
        <title>Timothy Chung Portfolio</title>
      </Head>
      <main className="px-10 md:px-20 lg:px-40 bg-gray-200">
        <section className="min-h-screen">
        <div className="flex font-mono">
          <Image src={TCLogo} objectFit="cover" className="mt-3"/>
          <h1 className="text-xl mt-8 ml-5 animate-fade animate-delay-75">Developed by Tim Chung</h1>
          <ul className="flex ml-auto items-center">
          <div className="flex gap-6 mt-8 text-xl">
          <li>
            <a className="animate-fade-left" href="https://www.linkedin.com/in/tim-chung/" target="_blank">
              Linkedin
            </a>
          </li>
          <li>
            <a className="animate-fade-left" href="https://github.com/timhyc19" target="_blank">
              Github
            </a>
          </li>
          <li>
            <a className="animate-fade-left" href="https://www.youtube.com/channel/UCiVbYC5i7KlZw7b2pBa4byw" target="_blank">
              Youtube
            </a>
          </li>
          <li>
            <a className="animate-fade-left" href="https://drive.google.com/file/d/1dqPWt4EzM9_1sGd9NkXMFCi6WdZDNihE/view?usp=sharing" target="_blank">
              Resume
            </a>
          </li>
          </div>
        </ul>
        </div>


        <div className="flex items-center justify-center md:justify-start p-10">
      <div className="order-2 md:order-1">
        <h2 className="font-mono max-w-screen-sm text-5xl py-20 font-medium md:text-6xl mt-20">Hi my name is Tim. A Software and Data Engineer based in Toronto, Canada <span class="text-4xl">📍</span></h2>
        <h4 className="font-mono max-w-2xl text-2xl md:text-2xl">3rd year Computer Science Student at the University of Waterloo</h4>
        <div className="">
        </div>
  </div>
  <div className="order-1 md:order-2 ml-20 mt-20">
    <Image src={TimProfile} objectFit='cover'/>
  </div>
</div>

        </section>

        <section>
  <div>
    <h3 className="font-mono text-4xl">Internship Experience</h3>
  </div>
  <div className="grid grid-cols-2 gap-10 py-10 lg:grid-cols-3 xl:grid-cols-4">
    {/* Image 1 */}
    <div className="transition ease-in-out delay-150 hover:scale-105 duration-300">
      <a href='https://sponge-judge-9a2.notion.site/Ecobee-2023-Summer-Internship-8614e9c8a2de47b1b5bff774aedc8d13' target="_blank">
        <div className="aspect-w-3 aspect-h-4 shadow-sm">
          <Image src={ecobeeHover} className="rounded-lg object-cover" />
          <div className="rounded-lg absolute inset-0 flex flex-col justify-center items-start p-6 bg-white bg-opacity-90 opacity-0 hover:opacity-100 transition duration-300 ease-in-out">
          <h1 className="text-2xl font-medium pb-2 md:text-4xl">Ecobee</h1>
          <h2 className="text-1xl pb-1 md:text-2xl">Software Engineering Intern</h2>
          <i className="pb-2">May 2023 - August 2023</i>
        </div>
        </div>
      </a>
    </div>
    
    {/* Image 2 */}
    <div className="transition ease-in-out delay-150 hover:scale-105 duration-300">
      <a href='https://sponge-judge-9a2.notion.site/BDO-2022-Winter-Internship-b690b8b57109433fb239022c3a38d814?pvs=4' target="_blank">
        <div className="aspect-w-3 aspect-h-4">
          <Image src={bdohover} className="rounded-lg object-cover" />
          <div className="rounded-3xl absolute inset-0 flex flex-col justify-center items-start p-6 bg-white bg-opacity-90 opacity-0 hover:opacity-100 transition duration-300 ease-in-out">
          <h1 className="text-2xl font-medium pb-2 md:text-4xl">BDO</h1>
          <h2 className="text-1xl pb-1 md:text-2xl">Software Engineering Intern</h2>
          <i className="pb-2">Sept 2022 - December 2022</i>
        </div>
        </div>
      </a>
    </div>
    
    {/* Image 3 */}
    <div className="transition ease-in-out delay-150 hover:scale-105 duration-300">
      <a href='https://sponge-judge-9a2.notion.site/NPX-Spring-2022-Internship-2e202929360f4aafa26d0ddee3fca5d3?pvs=4' target="_blank">
        <div className="aspect-w-3 aspect-h-4 bg-dar rounded-lg">
          <Image src={npxhover} className="rounded-lg object-cover" />
          <div className="rounded-2xl absolute inset-0 flex flex-col justify-center items-start p-6 bg-white bg-opacity-90 opacity-0 hover:opacity-100 transition duration-300 ease-in-out">
          <h1 className="text-2xl font-medium pb-2 md:text-4xl">Nuclear Promise X</h1>
          <h2 className="text-1xl pb-1 md:text-2xl">Machine Learning Engineering Intern</h2>
          <i className="pb-2">Jan 2022 - April 2022</i>
        </div>
        </div>
      </a>
    </div>
    
    {/* Image 4 */}
    <div className="transition ease-in-out delay-150 hover:scale-105 duration-300">
      <a href='https://sponge-judge-9a2.notion.site/Transport-Canada-Summer-Winter-2021-Internship-0c4d6791462342ac9cb652839fce730b?pvs=4' target="_blank">
        <div className="aspect-w-3 aspect-h-4">
          <Image src={transportcanadahover} className="rounded-lg object-cover" />
          <div className="rounded-lg absolute inset-0 flex flex-col justify-center items-start p-6 bg-white bg-opacity-90 opacity-0 hover:opacity-100 transition duration-300 ease-in-out">
          <h1 className="text-2xl font-medium pb-2 md:text-4xl">Transport Canada</h1>
          <h2 className="text-1xl pb-1 md:text-2xl">Software Engineering Intern</h2>
          <i className="pb-2">April 2021 - December 2021</i>
        </div>
        </div>
      </a>
    </div>
  </div>
</section>

      </main>
    </div>
  );
}
