/* Home.jsx – Clean UI with subtle improvements and repositioned image */
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
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
      className="bg-light-50 dark:bg-dark-50 py-20 min-h-screen relative overflow-hidden"
    >
      {/* Subtle background elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-light-200 dark:bg-dark-200 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-30" />
        <div className="absolute bottom-32 left-20 w-80 h-80 bg-light-250 dark:bg-dark-250 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-20" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Header section with text left and image right */}
        <header className="mb-10">
          <div className="grid lg:grid-cols-2 gap-4 lg:gap-8 items-center">
            <div className="space-y-3 lg:text-left text-center lg:pl-24 lg:translate-x-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark-800 dark:text-light-950 drop-shadow-sm animate-fadeInLeft">
                Hi, I&apos;m <span className="text-dark-650 dark:text-light-750 whitespace-nowrap">Soumyodeep Dey</span>
              </h1>
              <p className="text-2xl md:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-400 drop-shadow-sm">
                Software Developer
              </p>
              <p className="text-lg md:text-xl text-dark-700 dark:text-light-700 drop-shadow-sm">
                Kolkata, West Bengal, India
              </p>
              <div className="inline-flex flex-col sm:flex-row items-center gap-6 text-sm bg-light-100 dark:bg-dark-100 backdrop-blur-md p-4 rounded-2xl shadow-sm border border-light-300 dark:border-dark-300">
                <a
                  href="mailto:soumyodeepdey2003@gmail.com"
                  className="flex items-center gap-2 text-dark-800 dark:text-light-800 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 font-medium"
                >
                  <MdEmail className="w-5 h-5" />
                  <span>Email</span>
                </a>
                <span className="hidden sm:block text-dark-400 dark:text-light-400">|</span>
                <a
                  href="tel:+919836545284"
                  className="flex items-center gap-2 text-dark-800 dark:text-light-800 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 font-medium"
                >
                  <MdPhone className="w-5 h-5" />
                  <span>+91 9836545284</span>
                </a>
              </div>
            </div>

            {/* Profile image on the right */}
            <div className="flex justify-center lg:justify-center lg:translate-x-12">
              <figure className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-light-300 via-light-400 to-light-500 dark:from-dark-300 dark:via-dark-400 dark:to-dark-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-500" />
                <div className="relative w-36 h-48 md:w-44 md:h-56 lg:w-56 lg:h-72">
                  <img
                    src="/Images/LOGO.webp"
                    alt="Soumyodeep Dey"
                    className="w-full h-full object-cover rounded-2xl shadow-xl border-2 border-light-300 dark:border-dark-300 group-hover:scale-105 transition-all duration-500"
                  />
                </div>
              </figure>
            </div>
          </div>
        </header>

        {/* Content section */}
        <section className="max-w-4xl mx-auto space-y-12">
          {/* Summary */}
          <div className="bg-light-100 dark:bg-dark-100 rounded-3xl p-8 md:p-10 shadow-sm border border-light-300 dark:border-dark-300 space-y-6">
            <div className="space-y-3">
              <p className="text-lg md:text-xl font-semibold text-dark-200 dark:text-light-50">
                Software Developer crafting clean, AI-forward web apps.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-dark-450 dark:text-light-800">
                I build fast React/Node experiences, plug in LLMs when they solve real problems, and keep interfaces simple so people get value quickly.
              </p>
            </div>
            <div className="grid gap-3 md:grid-cols-3 text-sm text-dark-400 dark:text-light-750">
              {[
                'Full-stack: React, Next.js, Node, Express, MongoDB, SQL',
                'GenAI: LangChain, RAG, vector DBs, agents, OpenAI/Anthropic',
                'Tools: Git, GitHub, CI/CD, Agile, Testing, Debugging',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 p-4 rounded-2xl bg-light-150 dark:bg-dark-150 border border-light-250 dark:border-dark-250"
                >
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary-600" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={RESUME_LINK}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-light-50 font-semibold rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-lg"
              >
                <span>View My Resume</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <NavLink
                to="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-primary-200 text-primary-700 dark:text-primary-300 hover:bg-primary-50 dark:hover:bg-primary-950/30 transition-colors duration-200 font-semibold"
              >
                View Projects
              </NavLink>
            </div>
          </div>

          {/* Navigation tabs */}
          <nav className="flex flex-wrap justify-center gap-8 md:gap-12">
            {['skills', 'experience', 'education'].map((section) => (
              <button
                key={section}
                type="button"
                onClick={() => setActiveSection(section)}
                className={`relative font-bold capitalize text-xl md:text-2xl transition-all duration-300 hover:scale-105 ${activeSection === section
                  ? 'text-dark-950 dark:text-light-950'
                  : 'text-dark-600 dark:text-light-600 hover:text-dark-850 dark:hover:text-light-850'
                  }`}
              >
                {section}
                {activeSection === section && (
                  <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-primary-600 rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Content panels */}
          <div className="bg-light-100 dark:bg-dark-100 rounded-3xl p-8 md:p-12 shadow-sm border border-light-300 dark:border-dark-300 min-h-[500px]">
            {activeSection === 'skills' && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-dark-500 dark:text-light-50 mb-2">
                    Technical Skills
                  </h2>
                  <p className="text-lg text-dark-700 dark:text-light-300">
                    Technologies I work with to build modern applications
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      title: 'Web & UI',
                      gradient: 'from-blue-500 to-cyan-500',
                      items: ['React/Next.js', 'Tailwind CSS', 'TypeScript', 'Animations & UX polish']
                    },
                    {
                      title: 'Backend',
                      gradient: 'from-green-500 to-emerald-500',
                      items: ['Node.js + Express', 'REST APIs', 'MongoDB & SQL', 'Auth & performance basics']
                    },
                    {
                      title: 'GenAI',
                      gradient: 'from-purple-500 to-pink-500',
                      items: ['LangChain + RAG', 'Vector DBs', 'Agents & tooling', 'OpenAI / Anthropic']
                    },
                    {
                      title: 'Delivery',
                      gradient: 'from-orange-500 to-red-500',
                      items: ['Git/GitHub + CI/CD', 'Testing & debugging', 'Agile teamwork']
                    }
                  ].map(({ title, gradient, items }) => (
                    <div
                      key={title}
                      className="group relative overflow-hidden rounded-3xl bg-light-150 dark:bg-dark-150 border-2 border-light-250 dark:border-dark-250 p-8 shadow-sm hover:border-primary-500 dark:hover:border-primary-400 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:bg-light-200/80 dark:hover:bg-dark-200/80"
                    >
                      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient} rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                      <h3 className="text-2xl font-bold text-dark-900 dark:text-light-50 mb-6 transition-colors duration-200 group-hover:text-primary-700 dark:group-hover:text-primary-300">{title}</h3>
                      <ul className="space-y-3">
                        {items.map((item) => (
                          <li key={item} className="flex items-center gap-3 text-lg text-dark-700 dark:text-light-300 transition-colors duration-200 group-hover:text-dark-900 dark:group-hover:text-light-50">
                            <span className={`h-2 w-2 rounded-full bg-gradient-to-r ${gradient} flex-shrink-0`} />
                            <span className="font-medium">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeSection === 'experience' && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-dark-500 dark:text-light-50 mb-2">
                    Professional Experience
                  </h2>
                  <p className="text-lg text-dark-700 dark:text-light-300">
                    Roles and projects that shaped my development journey
                  </p>
                </div>
                <div className="space-y-6">
                  {[
                    {
                      title: 'Team Lead',
                      company: 'Final Year Project & Smart India Hackathon 2024',
                      period: 'Sep 2024 - Present',
                      location: '',
                      achievements: [
                        'Currently leading final year project team.',
                        'Previously led 6-person Agile team for SIH 2024.'
                      ]
                    },
                    {
                      title: 'Software Development Intern',
                      company: 'Cenvexa',
                      period: 'Aug 2025 - Oct 2025',
                      location: 'Remote & Kolkata',
                      achievements: [
                        'Built React/React Native features that shipped weekly.',
                        'Improved onboarding flow; time-to-complete down ~20%.'
                      ]
                    },
                    {
                      title: 'Web Content Writer Intern',
                      company: 'NaukriSafar',
                      period: 'Jan 2025 - Mar 2025',
                      location: 'Remote',
                      achievements: [
                        'Shipped 100+ SEO-first job blogs (avg score 70+).',
                        'Lifted organic reach ~40% using on-page best practices.'
                      ]
                    },
                    {
                      title: 'Research Intern',
                      company: 'DrMudhiwalla & The We Foundation',
                      period: 'Nov 2023 - Aug 2024',
                      location: 'Remote & Kolkata',
                      achievements: [
                        'Analyzed 35+ market reports; distilled insights for clients.',
                        'Raised engagement ~25% with concise visual summaries.'
                      ]
                    }
                  ].map((job, index) => (
                    <div key={index} className="group relative rounded-3xl bg-light-150 dark:bg-dark-150 border-2 border-light-250 dark:border-dark-250 p-8 hover:border-primary-500 dark:hover:border-primary-400 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold text-dark-900 dark:text-light-50 mb-2">
                          {job.title}
                        </h3>
                        <p className="text-lg font-semibold text-primary-600 dark:text-primary-400 mb-1">
                          {job.company}
                        </p>
                        <p className="text-base text-dark-600 dark:text-light-600 font-medium">
                          {job.period}{job.location && ` · ${job.location}`}
                        </p>
                      </div>
                      <ul className="space-y-3">
                        {job.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-3 text-lg text-dark-700 dark:text-light-300">
                            <span className="h-2 w-2 rounded-full bg-primary-600 mt-2 flex-shrink-0" />
                            <span className="font-medium leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeSection === 'education' && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-dark-500 dark:text-light-50 mb-2">
                    Education
                  </h2>
                  <p className="text-lg text-dark-700 dark:text-light-300">
                    Academic background and qualifications
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { degree: 'B.Tech · CSE (2022-2026)', institution: 'Surtech · MAKAUT' },
                    { degree: 'Higher Secondary', institution: 'Kodalia Agapur H.S. · 2022' },
                    { degree: 'Secondary', institution: 'Kodalia Agapur H.S. · 2020' },
                  ].map((edu, index) => (
                    <div
                      key={index}
                      className="group relative rounded-3xl bg-light-150 dark:bg-dark-150 border-2 border-light-250 dark:border-dark-250 p-8 hover:border-primary-500 dark:hover:border-primary-400 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <p className="text-xl font-bold text-dark-900 dark:text-light-50 mb-2">{edu.degree}</p>
                      <p className="text-lg text-dark-700 dark:text-light-300 leading-relaxed">{edu.institution}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Social profiles - clean and minimal */}
          <section className="space-y-8">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-dark-550 dark:text-light-550">
              My Profiles
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {[
                { href: 'https://www.linkedin.com/in/soumyodeep-dey/', icon: <FaLinkedin className="text-blue-600 dark:text-blue-400" />, label: 'LinkedIn' },
                { href: 'https://twitter.com/Soumyodeep2003', icon: <FaTwitter className="text-sky-500 dark:text-sky-400" />, label: 'Twitter' },
                { href: 'https://github.com/Soumyodeep-Dey', icon: <FaGithub className="text-gray-700 dark:text-gray-300" />, label: 'GitHub' },
                { href: 'https://leetcode.com/u/SOUMYODEEP_DEY/', icon: <SiLeetcode className="text-orange-500 dark:text-orange-400" />, label: 'LeetCode' }
              ].map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex flex-col items-center p-6 rounded-2xl bg-light-200 dark:bg-dark-150 border border-light-250 dark:border-dark-250 hover:bg-light-300 dark:hover:bg-dark-200 hover:shadow-md hover:scale-105 transition-all duration-300 overflow-hidden"
                >
                  <span className="pointer-events-none absolute inset-0 rounded-2xl border border-transparent group-hover:border-primary-300 dark:group-hover:border-primary-500 group-hover:shadow-[0_0_0_6px_rgba(59,130,246,0.15)] dark:group-hover:shadow-[0_0_0_6px_rgba(59,130,246,0.25)] transition-all duration-300" />
                  <span className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {icon}
                  </span>
                  <span className="text-base font-semibold text-dark-800 dark:text-light-800">
                    {label}
                  </span>
                </a>
              ))}
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}

export default Home;