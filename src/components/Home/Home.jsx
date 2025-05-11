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
            <span className="block text-gray-600 dark:text-gray-400 mb-2">Kolkata, West Bengal, India</span>
            <span className="block text-gray-600 dark:text-gray-400 mb-4">Email: soumyodeepdey2003@gmail.com | Phone: +91 9836545284</span>
            Passionate 3rd-year CSE student with hands-on experience in <strong className="text-indigo-600 dark:text-indigo-400">front-end web development</strong>, <strong className="text-indigo-600 dark:text-indigo-400">content writing</strong>, <strong className="text-indigo-600 dark:text-indigo-400">market research</strong>, and <strong className="text-indigo-600 dark:text-indigo-400">data analysis</strong>. Adept at creating intuitive, engaging, and scalable web applications using modern
            technologies. Successfully led a six-member team in Smart India Hackathon 2024 seeking a front-end development
            internship to leverage skills in React, Tailwind CSS, and UI/UX design.
            <a 
              href="https://drive.google.com/file/d/1fHSCn7OesX4uDFF9IHBtAWqbDz5OVndW/view?usp=drive_link"
              className="inline-flex items-center ml-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors duration-300"
            >
              Here&apos;s my resume
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </p>

          {/* Section Tabs */}
          <div className="flex space-x-6 mb-8">
            {['skills', 'experience', 'education', 'projects'].map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`text-xl font-semibold relative transition-all duration-300 ${
                  activeSection === section
                    ? 'text-indigo-500 dark:text-indigo-400'
                    : 'text-gray-500 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400'
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                {activeSection === section && (
                  <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></span>
                )}
              </button>
            ))}
          </div>

          {/* Displayed Section Content */}
          <div className="mt-8 space-y-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
            {activeSection === 'skills' && (
              <ul className="space-y-4 text-gray-700 dark:text-gray-200">
                <li className="flex items-start group">
                  <span className="text-indigo-500 dark:text-indigo-400 mr-2 group-hover:scale-110 transition-transform duration-300">•</span>
                  <div>
                    <span className="font-semibold text-indigo-600 dark:text-indigo-400">Web Development:</span> HTML, CSS, JavaScript, React, Tailwind CSS, Canva, GitHub, Node.js, Express.js, MongoDB.
                  </div>
                </li>
                <li className="flex items-start group">
                  <span className="text-indigo-500 dark:text-indigo-400 mr-2 group-hover:scale-110 transition-transform duration-300">•</span>
                  <div>
                    <span className="font-semibold text-indigo-600 dark:text-indigo-400">Web Content Writing:</span> WordPress, Blog writing, SEO optimization.
                  </div>
                </li>
                <li className="flex items-start group">
                  <span className="text-indigo-500 dark:text-indigo-400 mr-2 group-hover:scale-110 transition-transform duration-300">•</span>
                  <div>
                    <span className="font-semibold text-indigo-600 dark:text-indigo-400">Data Analysis:</span> Market Research, Secondary Research, Data Representation.
                  </div>
                </li>
                <li className="flex items-start group">
                  <span className="text-indigo-500 dark:text-indigo-400 mr-2 group-hover:scale-110 transition-transform duration-300">•</span>
                  <div>
                    <span className="font-semibold text-indigo-600 dark:text-indigo-400">Languages:</span> English (Intermediate), Hindi (Spoken Only), Bengali (Native).
                  </div>
                </li>
              </ul>
            )}

            {activeSection === 'experience' && (
              <ul className="space-y-4 text-gray-700 dark:text-gray-200">
                <li className="flex items-start group">
                  <span className="text-indigo-500 dark:text-indigo-400 mr-2 group-hover:scale-110 transition-transform duration-300">•</span>
                  <div>
                    <span className="font-semibold text-indigo-600 dark:text-indigo-400">Web Content Writer | NaukriSafar (Jan 2025 - March 2025):</span> Published Job related blogs (100+) on WordPress with best practices and SEO of all my blogs are equal or more than 70 out of 100.
                  </div>
                </li>
                <li className="flex items-start group">
                  <span className="text-indigo-500 dark:text-indigo-400 mr-2 group-hover:scale-110 transition-transform duration-300">•</span>
                  <div>
                    <span className="font-semibold text-indigo-600 dark:text-indigo-400">Team Leader | Smart India Hackathon 2024 (Sep 2024 - Nov 2024):</span> Led a six-member team to develop "E-Scholar," a centralized React-based platform for paperless scholarship disbursement. Designed and refined UI/UX based on user feedback, enhancing accessibility and engagement.
                  </div>
                </li>
                <li className="flex items-start group">
                  <span className="text-indigo-500 dark:text-indigo-400 mr-2 group-hover:scale-110 transition-transform duration-300">•</span>
                  <div>
                    <span className="font-semibold text-indigo-600 dark:text-indigo-400">Research Intern | DrMudhiwalla (Apr 2024 - Aug 2024):</span> Conducted in-depth market research, compiling data from 10+ reports into actionable insights. Designed branding materials, improving engagement by 25%.
                  </div>
                </li>
                <li className="flex items-start group">
                  <span className="text-indigo-500 dark:text-indigo-400 mr-2 group-hover:scale-110 transition-transform duration-300">•</span>
                  <div>
                    <span className="font-semibold text-indigo-600 dark:text-indigo-400">Intern | The We Foundation (Nov 2023 - Jan 2024):</span> Performed secondary research on 25+ topics, visualizing key insights for strategic decision-making.
                  </div>
                </li>
              </ul>
            )}

            {activeSection === 'education' && (
              <ul className="space-y-4 text-gray-700 dark:text-gray-200">
                <li className="flex items-start group">
                  <span className="text-indigo-500 dark:text-indigo-400 mr-2 group-hover:scale-110 transition-transform duration-300">•</span>
                  <div>
                    <span className="font-semibold text-indigo-600 dark:text-indigo-400">B.Tech. in Computer Science:</span> Dr. Sudhir Chandra Sur Institute of Technology & Sports Complex, MAKAUT (2022-2026).
                  </div>
                </li>
                <li className="flex items-start group">
                  <span className="text-indigo-500 dark:text-indigo-400 mr-2 group-hover:scale-110 transition-transform duration-300">•</span>
                  <div>
                    <span className="font-semibold text-indigo-600 dark:text-indigo-400">Higher Secondary (12th):</span> Completed with 80% marks.
                  </div>
                </li>
                <li className="flex items-start group">
                  <span className="text-indigo-500 dark:text-indigo-400 mr-2 group-hover:scale-110 transition-transform duration-300">•</span>
                  <div>
                    <span className="font-semibold text-indigo-600 dark:text-indigo-400">Secondary (10th):</span> Completed with 87% marks.
                  </div>
                </li>
              </ul>
            )}

            {activeSection === 'projects' && (
              <ul className="space-y-4 text-gray-700 dark:text-gray-200">
                <li className="flex items-start group">
                  <span className="text-indigo-500 dark:text-indigo-400 mr-2 group-hover:scale-110 transition-transform duration-300">•</span>
                  <div>
                    <span className="font-semibold text-indigo-600 dark:text-indigo-400">Watchly (In Development):</span> A dynamic E-commerce end to end web app designed for selling watches.
                  </div>
                </li>
                <li className="flex items-start group">
                  <span className="text-indigo-500 dark:text-indigo-400 mr-2 group-hover:scale-110 transition-transform duration-300">•</span>
                  <div>
                    <span className="font-semibold text-indigo-600 dark:text-indigo-400">E-Scholar:</span> Led development of a paperless scholarship system for SIH 2024.
                  </div>
                </li>
                <li className="flex items-start group">
                  <span className="text-indigo-500 dark:text-indigo-400 mr-2 group-hover:scale-110 transition-transform duration-300">•</span>
                  <div>
                    <span className="font-semibold text-indigo-600 dark:text-indigo-400">Memeconomy:</span> Designed an intuitive UI for a meme-based trading platform for a hackathon.
                  </div>
                </li>
                <li className="flex items-start group">
                  <span className="text-indigo-500 dark:text-indigo-400 mr-2 group-hover:scale-110 transition-transform duration-300">•</span>
                  <div>
                    <span className="font-semibold text-indigo-600 dark:text-indigo-400">Amazon UI Clone:</span> Developed Amazon UI clone with HTML and CSS.
                  </div>
                </li>
              </ul>
            )}
          </div>

          {/* Social Links Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-indigo-600 dark:text-indigo-400">
              Connect With Me
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-6">
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
    </div>
  );
}

export default Home;
