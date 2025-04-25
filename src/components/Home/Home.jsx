import { useState } from 'react';
import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

function Home() {
  const [activeSection, setActiveSection] = useState('skills');

  return (
    <div
      id="about"
      className="bg-gradient-to-b from-gray-100 via-gray-200 to-gray-100 dark:from-gray-800 dark:via-gray-700 dark:to-gray-900 py-16 min-h-screen"
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* About Image Section */}
        <div className="about-col-1 flex justify-center">
          <div className="relative">
            <img
              src="/Images/MY photo.jpg"
              alt="My pic"
              className="rounded-xl shadow-xl w-2/3 transform hover:scale-105 transition-transform duration-500 ease-in-out"
            />
            <span className="absolute bottom-4 left-4 bg-indigo-500 text-white py-1 px-4 text-sm rounded-lg shadow-lg animate-pulse dark:bg-indigo-400">
              #OpenToWork
            </span>
          </div>
        </div>

        {/* About Text Section */}
        <div className="about-col-2 text-gray-800 dark:text-gray-200 px-6 md:px-0">
          <h1 className="text-5xl font-extrabold mb-6 text-indigo-700 dark:text-indigo-400 animate-fadeInLeft">
            Hi, I&apos;m{' '}
            <span className="text-indigo-500 dark:text-indigo-300">Soumyodeep Dey</span>
          </h1>
          <p className="text-lg leading-relaxed mb-4">
            Passionate 3rd-year CSE student with hands-on experience in <strong>Web Development</strong>, <strong>UI/UX design</strong>, <strong>web content writing</strong>, <strong>market research</strong>, and <strong>data analysis</strong>. Adept at creating intuitive, engaging, and scalable web applications using modern
            technologies. Successfully led a six-member team in Smart India Hackathon 2024 seeking a front-end development
            internship to leverage skills in React, Tailwind CSS, and UI/UX design.<a className="bg-red-500" href="https://drive.google.com/file/d/1fHSCn7OesX4uDFF9IHBtAWqbDz5OVndW/view?usp=drive_link">Here&apos;s my resume</a>
          </p>

          {/* Section Tabs */}
          <div className="flex space-x-4 mt-6">
            {['skills', 'experience', 'education'].map((section) => (
              <span
                key={section}
                className={`text-xl font-semibold cursor-pointer transition-colors ${activeSection === section
                  ? 'text-indigo-500 dark:text-indigo-400'
                  : 'hover:text-indigo-500 dark:hover:text-indigo-300'
                  }`}
                onClick={() => setActiveSection(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </span>
            ))}
          </div>

          {/* Displayed Section Content */}
          <div className="mt-6 space-y-2">
            {activeSection === 'skills' && (
              <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
                <li className="pb-2">
                  <span className="font-semibold">Web Development:</span> Proficient in building responsive web apps using HTML, CSS, JavaScript, React, and Tailwind CSS, with expertise in reusable components, state management, and performance optimization.
                </li>
                <li className="pb-2">
                  <span className="font-semibold">Research Skills:</span> Experienced in data analysis and secondary research, with the ability to generate insights and actionable reports from large datasets.
                </li>
                <li className="pb-2">
                  <span className="font-semibold">Communication:</span> Fluent in multiple languages, skilled in delivering presentations, and experienced in collaborating effectively in team environments.
                </li>
                <li className="pb-2">
                  <span className="font-semibold">Version Control:</span> Proficient in Git and GitHub, with experience in managing repositories, resolving conflicts, and following best practices for version control.
                </li>
              </ul>
            )}

            {activeSection === 'experience' && (
              <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
                <li className="pb-2">
                  <span className="font-semibold">Team Leader of Smart India Hackathon 2024 (E-Scholar):</span> Developed a secure, paperless React-based platform for PMSSS scholarship disbursement, enabling real-time application tracking and instant updates while reducing administrative burden and promoting environmental sustainability.
                </li>
                <li className="pb-2">
                  <span className="font-semibold">DrMudhiwalla (Research Intern):</span>
                  Compiled and summarized key insights from 10+ scientific and business reports into strategic PowerPoint presentations, while designing an impactful logo and cover on Canva that boosted user engagement by 25% and enhanced brand recognition.
                </li>
                <li className="pb-2">
                  <span className="font-semibold">The WE Foundation (Intern):</span> Conducted market research and analysis on 25+ topics through secondary research, while creating 10+ visual data representations to facilitate clear communication of trends and enhance executive strategic planning.
                </li>
              </ul>
            )}

            {activeSection === 'education' && (
              <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
                <li className="pb-2">
                  <span className="font-semibold">B.Tech in Computer Science (YGPA: 7.6):</span> Pursuing undergraduate studies at Dr. Sudhir Chandra Sur Degree Engineering College (2022-2026). Acquiring in-depth knowledge of programming, data structures, algorithms, and software development practices.
                </li>
                <li className="pb-2">
                  <span className="font-semibold">Uccha Madhyamik (Percentage: 80%):</span> Completed higher secondary education at Kodalia Agapur High School (H.S.) (2020-2022).
                </li>
                <li className="pb-2">
                  <span className="font-semibold">Madhyamik (Percentage: 87%):</span> Successfully completed secondary education at Kodalia Agapur High School (H.S.) (2014-2020).
                </li>
              </ul>
            )}
          </div>


          {/* Social Links and Contact Me Header */}
          <div className="mt-12 text-center">
            <h2 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
              Social Links and Contact
            </h2>
          </div>

          {/* Social Links Section */}
          <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-5">
            <a
              href="https://www.linkedin.com/in/soumyodeep-dey-s-d-2a125b1a7/"
              className="text-center group"
            >
              <FaLinkedin className="text-indigo-600 text-3xl mx-auto group-hover:scale-110 group-hover:text-indigo-800 dark:text-indigo-400 dark:group-hover:text-indigo-300 transition-transform duration-300" />
              <span className="dark:text-gray-300 group-hover:text-indigo-800 dark:group-hover:text-indigo-300 transition-colors duration-300">
                LinkedIn
              </span>
            </a>
            <a
              href="https://twitter.com/Soumyodeep2003"
              className="text-center group"
            >
              <FaTwitter className="text-blue-500 text-3xl mx-auto group-hover:scale-110 group-hover:text-blue-700 dark:text-blue-400 dark:group-hover:text-blue-300 transition-transform duration-300" />
              <span className="dark:text-gray-300 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300">
                Twitter
              </span>
            </a>
            <a
              href="https://github.com/Soumyodeep-Dey"
              className="text-center group"
            >
              <FaGithub className="text-gray-700 text-3xl mx-auto group-hover:scale-110 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-200 transition-transform duration-300" />
              <span className="dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-colors duration-300">
                GitHub
              </span>
            </a>
            <a
              href="mailto:soumyodeepdey2003@gmail.com"
              className="text-center group"
            >
              <FaEnvelope className="text-red-500 text-3xl mx-auto group-hover:scale-110 group-hover:text-red-700 dark:text-red-400 dark:group-hover:text-red-300 transition-transform duration-300" />
              <span className="dark:text-gray-300 group-hover:text-red-700 dark:group-hover:text-red-300 transition-colors duration-300">
                Email
              </span>
            </a>
            <a
              href="tel:09836545284"
              className="text-center group"
            >
              <FaPhone className="text-green-500 text-3xl mx-auto transform rotate-90 group-hover:scale-110 group-hover:text-green-700 dark:text-green-400 dark:group-hover:text-green-300 transition-transform duration-300" />
              <span className="dark:text-gray-300 group-hover:text-green-700 dark:group-hover:text-green-300 transition-colors duration-300">
                Phone
              </span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Home;
