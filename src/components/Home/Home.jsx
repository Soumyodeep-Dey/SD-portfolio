import { FaArrowRight, FaGithub, FaLinkedin, FaDownload, FaShieldAlt, FaCalendarAlt } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import PropTypes from 'prop-types';
import { SiLeetcode } from 'react-icons/si';
import { useRef, useState } from 'react';

const resumeLink = import.meta.env.VITE_RESUME_LINK;
const github = 'https://github.com/Soumyodeep-Dey';
const linkedin = 'https://www.linkedin.com/in/soumyodeep-dey/';
const email = 'soumyodeepdey2003@gmail.com';

const focusAreas = [
  ['Software engineering', 'Full-stack applications, API design, authentication, databases, and maintainable interfaces.'],
  ['AI engineering', 'LLM applications, retrieval-augmented generation, prompt design, agents, and vector search.'],
  ['Security & systems', 'Linux, networking, secure software concepts, containers, and infrastructure fundamentals.'],
];

const featuredProjects = [
  {
    name: 'Context Bot',
    type: 'RAG application',
    problem: 'Making uploaded documents and web content useful in a focused AI conversation.',
    engineering: 'Built a retrieval workflow that indexes PDFs, CSVs, text, and web sources for context-aware chat using OpenAI, Qdrant, and LangChain.',
    stack: 'Next.js · OpenAI · Qdrant · LangChain',
    github: 'https://github.com/Soumyodeep-Dey/context_bot',
    demo: 'https://youtu.be/Zi-qxFximXI',
  },
  {
    name: 'Ghar Nishchit',
    type: 'Full-stack rental platform',
    problem: 'Giving tenants and small landlords a more direct way to manage rental workflows.',
    engineering: 'Contributed to a team platform with role-based access, property workflows, payments, contracts, maintenance tracking, messaging, and notifications.',
    stack: 'REST APIs · JWT · MongoDB · PostgreSQL · Razorpay',
    github: 'https://github.com/Soumyodeep-Dey/Ghar_Nishchit',
    demo: 'https://ghar-nishchit-frontend.onrender.com/',
  },
  {
    name: 'BeautyMatch',
    type: 'Privacy-first browser extension',
    problem: 'Helping shoppers assess product suitability while keeping personal skincare preferences local.',
    engineering: 'Built a Chrome extension for Nykaa, Amazon.in, and Sephora that works locally without tracking or data sharing.',
    stack: 'React · Tailwind · CRXJS',
    github: 'https://github.com/Soumyodeep-Dey/BeautyMatch',
    demo: 'https://chromewebstore.google.com/detail/beautymatch/kongfkfcoganehdeiiaffpmmedmkbjho',
  },
];

const experiences = [
  { period: 'Sep 2024 – Present', company: 'Final Year Project & Smart India Hackathon', role: 'Team Lead', description: 'Leading a final-year project team and previously led a six-person Agile team for Smart India Hackathon 2024.' },
  { period: 'Jan 2025 – Jun 2025', company: 'TTEC · Ahmedabad', role: 'Technical Support Specialist I', description: 'Corporate email and chat operations experience that strengthened clear communication, structured problem solving, customer interaction, and collaboration within established processes.', note: 'This was not a software engineering role; it is part of the professional foundation I bring to engineering work.' },
  { period: 'Aug 2025 – Oct 2025', company: 'Cenvexa · Remote & Kolkata', role: 'Software Development Intern', description: 'Contributed to web and mobile development work, including iterative feature delivery and onboarding-flow improvements.' },
  { period: 'Jan 2025 – Mar 2025', company: 'NaukriSafar · Remote', role: 'Web Content Writer Intern', description: 'Created SEO-focused job content and applied on-page writing practices to support organic discoverability.' },
  { period: 'Nov 2023 – Aug 2024', company: 'DrMudhiwalla & The We Foundation · Remote & Kolkata', role: 'Research Intern', description: 'Analysed market reports and turned findings into concise visual summaries for stakeholders.' },
];

function SectionTitle({ eyebrow, title, children }) {
  return <header className="max-w-2xl mb-10"><p className="eyebrow">{eyebrow}</p><h2 className="section-title">{title}</h2>{children && <p className="section-copy">{children}</p>}</header>;
}

SectionTitle.propTypes = { eyebrow: PropTypes.string.isRequired, title: PropTypes.string.isRequired, children: PropTypes.node };

