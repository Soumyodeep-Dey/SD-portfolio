import { useState } from 'react';
import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

function Home() {
  const [activeSection, setActiveSection] = useState('skills');

  return (
    <div id="about" className="bg-gray-100 py-16 min-h-screen">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* About Image Section */}
        <div className="about-col-1 flex justify-center">
          <img
            src="/src/components/Images/MY photo.jpg"
            alt="About Me"
            className="rounded-xl shadow-xl w-72 md:w-96 transform hover:scale-105 transition-transform duration-500 ease-in-out"
          />
        </div>

        {/* About Text Section */}
        <div className="about-col-2 text-gray-800 px-6 md:px-0">
          <h1 className="text-5xl font-extrabold mb-6 text-indigo-700">ABOUT ME</h1>
          <p className="text-lg leading-relaxed mb-4">
            I am Soumyodeep Dey, currently pursuing my B.Tech in Computer Science & Engineering in Kolkata, India.
            I actively seek practical experiences to complement my theoretical understanding, with a strong belief in
            hands-on learning to enhance skills in the field.
          </p>

          {/* Section Tabs */}
          <div className="flex space-x-4 mt-6">
            {['skills', 'experience', 'education'].map((section) => (
              <span
                key={section}
                className={`text-lg font-semibold cursor-pointer transition-colors ${activeSection === section ? 'text-indigo-500' : 'hover:text-indigo-500'
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
              <ul className="list-disc pl-5 text-gray-700">
                <li><span className="font-semibold">Web Development:</span> Proficient in HTML, CSS, JavaScript, React, and other front-end technologies</li>
                <li><span className="font-semibold">Research Skills:</span> Experience from internships, including secondary research and data analysis</li>
                <li><span className="font-semibold">Coding and Collaboration:</span> Experienced with GitHub for managing and sharing code</li>
                <li><span className="font-semibold">Communication:</span> Proficient in English, Bengali, and Hindi</li>
              </ul>
            )}
            {activeSection === 'experience' && (
              <ul className="list-disc pl-5 text-gray-700">
                <li><span className="font-semibold">DrMudhiwalla (Research Intern):</span> April 2024 - August 2024, New Delhi, India - Conducted secondary research, analysis, and data visualization.</li>
                <li><span className="font-semibold">The WE Foundation (Intern):</span> November 2023 - January 2024, Kolkata, India - Worked on market research, data analysis, and basic SEO and web development.</li>
              </ul>
            )}
            {activeSection === 'education' && (
              <ul className="list-disc pl-5 text-gray-700">
                <li><span className="font-semibold">B.Tech in Computer Science (YGPA : almost 7.5):</span> Dr. Sudhir Chandra Sur Degree Engineering College, 2022-2026</li>
                <li><span className="font-semibold">Uccha Madhyamik (percentage : 80%):</span> Kodalia Agapur High School (H.S.), 2020-2022</li>
                <li><span className="font-semibold">Madhyamik (percentage : 87%):</span> Kodalia Agapur High School (H.S.), 2014-2020</li>
              </ul>
            )}
          </div>

          {/* Social Links Section */}
          <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-5">
            <a href="https://www.linkedin.com/in/soumyodeep-dey-s-d-2a125b1a7/" className="text-center">
              <FaLinkedin className="text-indigo-600 text-3xl mx-auto" />
              <span>LinkedIn</span>
            </a>
            <a href="https://twitter.com/Soumyodeep2003" className="text-center">
              <FaTwitter className="text-blue-500 text-3xl mx-auto" />
              <span>Twitter</span>
            </a>
            <a href="https://github.com/Soumyodeep-Dey" className="text-center">
              <FaGithub className="text-gray-700 text-3xl mx-auto" />
              <span>GitHub</span>
            </a>
            <a href="mailto:soumyodeepdey2003@gmail.com" className="text-center">
              <FaEnvelope className="text-red-500 text-3xl mx-auto" />
              <span>Email</span>
            </a>
            <a href="tel:09836545284" className="text-center">
              <FaPhone className="text-green-500 text-3xl mx-auto" />
              <span>Phone</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
