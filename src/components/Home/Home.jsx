/* Home.jsx – Clean UI with subtle improvements and repositioned image */
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
      className="bg-light-50 dark:bg-dark-50 py-20 min-h-screen relative overflow-hidden"
    >
      {/* Subtle background elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-light-200 dark:bg-dark-200 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-30" />
        <div className="absolute bottom-32 left-20 w-80 h-80 bg-light-250 dark:bg-dark-250 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-20" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Header section with centered image */}
        <header className="text-center mb-16">
          {/* Profile image - smaller and centered */}
          <div className="flex justify-center mb-8">
            <figure className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-light-300 via-light-400 to-light-500 dark:from-dark-300 dark:via-dark-400 dark:to-dark-500 rounded-full blur opacity-30 group-hover:opacity-60 transition-opacity duration-500" />
              <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48">
                <img
                  src="/Images/MY photo.jpg"
                  alt="Soumyodeep Dey"
                  className="w-full h-full object-cover rounded-full shadow-xl border-2 border-light-300 dark:border-dark-300 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-primary-500 to-primary-600 text-light-50 text-xs font-semibold py-1.5 px-4 rounded-full shadow-lg">
                    #OpenToWork
                  </span>
                </div>
              </div>
            </figure>
          </div>

          {/* Main heading */}
          <div className="space-y-4 mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark-800 dark:text-light-950 animate-fadeInLeft">
              Hi, I'm <span className="text-dark-650 dark:text-light-750">Soumyodeep Dey</span>
            </h1>

            {/* Location */}
            <p className="text-lg text-dark-700 dark:text-light-700">
              New Barrackpore, Kolkata, West Bengal, India
            </p>

            {/* Contact info */}
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
        </header>

        {/* Content section */}
        <section className="max-w-4xl mx-auto space-y-12">
          {/* Summary */}
          <div className="bg-light-100 dark:bg-dark-100 rounded-3xl p-8 md:p-10 shadow-sm border border-light-300 dark:border-dark-300">
            <p className="text-base md:text-lg leading-relaxed text-dark-800 dark:text-light-800 mb-6">
              Final-year Computer Science Engineering student with hands-on experience in{' '}
              <strong className="text-dark-550 dark:text-light-550 font-bold">software development</strong>,{' '}
              <strong className="text-dark-550 dark:text-light-550 font-bold">web development</strong>,{' '}
              <strong className="text-dark-550 dark:text-light-550 font-bold">content writing</strong>,{' '}
              <strong className="text-dark-550 dark:text-light-550 font-bold">market research</strong>, and{' '}
              <strong className="text-dark-550 dark:text-light-550 font-bold">data analysis</strong>.
              Adept at creating intuitive, scalable web applications using modern frameworks and engineering principles.
              Successfully led a six-member team in Smart India Hackathon 2024. Seeking a Software Development internship to leverage modern tech expertise and team leadership.
            </p>
            <a
              href={RESUME_LINK}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-light-50 font-semibold rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-lg"
            >
              <span>View My Resume</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
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
              <div className="space-y-6 text-dark-600 dark:text-light-600">
                {[
                  { category: 'Programming Languages', items: 'JavaScript | TypeScript | C++ | HTML | CSS' },
                  { category: 'Web Development', items: 'React.js | Next.js | Tailwind CSS | Node.js | Express.js | MongoDB | REST APIs' },
                  { category: 'Development Tools & Methods', items: 'Git | GitHub | Testing | Debugging | Agile' },
                  { category: 'Content & SEO', items: 'WordPress | Technical Writing | SEO Optimization' },
                ].map(({ category, items }) => (
                  <div key={category} className="flex flex-col lg:flex-row lg:items-start gap-4 p-6 rounded-2xl bg-light-150 dark:bg-dark-150 border border-light-250 dark:border-dark-250 hover:bg-light-200 dark:hover:bg-dark-200 transition-all duration-200">
                    <strong className="text-dark-450 dark:text-light-450 font-bold min-w-fit lg:w-56 text-base">
                      {category}:
                    </strong>
                    <span className="flex-1 text-base leading-relaxed">{items}</span>
                  </div>
                ))}
              </div>
            )}

            {activeSection === 'experience' && (
              <div className="space-y-8 text-dark-750 dark:text-light-750">
                {[
                  {
                    title: 'Software Development Intern',
                    company: 'SplitMate',
                    period: 'Aug 2025 – Present',
                    location: 'Remote & Kolkata',
                    achievements: [
                      'Building scalable web and mobile applications, contributing to 30% of the frontend codebase using modern frameworks like React and React Native.',
                      'Implemented core features that improved user flow and reduced onboarding time by 20%.',
                      'Collaborated with a team of 6 developers to ship weekly product updates and handle bug fixes, resulting in a 40% faster release cycle.'
                    ]
                  },
                  {
                    title: 'Web Content Writer Intern',
                    company: 'NaukriSafar',
                    period: 'Jan 2025 – Mar 2025',
                    location: 'Remote',
                    achievements: [
                      'Delivered 100+ optimized job-related blogs (SEO 70+).',
                      'Improved organic reach by 40% via best-practice SEO.'
                    ]
                  },
                  {
                    title: 'Research Intern',
                    company: 'DrMudhiwalla & The We Foundation',
                    period: 'Nov 2023 – Aug 2024',
                    location: 'Remote & Kolkata',
                    achievements: [
                      'Analyzed 35+ sector-diverse market research reports.',
                      'Increased client engagement 25% through visual reports.'
                    ]
                  },
                  {
                    title: 'Team Lead',
                    company: 'Smart India Hackathon 2024',
                    period: 'Sep – Nov 2024',
                    location: '',
                    achievements: [
                      'Led 6-member Agile team through full dev lifecycle.',
                      'Built "E-Scholar" PMSSS scholarship system (React + Tailwind).'
                    ]
                  }
                ].map((job, index) => (
                  <div key={index} className="p-8 rounded-2xl bg-light-150 dark:bg-dark-150 border border-light-250 dark:border-dark-250 hover:bg-light-200 dark:hover:bg-dark-200 hover:shadow-md transition-all duration-300">
                    <div className="mb-6">
                      <h3 className="font-bold text-dark-450 dark:text-light-450 text-xl mb-2">
                        {job.title} · {job.company}
                      </h3>
                      <p className="text-base text-dark-600 dark:text-light-600 font-medium">
                        {job.period}{job.location && ` · ${job.location}`}
                      </p>
                    </div>
                    <ul className="space-y-4">
                      {job.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-4">
                          <div className="w-2 h-2 bg-primary-600 rounded-full mt-3 flex-shrink-0" />
                          <span className="leading-relaxed text-base">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {activeSection === 'education' && (
              <div className="space-y-6 text-dark-600 dark:text-light-600">
                {[
                  { degree: 'B.Tech, Computer Science & Engineering', institution: 'Surtech · MAKAUT', year: '(2022-2026)' },
                  { degree: 'Higher Secondary Exam', institution: 'Kodalia Agapur H.S.', year: '2022' },
                  { degree: 'Secondary Exam', institution: 'Kodalia Agapur H.S.', year: '2020' },
                  { degree: 'Certifications', institution: 'Delta Full-Stack (Apna College) · Google UX Design · TCS ION Soft Skills', year: '' }
                ].map((edu, index) => (
                  <div key={index} className="flex flex-col lg:flex-row lg:items-center gap-4 p-6 rounded-2xl bg-light-150 dark:bg-dark-150 border border-light-250 dark:border-dark-250 hover:bg-light-200 dark:hover:bg-dark-200 transition-all duration-200">
                    <strong className="text-dark-450 dark:text-light-450 font-bold min-w-fit lg:w-56 text-base">
                      {edu.degree}:
                    </strong>
                    <span className="flex-1 text-base leading-relaxed">{edu.institution} {edu.year}</span>
                  </div>
                ))}
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
                { href: 'https://www.linkedin.com/in/soumyodeep-dey-s-d-2a125b1a7/', icon: <FaLinkedin className="text-dark-500 dark:text-light-500" />, label: 'LinkedIn' },
                { href: 'https://twitter.com/Soumyodeep2003', icon: <FaTwitter className="text-dark-500 dark:text-light-500" />, label: 'Twitter' },
                { href: 'https://github.com/Soumyodeep-Dey', icon: <FaGithub className="text-dark-500 dark:text-light-500" />, label: 'GitHub' },
                { href: 'https://leetcode.com/u/SOUMYODEEP_DEY/', icon: <SiLeetcode className="text-dark-500 dark:text-light-500" />, label: 'LeetCode' }
              ].map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center p-6 rounded-2xl bg-light-150 dark:bg-dark-150 border border-light-250 dark:border-dark-250 hover:bg-light-200 dark:hover:bg-dark-200 hover:shadow-md hover:scale-105 transition-all duration-300"
                >
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