/* Home.jsx – Upgraded to match Blogs theme and palette */
import { useState } from 'react';
import {
  FaLinkedin,
  FaTwitter,
  FaGithub
} from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { MdEmail, MdPhone } from 'react-icons/md';

const RESUME_LINK = import.meta.env.VITE_RESUME_LINK;

function Home() {
  const [activeSection, setActiveSection] = useState('skills');

  const handleKeyDown = (e) => {
    if (e.key === 'Tab') {
      document.body.classList.add('user-is-tabbing');
    }
  };

  return (
    <main
      id="about"
      onKeyDown={handleKeyDown}
      className="bg-light-50 dark:bg-dark-50 py-16 min-h-screen relative overflow-hidden"
    >
      {/* Decorative background blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[
          'top-10 right-10 animate-blob',
          'top-32 left-10 animate-blob animation-delay-2000',
          'bottom-20 right-20 animate-blob animation-delay-4000'
        ].map((pos, i) => (
          <div
            key={i}
            aria-hidden="true"
            className={`absolute w-80 h-80 bg-light-300 dark:bg-dark-300 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-20 ${pos}`}
          />
        ))}
      </div>

      {/* Content grid */}
      <div className="relative container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4 sm:px-6 lg:px-8">
        {/* Profile image */}
        <section className="flex justify-center">
          <figure className="relative group w-full max-w-sm md:max-w-md lg:max-w-lg">
            <div className="absolute -inset-1 bg-gradient-to-r from-light-200 via-light-300 to-light-400 dark:from-dark-200 dark:via-dark-300 dark:to-dark-400 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-700" />
            <img
              src="/Images/MY photo.jpg"
              alt="Soumyodeep Dey"
              className="rounded-2xl shadow-2xl w-full transform group-hover:scale-105 transition-all duration-500 ease-in-out"
            />
            <figcaption className="absolute bottom-4 left-4">
              <span className="select-none bg-gradient-to-r from-dark-900 via-dark-700 to-dark-500 dark:from-light-50 dark:via-light-200 dark:to-light-400 text-light-50 dark:text-dark-900 py-2 px-6 text-xs sm:text-sm rounded-full shadow-lg animate-pulse hover:scale-105 transition-transform duration-300">
                #OpenToWork
              </span>
            </figcaption>
          </figure>
        </section>

        {/* Main text */}
        <section
          className="text-dark-900 dark:text-light-50 px-4 md:px-6"
          aria-labelledby="intro-heading"
        >
          <h1
            id="intro-heading"
            className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-dark-900 via-dark-700 to-dark-500 dark:from-light-50 dark:via-light-300 dark:to-light-400 bg-clip-text text-transparent animate-fadeInLeft"
          >
            Hi,&nbsp;I’m&nbsp;
            <span className="relative inline-block text-dark-900 dark:text-light-50">
              Soumyodeep&nbsp;Dey
            </span>
          </h1>

          {/* Location + contacts */}
          <address className="not-italic mb-4 space-y-2">
            <p className="text-dark-700 dark:text-light-300">
              New&nbsp;Barrackpore,&nbsp;Kolkata,&nbsp;West&nbsp;Bengal,&nbsp;India
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 text-sm w-fit mx-auto bg-light-100 dark:bg-dark-100 backdrop-blur-md p-3 rounded-xl shadow-sm border border-light-300 dark:border-dark-300">
              <a
                href="mailto:soumyodeepdey2003@gmail.com"
                className="flex items-center gap-1"
              >
                <MdEmail className="w-5 h-5 text-dark-900 dark:text-light-50" />
                <span>Email</span>
              </a>
              <span className="hidden sm:block text-dark-400 dark:text-light-400">|</span>
              <a
                href="tel:+919836545284"
                className="flex items-center gap-1"
              >
                <MdPhone className="w-5 h-5 text-dark-900 dark:text-light-50" />
                <span>+91&nbsp;9836545284</span>
              </a>
            </div>
          </address>

          {/* Summary */}
          <p className="text-base md:text-lg leading-relaxed mb-6 text-dark-700 dark:text-light-300">
            Final-year Computer&nbsp;Science Engineering student with hands-on
            experience in&nbsp;
            <strong className="text-dark-900 dark:text-light-50">software&nbsp;development</strong>,&nbsp;
            <strong className="text-dark-900 dark:text-light-50">web&nbsp;development</strong>,&nbsp;
            <strong className="text-dark-900 dark:text-light-50">content&nbsp;writing</strong>,&nbsp;
            <strong className="text-dark-900 dark:text-light-50">market&nbsp;research</strong>,&nbsp;
            and&nbsp;
            <strong className="text-dark-900 dark:text-light-50">data&nbsp;analysis</strong>. Adept at
            creating intuitive, scalable web applications using modern frameworks
            and engineering principles. Successfully led a six-member team in
            Smart&nbsp;India&nbsp;Hackathon&nbsp;2024. Seeking a Software Development internship to
            leverage modern tech expertise and team leadership.
            <a
              href={RESUME_LINK}
              className="inline-flex items-center ml-2 text-dark-900 dark:text-light-50 hover:text-dark-700 dark:hover:text-light-300 transition-colors duration-300"
            >
              Here’s&nbsp;my&nbsp;resume
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </p>

          {/* Tabs */}
          <nav className="flex flex-wrap gap-4 md:gap-6 mb-8">
            {['skills', 'experience', 'education'].map((section) => (
              <button
                key={section}
                type="button"
                onClick={() => setActiveSection(section)}
                className={`relative font-semibold capitalize transition-all duration-300 hover:scale-105 text-lg md:text-xl ${activeSection === section
                    ? 'text-dark-900 dark:text-light-50'
                    : 'text-dark-500 dark:text-light-400 hover:text-dark-900 dark:hover:text-light-50'
                  }`}
              >
                {section}
                {activeSection === section && (
                  <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-dark-900 via-dark-700 to-dark-500 dark:from-light-50 dark:via-light-300 dark:to-light-400" />
                )}
              </button>
            ))}
          </nav>

          {/* Tab panels */}
          <div className="mt-6 md:mt-8 space-y-4 bg-light-100 dark:bg-dark-100 backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-sm border border-light-300 dark:border-dark-300">
            {activeSection === 'skills' && (
              <ul className="space-y-3 text-dark-700 dark:text-light-300 list-disc list-inside">
                <li><b className="text-dark-900 dark:text-light-50">Programming Languages:</b> JavaScript | TypeScript | C++ | HTML | CSS</li>
                <li><b className="text-dark-900 dark:text-light-50">Web Development:</b> React.js | Next.js | Tailwind CSS | Node.js | Express.js | MongoDB | REST APIs</li>
                <li><b className="text-dark-900 dark:text-light-50">Development Tools & Methods:</b> Git | GitHub | Testing | Debugging | Agile</li>
                <li><b className="text-dark-900 dark:text-light-50">Content & SEO:</b> WordPress | Technical Writing | SEO Optimization</li>
                <li><b className="text-dark-900 dark:text-light-50">Research & Analytics:</b> Market Research | Data Analysis | Visualization | Excel</li>
              </ul>
            )}
            {activeSection === 'experience' && (
              <ul className="space-y-6 text-dark-700 dark:text-light-300">
                <li>
                  <h3 className="font-semibold text-dark-900 dark:text-light-50 text-lg">Web Content Writer Intern · NaukriSafar</h3>
                  <p className="text-sm text-dark-500 dark:text-light-400">Jan 2025 – Mar 2025 · Remote</p>
                  <ul className="list-disc list-inside space-y-1 mt-1">
                    <li>Delivered 100+ optimized job-related blogs (SEO 70+).</li>
                    <li>Improved organic reach by 40% via best-practice SEO.</li>
                  </ul>
                </li>
                <li>
                  <h3 className="font-semibold text-dark-900 dark:text-light-50 text-lg">Research Intern · DrMudhiwalla & The We Foundation</h3>
                  <p className="text-sm text-dark-500 dark:text-light-400">Nov 2023 – Aug 2024 · Remote & Kolkata</p>
                  <ul className="list-disc list-inside space-y-1 mt-1">
                    <li>Analyzed 35+ sector-diverse market research reports.</li>
                    <li>Increased client engagement 25% through visual reports.</li>
                  </ul>
                </li>
                <li>
                  <h3 className="font-semibold text-dark-900 dark:text-light-50 text-lg">Team Lead · Smart India Hackathon 2024</h3>
                  <p className="text-sm text-dark-500 dark:text-light-400">Sep – Nov 2024</p>
                  <ul className="list-disc list-inside space-y-1 mt-1">
                    <li>Led 6-member Agile team through full dev lifecycle.</li>
                    <li>Built “E-Scholar” PMSSS scholarship system (React + Tailwind).</li>
                  </ul>
                </li>
              </ul>
            )}
            {activeSection === 'education' && (
              <ul className="space-y-3 list-disc list-inside text-dark-700 dark:text-light-300">
                <li><b className="text-dark-900 dark:text-light-50">B.Tech, Computer Science & Engineering:</b> Dr. Sudhir Chandra Sur Institute · MAKAUT (2022-2026)</li>
                <li><b className="text-dark-900 dark:text-light-50">Higher Secondary Exam:</b> Kodalia Agapur H.S. · 2022</li>
                <li><b className="text-dark-900 dark:text-light-50">Secondary Exam:</b> Kodalia Agapur H.S. · 2020</li>
                <li><b className="text-dark-900 dark:text-light-50">Certifications:</b> Delta Full-Stack (Apna College) · Google UX Design · TCS ION Soft Skills</li>
              </ul>
            )}
          </div>

          {/* Social profiles */}
          <section className="mt-16">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 bg-gradient-to-r from-dark-900 via-dark-700 to-dark-500 dark:from-light-50 dark:via-light-300 dark:to-light-400 bg-clip-text text-transparent">
              My Profiles
            </h2>
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {[
                { href: 'https://www.linkedin.com/in/soumyodeep-dey-s-d-2a125b1a7/', icon: <FaLinkedin className="text-dark-900 dark:text-light-50" />, label: 'LinkedIn' },
                { href: 'https://twitter.com/Soumyodeep2003', icon: <FaTwitter className="text-dark-900 dark:text-light-50" />, label: 'Twitter' },
                { href: 'https://github.com/Soumyodeep-Dey', icon: <FaGithub className="text-dark-900 dark:text-light-50" />, label: 'GitHub' },
                { href: 'https://leetcode.com/u/SOUMYODEEP_DEY/', icon: <SiLeetcode className="text-dark-900 dark:text-light-50" />, label: 'LeetCode' }
              ].map(({ href, icon, label }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center p-4 rounded-2xl bg-light-100 dark:bg-dark-100 backdrop-blur-md shadow-sm border border-light-300 dark:border-dark-300 hover:shadow-lg hover:border-dark-400 dark:hover:border-light-400 transition"
                  >
                    <span className="text-3xl mb-2 group-hover:scale-125 transition-transform duration-300">{icon}</span>
                    <span className="text-base font-medium text-dark-900 dark:text-light-50">{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </section>
      </div>
    </main>
  );
}

export default Home;
