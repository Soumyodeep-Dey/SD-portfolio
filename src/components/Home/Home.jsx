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
          A 3rd-year B.Tech Computer Science student, passionate about building impactful
            digital solutions. With hands-on experience in <strong>data analysis, web development,</strong> and <strong>UI/UX design</strong>, I aim to craft user-centered applications that drive engagement and growth.
          </p>
          <p className="text-lg leading-relaxed mb-6">
          Based in Kolkata, India, I&apos;m actively seeking opportunities to contribute my
            skills to innovative teams and projects. Whether it&apos;s solving challenges through
            code, conducting insightful research, or enhancing user experiences, I thrive in
            creating value. <a className= "bg-red-500" href="https://drive.google.com/file/d/1fHSCn7OesX4uDFF9IHBtAWqbDz5OVndW/view?usp=drive_link">Here&apos;s my resume</a>
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
                  <span className="font-semibold">Web Development:</span> Proficient in HTML, CSS,
                  JavaScript, React, and other front-end technologies.
                </li>
                <li className="pb-2">
                  <span className="font-semibold">Research Skills:</span> Experience in secondary
                  research and data analysis from internships.
                </li>
                <li className="pb-2">
                  <span className="font-semibold">Communication:</span> Fluent in English, Bengali,
                  and Hindi, with excellent presentation skills.
                </li>
                <li className="pb-2">
                  <span className="font-semibold">Version Control:</span> Skilled in using Git and
                  GitHub for collaboration and project management.
                </li>
              </ul>
            )}
            {activeSection === 'experience' && (
              <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
                <li className="pb-2">
                  <span className="font-semibold">DrMudhiwalla (Research Intern):</span> Conducted
                  data visualization and analysis for actionable insights.
                </li>
                <li className="pb-2">
                  <span className="font-semibold">The WE Foundation (Intern):</span> Designed
                  engaging presentations, conducted market research, and optimized SEO strategies.
                </li>
              </ul>
            )}
            {activeSection === 'education' && (
              <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
                <li className="pb-2">
                  <span className="font-semibold">B.Tech in Computer Science (YGPA: 7.5):</span> Dr.
                  Sudhir Chandra Sur Degree Engineering College, 2022-2026.
                </li>
                <li className="pb-2">
                  <span className="font-semibold">Uccha Madhyamik (Percentage: 80%):</span> Kodalia
                  Agapur High School (H.S.), 2020-2022.
                </li>
                <li className="pb-2">
                  <span className="font-semibold">Madhyamik (Percentage: 87%):</span> Kodalia
                  Agapur High School (H.S.), 2014-2020.
                </li>
              </ul>
            )}
          </div>

          {/* Social Links Section */}
          <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-5">
            <a
              href="https://www.linkedin.com/in/soumyodeep-dey-s-d-2a125b1a7/"
              className="text-center"
            >
              <FaLinkedin className="text-indigo-600 text-3xl mx-auto dark:text-indigo-400" />
              <span className="dark:text-gray-300">LinkedIn</span>
            </a>
            <a href="https://twitter.com/Soumyodeep2003" className="text-center">
              <FaTwitter className="text-blue-500 text-3xl mx-auto dark:text-blue-400" />
              <span className="dark:text-gray-300">Twitter</span>
            </a>
            <a href="https://github.com/Soumyodeep-Dey" className="text-center">
              <FaGithub className="text-gray-700 text-3xl mx-auto dark:text-gray-400" />
              <span className="dark:text-gray-300">GitHub</span>
            </a>
            <a href="mailto:soumyodeepdey2003@gmail.com" className="text-center">
              <FaEnvelope className="text-red-500 text-3xl mx-auto dark:text-red-400" />
              <span className="dark:text-gray-300">Email</span>
            </a>
            <a href="tel:09836545284" className="text-center">
              <FaPhone className="text-green-500 text-3xl mx-auto transform rotate-90 dark:text-green-400" />
              <span className="dark:text-gray-300">Phone</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
