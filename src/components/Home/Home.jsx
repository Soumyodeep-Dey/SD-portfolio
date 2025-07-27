/* Home.jsx – UI/UX-refined, info + theme unchanged */
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

  /* util for running focus outline only when keyboard-tabbing */
  const handleKeyDown = (e) => {
    if (e.key === 'Tab') {
      document.body.classList.add('user-is-tabbing');
    }
  };

  return (
    <main
      id="about"
      onKeyDown={handleKeyDown}
      className="bg-gradient-to-b from-gray-100 via-gray-200 to-gray-100 dark:from-gray-800 dark:via-gray-700 dark:to-gray-900 py-16 min-h-screen relative overflow-hidden"
    >
      {/* ===== Decorative blobs ===== */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[
          '-top-0 -left-0 -translate-x-1/2 -translate-y-1/2',
          '-top-0 -right-0 translate-x-1/2 -translate-y-1/2 animation-delay-2000',
          '-bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 animation-delay-4000',
          'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animation-delay-1000'
        ].map((pos, i) => (
          <div
            key={i}
            aria-hidden="true"
            className={`w-96 h-96 rounded-full filter blur-3xl absolute bg-indigo-500/10 dark:bg-indigo-500/5 animate-blob ${pos}`}
          />
        ))}
      </div>

      {/* ===== Content grid ===== */}
      <div className="relative container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* === Profile image === */}
        <section className="about-col-1 flex justify-center">
          <figure className="relative group w-full max-w-sm md:max-w-md lg:max-w-lg">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-700" />
            <img
              src="/Images/MY photo.jpg"
              alt="Soumyodeep Dey"
              className="rounded-2xl shadow-2xl w-full transform group-hover:scale-105 transition-all duration-500 ease-in-out"
            />
            <figcaption className="absolute bottom-4 left-4">
              <span className="select-none bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-2 px-6 text-xs sm:text-sm rounded-full shadow-lg animate-pulse hover:scale-105 transition-transform duration-300">
                #OpenToWork
              </span>
            </figcaption>
          </figure>
        </section>

        {/* === Main text === */}
        <section
          className="about-col-2 text-gray-800 dark:text-gray-200 px-4 md:px-6"
          aria-labelledby="intro-heading"
        >
          <h1
            id="intro-heading"
            className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent animate-fadeInLeft"
          >
            Hi,&nbsp;I’m&nbsp;
            <span className="text-indigo-500 dark:text-indigo-300 relative inline-block">
              Soumyodeep&nbsp;Dey
            </span>
          </h1>

          {/* === Location + contacts === */}
          <address className="not-italic mb-4 space-y-2">
            <p className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">
              New&nbsp;Barrackpore,&nbsp;Kolkata,&nbsp;West&nbsp;Bengal,&nbsp;India
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 text-sm w-fit mx-auto bg-white/80 dark:bg-gray-800/70 backdrop-blur-md p-3 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
              <a
                href="mailto:soumyodeepdey2003@gmail.com"
                className="flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              >
                <MdEmail className="w-5 h-5 text-indigo-500 dark:text-indigo-300" />
                <span>Email</span>
              </a>
              <span className="hidden sm:block text-gray-400">|</span>
              <a
                href="tel:+919836545284"
                className="flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              >
                <MdPhone className="w-5 h-5 text-indigo-500 dark:text-indigo-300" />
                <span>+91&nbsp;9836545284</span>
              </a>
            </div>
          </address>

          {/* === Summary === */}
          <p className="text-base md:text-lg leading-relaxed mb-6">
            Final-year Computer&nbsp;Science Engineering student with hands-on
            experience in&nbsp;
            <strong className="text-indigo-600 dark:text-indigo-400">software&nbsp;development</strong>,&nbsp;
            <strong className="text-indigo-600 dark:text-indigo-400">web&nbsp;development</strong>,&nbsp;
            <strong className="text-indigo-600 dark:text-indigo-400">content&nbsp;writing</strong>,&nbsp;
            <strong className="text-indigo-600 dark:text-indigo-400">market&nbsp;research</strong>,&nbsp;
            and&nbsp;
            <strong className="text-indigo-600 dark:text-indigo-400">data&nbsp;analysis</strong>. Adept at
            creating intuitive, scalable web applications using modern frameworks
            and engineering principles. Successfully led a six-member team in
            Smart&nbsp;India&nbsp;Hackathon&nbsp;2024. Seeking a Software Development internship to
            leverage modern tech expertise and team leadership.
            <a
              href={RESUME_LINK}
              className="inline-flex items-center ml-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              Here’s&nbsp;my&nbsp;resume
              <svg
                className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
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

          {/* === Tabs === */}
          <nav
            aria-label="Profile details tabs"
            className="flex flex-wrap gap-4 md:gap-6 mb-8"
          >
            {['skills', 'experience', 'education'].map((section) => (
              <button
                key={section}
                type="button"
                onClick={() => setActiveSection(section)}
                className={`relative font-semibold capitalize transition-all duration-300 hover:scale-105 text-lg md:text-xl ${activeSection === section
                  ? 'text-indigo-500 dark:text-indigo-400'
                  : 'text-gray-500 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400'
                  }`}
              >
                {section}
                {activeSection === section && (
                  <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
                )}
              </button>
            ))}
          </nav>

          {/* === Tab panels === */}
          <div className="mt-6 md:mt-8 space-y-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition">
            {/* SKILLS */}
            {activeSection === 'skills' && (
              <ul className="space-y-3 text-gray-700 dark:text-gray-200 list-disc list-inside">
                <li>
                  <b className="text-indigo-600 dark:text-indigo-400">
                    Programming&nbsp;Languages:
                  </b>{' '}
                  JavaScript&nbsp;| TypeScript&nbsp;| C++&nbsp;| HTML&nbsp;| CSS
                </li>
                <li>
                  <b className="text-indigo-600 dark:text-indigo-400">
                    Web&nbsp;Development:
                  </b>{' '}
                  React.js&nbsp;| Next.js&nbsp;| Tailwind&nbsp;CSS&nbsp;| Node.js&nbsp;| Express.js&nbsp;|
                  MongoDB&nbsp;| REST&nbsp;APIs
                </li>
                <li>
                  <b className="text-indigo-600 dark:text-indigo-400">
                    Development&nbsp;Tools&nbsp;&amp;&nbsp;Methods:
                  </b>{' '}
                  Git&nbsp;| GitHub&nbsp;| Testing&nbsp;| Debugging&nbsp;| Agile
                </li>
                <li>
                  <b className="text-indigo-600 dark:text-indigo-400">
                    Content&nbsp;&amp;&nbsp;SEO:
                  </b>{' '}
                  WordPress&nbsp;| Technical&nbsp;Writing&nbsp;| SEO&nbsp;Optimization
                </li>
                <li>
                  <b className="text-indigo-600 dark:text-indigo-400">
                    Research&nbsp;&amp;&nbsp;Analytics:
                  </b>{' '}
                  Market&nbsp;Research&nbsp;| Data&nbsp;Analysis&nbsp;| Visualization&nbsp;| Excel
                </li>
              </ul>
            )}

            {/* EXPERIENCE */}
            {activeSection === 'experience' && (
              <ul className="space-y-6 text-gray-700 dark:text-gray-200">
                {/* Internship */}
                <li>
                  <h3 className="font-semibold text-indigo-600 dark:text-indigo-400 text-lg">
                    Web Content Writer Intern · NaukriSafar
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Jan&nbsp;2025–Mar&nbsp;2025 · Remote
                  </p>
                  <ul className="list-disc list-inside space-y-1 mt-1">
                    <li>Delivered 100+ optimized job-related blogs (SEO&nbsp;70+).</li>
                    <li>Improved organic reach by 40% via best-practice SEO.</li>
                  </ul>
                </li>

                {/* Research */}
                <li>
                  <h3 className="font-semibold text-indigo-600 dark:text-indigo-400 text-lg">
                    Research Intern · DrMudhiwalla&nbsp;&amp;&nbsp;The&nbsp;We&nbsp;Foundation
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Nov&nbsp;2023–Aug&nbsp;2024 · Remote&nbsp;&amp;&nbsp;Kolkata
                  </p>
                  <ul className="list-disc list-inside space-y-1 mt-1">
                    <li>Analyzed 35+ sector-diverse market research reports.</li>
                    <li>Increased client engagement 25% through visual reports.</li>
                  </ul>
                </li>

                {/* SIH */}
                <li>
                  <h3 className="font-semibold text-indigo-600 dark:text-indigo-400 text-lg">
                    Team&nbsp;Lead · Smart&nbsp;India&nbsp;Hackathon&nbsp;2024
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Sep–Nov&nbsp;2024
                  </p>
                  <ul className="list-disc list-inside space-y-1 mt-1">
                    <li>Led 6-member Agile team through full dev lifecycle.</li>
                    <li>
                      Built “E-Scholar” PMSSS scholarship system for 100+ users (React +
                      Tailwind).
                    </li>
                  </ul>
                </li>
              </ul>
            )}

            {/* EDUCATION */}
            {activeSection === 'education' && (
              <ul className="space-y-3 list-disc list-inside text-gray-700 dark:text-gray-200">
                <li>
                  <b className="text-indigo-600 dark:text-indigo-400">
                    B.Tech, Computer Science &amp; Engineering:
                  </b>{' '}
                  Dr.&nbsp;Sudhir&nbsp;Chandra&nbsp;Sur Institute · MAKAUT
                  (2022-2026)
                </li>
                <li>
                  <b className="text-indigo-600 dark:text-indigo-400">
                    Higher&nbsp;Secondary&nbsp;Exam:
                  </b>{' '}
                  Kodalia&nbsp;Agapur&nbsp;H.S. · 2022
                </li>
                <li>
                  <b className="text-indigo-600 dark:text-indigo-400">
                    Secondary&nbsp;Exam:
                  </b>{' '}
                  Kodalia&nbsp;Agapur&nbsp;H.S. · 2020
                </li>
                <li>
                  <b className="text-indigo-600 dark:text-indigo-400">
                    Certifications:
                  </b>{' '}
                  Delta Full-Stack (Apna College) · Google UX Design · TCS&nbsp;ION Soft
                  Skills
                </li>
              </ul>
            )}
          </div>

          {/* === Social profiles === */}
          <section className="mt-16" aria-labelledby="profiles-heading">
            <h2
              id="profiles-heading"
              className="text-2xl md:text-3xl font-bold text-center mb-8 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent"
            >
              My&nbsp;Profiles
            </h2>
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {[
                {
                  href:
                    'https://www.linkedin.com/in/soumyodeep-dey-s-d-2a125b1a7/',
                  icon: <FaLinkedin className="text-indigo-600" />,
                  label: 'LinkedIn',
                  ring: 'indigo'
                },
                {
                  href: 'https://twitter.com/Soumyodeep2003',
                  icon: <FaTwitter className="text-blue-500" />,
                  label: 'Twitter',
                  ring: 'blue'
                },
                {
                  href: 'https://github.com/Soumyodeep-Dey',
                  icon: <FaGithub className="text-gray-700 dark:text-gray-400" />,
                  label: 'GitHub',
                  ring: 'gray'
                },
                {
                  href: 'https://leetcode.com/u/SOUMYODEEP_DEY/',
                  icon: <SiLeetcode className="text-yellow-500" />,
                  label: 'LeetCode',
                  ring: 'yellow'
                }
              ].map(({ href, icon, label, ring }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex flex-col items-center p-4 rounded-2xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-md shadow-lg border border-gray-200 dark:border-gray-700 transition transform hover:-translate-y-2 hover:scale-105 hover:shadow-2xl hover:border-${ring}-400 dark:hover:border-${ring}-400 hover:bg-white/90 dark:hover:bg-gray-800/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-${ring}-500`}
                  >
                    <span className="text-3xl mb-2 group-hover:scale-125 transition-transform duration-300">
                      {icon}
                    </span>
                    <span className="text-base font-medium text-gray-800 dark:text-gray-200 group-hover:text-${ring}-700 dark:group-hover:text-${ring}-300 transition-colors duration-300">
                      {label}
                    </span>
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
