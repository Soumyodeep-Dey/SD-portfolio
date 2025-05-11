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
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative">
              <img
                src="/Images/MY photo.jpg"
                alt="My pic"
                className="rounded-2xl shadow-2xl w-2/3 transform group-hover:scale-105 transition-all duration-500 ease-in-out"
              />
              <span className="absolute bottom-4 left-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-2 px-6 text-sm rounded-full shadow-lg animate-pulse">
                #OpenToWork
              </span>
            </div>
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
            internship to leverage skills in React, Tailwind CSS, and UI/UX design.
            <a 
              href="https://drive.google.com/file/d/1fHSCn7OesX4uDFF9IHBtAWqbDz5OVndW/view?usp=drive_link"
              className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors duration-300"
            >
              Here&apos;s my resume
            </a>
          </p>

          {/* Section Tabs */}
          <div className="flex space-x-4 mt-6">
            {['skills', 'experience', 'education'].map((section) => (
              <span
                key={section}
                className={`text-xl font-semibold cursor-pointer transition-colors ${
                  activeSection === section
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
              <ul className="list-disc pl-5 text-gray-700 dark:text-gray-200">
                <li className="pb-2">
                  <span className="font-semibold">Web Development:</span> Proficient in building responsive web apps using HTML, CSS, JavaScript, React, and Tailwind CSS. Familiar with knowledge of Node.js, Express, and MongoDB, currently expanding into full-stack MERN development.
                </li>
                <li className="pb-2">
                  <span className="font-semibold">Research Skills:</span> Experienced in data analysis and secondary research, capable of generating insights and actionable reports from large datasets.
                </li>
                <li className="pb-2">
                  <span className="font-semibold">Communication:</span> Fluent in multiple languages, skilled in delivering presentations, and effective in collaborative team environments.
                </li>
                <li className="pb-2">
                  <span className="font-semibold">Version Control:</span> Proficient in Git and GitHub, with experience managing repositories, resolving conflicts, and following best practices.
                </li>
              </ul>
            )}

            {activeSection === 'experience' && (
              <ul className="list-disc pl-5 text-gray-700 dark:text-gray-200">
                <li className="pb-2">
                  <span className="font-semibold">Web Content Writer | NaukriSafar (Jan 2025 - March 2025):</span> Published 100+ job-related blogs on WordPress, all SEO-optimized with scores above 70/100.
                </li>
                <li className="pb-2">
                  <span className="font-semibold">Team Leader | Smart India Hackathon 2024 (Sep 2024 - Nov 2024):</span> Led a six-member team to develop "E-Scholar," a centralized React-based platform for paperless scholarship disbursement. Designed and refined UI/UX based on user feedback, enhancing accessibility and engagement.
                </li>
                <li className="pb-2">
                  <span className="font-semibold">Research Intern | DrMudhiwalla (Apr 2024 - Aug 2024):</span> Conducted in-depth market research, compiling data from 10+ reports into actionable insights. Designed branding materials, improving engagement by 25%.
                </li>
                <li className="pb-2">
                  <span className="font-semibold">Intern | The We Foundation (Nov 2023 - Jan 2024):</span> Performed secondary research on 25+ topics, visualizing key insights for strategic decision-making.
                </li>
              </ul>
            )}

            {activeSection === 'education' && (
              <ul className="list-disc pl-5 text-gray-700 dark:text-gray-200">
                <li className="pb-2">
                  <span className="font-semibold">B.Tech in Computer Science (YGPA: 7.6):</span> Pursuing undergraduate studies at Dr. Sudhir Chandra Sur Degree Engineering College (2022-2026), focusing on programming, data structures, algorithms, and software development practices.
                </li>
                <li className="pb-2">
                  <span className="font-semibold">Uccha Madhyamik (Percentage: 80%):</span> Completed higher secondary education (Science - PCMC) at Kodalia Agapur High School (H.S.) (2020-2022).
                </li>
                <li className="pb-2">
                  <span className="font-semibold">Madhyamik (Percentage: 87%):</span> Completed secondary education at Kodalia Agapur High School (H.S.) (2014-2020).
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
              className="group flex flex-col items-center p-4 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
            >
              <FaLinkedin className="text-indigo-600 text-3xl mb-2 group-hover:scale-110 group-hover:text-indigo-800 dark:text-indigo-400 dark:group-hover:text-indigo-300 transition-all duration-300" />
              <span className="text-gray-700 dark:text-gray-300 group-hover:text-indigo-800 dark:group-hover:text-indigo-300 transition-colors duration-300">
                LinkedIn
              </span>
            </a>
            <a
              href="https://twitter.com/Soumyodeep2003"
              className="group flex flex-col items-center p-4 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
            >
              <FaTwitter className="text-blue-500 text-3xl mb-2 group-hover:scale-110 group-hover:text-blue-700 dark:text-blue-400 dark:group-hover:text-blue-300 transition-all duration-300" />
              <span className="text-gray-700 dark:text-gray-300 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300">
                Twitter
              </span>
            </a>
            <a
              href="https://github.com/Soumyodeep-Dey"
              className="group flex flex-col items-center p-4 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
            >
              <FaGithub className="text-gray-700 text-3xl mb-2 group-hover:scale-110 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-200 transition-all duration-300" />
              <span className="text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-colors duration-300">
                GitHub
              </span>
            </a>
            <a
              href="mailto:soumyodeepdey2003@gmail.com"
              className="group flex flex-col items-center p-4 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
            >
              <FaEnvelope className="text-red-500 text-3xl mb-2 group-hover:scale-110 group-hover:text-red-700 dark:text-red-400 dark:group-hover:text-red-300 transition-all duration-300" />
              <span className="text-gray-700 dark:text-gray-300 group-hover:text-red-700 dark:group-hover:text-red-300 transition-colors duration-300">
                Email
              </span>
            </a>
            <a
              href="tel:09836545284"
              className="group flex flex-col items-center p-4 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
            >
              <FaPhone className="text-green-500 text-3xl mb-2 transform rotate-90 group-hover:scale-110 group-hover:text-green-700 dark:text-green-400 dark:group-hover:text-green-300 transition-all duration-300" />
              <span className="text-gray-700 dark:text-gray-300 group-hover:text-green-700 dark:group-hover:text-green-300 transition-colors duration-300">
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