function Home() {
  const [copiedLabel, setCopiedLabel] = useState('');
  const copyTimerRef = useRef(null);

  const handleCopyKeyDown = (event, label, value) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleCopy(label, value);
    }
  };

  const handleCopy = async (label, value) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedLabel(`${label} copied`);
    } catch {
      setCopiedLabel('Copy failed');
    }

    if (copyTimerRef.current) {
      clearTimeout(copyTimerRef.current);
    }

    copyTimerRef.current = setTimeout(() => {
      setCopiedLabel('');
      copyTimerRef.current = null;
    }, 1800);
  };

  return (
    <main>
      <section className="hero-grid" id="home">
        <div className="hero-copy">
          <p className="eyebrow">Soumyodeep Dey · Kolkata, India</p>
          <h1>Software Engineer building <span>AI-powered and secure systems.</span></h1>
          <p className="hero-lede">I build full-stack software, AI applications, and backend systems while developing deeper expertise in cybersecurity, Linux, networking, and secure AI.</p>
          <div className="hero-actions">
            <a href="#projects" className="button button-primary">Explore selected work <FaArrowRight /></a>
            <a href={resumeLink} target="_blank" rel="noreferrer" className="button button-secondary"><FaDownload /> View resume</a>
            <span role="button" tabIndex={0} className="contact-copy contact-copy-inline" onClick={() => handleCopy('Email', email)} onKeyDown={(event) => handleCopyKeyDown(event, 'Email', email)}><MdEmail /> {email}</span>
          </div>
          <div className="social-links-block" aria-label="Other profiles">
            <p className="social-links-title">Other profiles</p>
            <div className="social-links">
              <a href={github} target="_blank" rel="noreferrer"><FaGithub /> GitHub</a>
              <a href={linkedin} target="_blank" rel="noreferrer"><FaLinkedin /> LinkedIn</a>
              <a href="https://x.com/Soumyodeep2003" target="_blank" rel="noreferrer"><FaXTwitter /> X</a>
              <a href="https://leetcode.com/u/SOUMYODEEP_DEY/" target="_blank" rel="noreferrer"><SiLeetcode /> LeetCode</a>
            </div>
          </div>
          {copiedLabel && <p className="copy-feedback" role="status" aria-live="polite">{copiedLabel}</p>}
        </div>
        <aside className="hero-panel" aria-label="Engineering direction">
          <FaShieldAlt className="panel-icon" aria-hidden="true" />
          <p className="eyebrow">Engineering direction</p>
          <h2>Software engineering → AI systems → AI security</h2>
          <p>Building practical foundations across software, AI, systems, and security—without claiming expertise before it is earned.</p>
          <dl><div><dt>Primary focus</dt><dd>AI Engineering & Backend Systems</dd></div><div><dt>Long-term goal</dt><dd>AI Security Engineering</dd></div></dl>
        </aside>
      </section>

      <section className="page-section" id="projects">
        <SectionTitle eyebrow="Selected projects" title="Proof through systems I’ve built.">Each project starts with a problem and focuses on the engineering behind the solution.</SectionTitle>
        <div className="project-grid">
          {featuredProjects.map((project) => <article className="project-card" key={project.name}>
            <p className="project-type">{project.type}</p><h3>{project.name}</h3>
            <div><strong>Problem</strong><p>{project.problem}</p></div>
            <div><strong>Engineering</strong><p>{project.engineering}</p></div>
            <p className="project-stack">{project.stack}</p>
            <div className="project-links">{project.github && <a href={project.github} target="_blank" rel="noreferrer">GitHub <FaArrowRight /></a>}<a href={project.demo} target="_blank" rel="noreferrer">{project.github ? 'Live demo' : 'Watch demo'} <FaArrowRight /></a></div>
          </article>)}
        </div>
        <a className="text-link" href="/projects">View all projects <FaArrowRight /></a>
      </section>

      <section className="page-section muted-section" id="focus">
        <SectionTitle eyebrow="Technical focus" title="A deliberate stack, not a long list.">My work is grounded in software engineering; AI and security are the directions I am actively deepening.</SectionTitle>
        <div className="focus-grid">{focusAreas.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="page-section two-column" id="about">
        <div><SectionTitle eyebrow="About" title="An intentional engineering path."><span>I began with full-stack development, then moved deeper into AI application development. Alongside that work, Linux, networking, and cybersecurity became central interests. I’m now connecting these disciplines toward a long-term focus on AI security.</span></SectionTitle></div>
        <div className="detail-list"><div><b>Building with</b><p>Python, JavaScript, TypeScript, React, Next.js, Node.js, Express, MongoDB, PostgreSQL, and REST APIs.</p></div><div><b>Learning deeply</b><p>RAG, agents, MCP, vector databases, Linux, networking, application security, Docker, GitOps, and ArgoCD.</p></div><div><b>Background</b><p>B.Tech in Computer Science. Smart India Hackathon participant in 2024 and 2025.</p></div></div>
      </section>

      <section className="page-section" id="experience"><SectionTitle eyebrow="Experience" title="Professional context that shaped how I work." /><div className="experience-list">{experiences.map((experience) => <article className="experience-card" key={`${experience.company}-${experience.role}`}><p className="project-type">{experience.period}</p><h3>{experience.role}</h3><h4>{experience.company}</h4><p>{experience.description}</p>{experience.note && <small>{experience.note}</small>}</article>)}</div></section>

      <section className="contact-section" id="contact"><p className="eyebrow">Let’s connect</p><h2>Interested in building thoughtful software and AI systems?</h2><p>I’m open to software engineering, backend, AI engineering, and security-focused opportunities. Choose an available time and Google Calendar will send a booking confirmation.</p><div className="hero-actions"><a href="https://calendar.app.google/1BqyLsDaGxehCVri7" target="_blank" rel="noreferrer" className="button button-primary"><FaCalendarAlt /> Book a call</a><a href={github} target="_blank" rel="noreferrer" className="button button-secondary">Explore GitHub</a></div><div className="contact-copy-list" aria-label="Direct contact details"><span role="button" tabIndex={0} className="contact-copy contact-copy-line" onClick={() => handleCopy('Email', email)} onKeyDown={(event) => handleCopyKeyDown(event, 'Email', email)}><MdEmail /> {email}</span></div></section>
    </main>
  );
}

export default Home;
