/* Projects.jsx – Enhanced to match Home.jsx design patterns with improved UX */
import { useState } from 'react';

const projectList = [
  {
    title: "Watchly (Developing)",
    description: "Watchly is an e-commerce platform specializing in wristwatches. It provides a seamless shopping experience for users with advanced features such as search, sorting, filtering, infinite scroll, and a sophisticated recommendation system (developing).",
    link: "https://github.com/Soumyodeep-Dey/Watchly",
    live: "https://watchly-frontend.onrender.com/",
    video: "/Videos/WatchLy.mp4",
    tags: ["React", "E-commerce", "Frontend", "Recommendation System"],
    status: "developing"
  },
  {
    title: "BeautyMatch",
    description: "BeautyMatch is a privacy-first Chrome extension that shows whether a beauty product is suitable for your skin tone, type, and allergies while browsing Nykaa, Amazon.in, or Sephora. It works 100% locally, with no tracking or data sharing. Built with React, Tailwind, and CRXJS.",
    link: "https://github.com/Soumyodeep-Dey/BeautyMatch",
    live: "https://chromewebstore.google.com/detail/beautymatch/kongfkfcoganehdeiiaffpmmedmkbjho",
    video: "/Videos/BeautyMatch.mp4",
    tags: ["Chrome Extension", "React", "Privacy-First", "AI"],
    status: "published",
    badge: "Chrome Store"
  },
  {
    title: "Prime Minister Special Scholarship Scheme",
    description: "Developed as part of Smart India Hackathon 2024, this project aims to create a paperless scholarship disbursement system for PMSSS. My primary role in this group project was designing and implementing the frontend using React and Tailwind CSS.",
    link: "https://github.com/Soumyodeep-Dey/Scholarship",
    live: "https://pmsss-scholarship.vercel.app/",
    video: "/Videos/PMSSS.mp4",
    tags: ["React", "Hackathon", "Government", "Team Project"],
    status: "published",
    badge: "Hackathon Winner"
  },
  {
    title: "AI Job Recommender",
    description: "A smart job recommendation system built using React and the Google AI API. It allows users to input their profile and preferences, and then generates personalized job suggestions powered by AI. It includes category-based filtering and role-specific insights.",
    link: "https://github.com/Soumyodeep-Dey/Ai_Job_Recommendation_System",
    live: "https://ai-job-recommendation-system-eight.vercel.app/",
    video: "/Videos/AIJobRecommender.mp4",
    tags: ["React", "AI API", "Machine Learning", "Job Search"],
    status: "published"
  },
  {
    title: "Next.js Authentication System",
    description: "A production-ready authentication app built with Next.js, TypeScript, MongoDB, and Tailwind CSS. It includes features like JWT-based auth, protected routes, and a clean, responsive UI. Built as a hands-on project after learning advanced authentication patterns.",
    link: "https://github.com/Soumyodeep-Dey/auth_next_js",
    live: "https://auth-next-js-zeta.vercel.app/login",
    video: "/Videos/NextAuthApp.mp4",
    tags: ["Next.js", "TypeScript", "MongoDB", "Authentication"],
    status: "published"
  },
  {
    title: "Movie App Demo (v0.1)",
    description: "Built using React Native, NativeWind, TMDB API, and Appwrite (BAAS), this is my first complete mobile app demo. The v0.1 version showcases the core features and design. Special thanks to JavaScript Mastery for guidance.",
    link: "https://github.com/Soumyodeep-Dey/Mobile_Movie_App",
    live: "https://www.linkedin.com/posts/soumyodeep-dey-s-d-2a125b1a7_100daysofcode-buildinpublic-appdevelopment-activity-7352362240777322503-VppU",
    video: "/Videos/MovieAppDemo.mp4",
    tags: ["React Native", "Mobile App", "TMDB API", "Appwrite"],
    status: "completed"
  },
  {
    title: "MemEconomy",
    description: "MemEconomy is a Hackathon project designed for BRAINROT Hackathon. I was responsible for developing the frontend, ensuring a seamless and responsive UI.",
    link: "https://github.com/Soumyodeep-Dey/memeconomy",
    live: "https://meme-economy-black.vercel.app/",
    video: "/Videos/memeconomy.mp4",
    tags: ["React", "Hackathon", "Frontend", "Creative"],
    status: "published"
  },
  {
    title: "TO DO App",
    description: "A TODO app built with HTML, CSS, and JavaScript. Users can add, edit, and delete tasks with local storage persistence.",
    link: "https://github.com/Soumyodeep-Dey/TO-DO-LIST",
    live: "https://soumyodeep-dey.github.io/TO-DO-LIST/",
    video: "/Videos/ToDoApp.mp4",
    tags: ["HTML", "CSS", "JavaScript", "Local Storage"],
    status: "published"
  },
  {
    title: "Coming Soon...",
    description: "This project is under development. Stay tuned for more updates!",
    link: "https://github.com/Soumyodeep-Dey",
    live: "https://github.com/Soumyodeep-Dey",
    video: "/Videos/XYZ.mp4",
    tags: ["Coming Soon"],
    status: "planning"
  },
];

function Projects() {
  const [loadingMedia, setLoadingMedia] = useState({});
  const [errorMedia, setErrorMedia] = useState({});
  const [filter, setFilter] = useState('all');

  const handleMediaLoadStart = (index, type) => {
    setLoadingMedia(prev => ({ ...prev, [`${index}-${type}`]: true }));
  };
  const handleMediaLoad = (index, type) => {
    setLoadingMedia(prev => ({ ...prev, [`${index}-${type}`]: false }));
  };
  const handleMediaError = (index, type) => {
    setErrorMedia(prev => ({ ...prev, [`${index}-${type}`]: true }));
    setLoadingMedia(prev => ({ ...prev, [`${index}-${type}`]: false }));
  };

  const filteredProjects = filter === 'all'
    ? projectList
    : projectList.filter(project => project.status === filter);

  const getStatusColor = (status) => {
    switch (status) {
      case 'developing': return 'bg-warning-500';
      case 'completed': return 'bg-success-500';
      case 'published': return 'bg-primary-500';
      case 'planning': return 'bg-light-600 dark:bg-dark-600';
      default: return 'bg-light-600 dark:bg-dark-600';
    }
  };

  return (
    <main
      id="projects"
      className="bg-light-50 dark:bg-dark-50 py-20 min-h-screen relative overflow-hidden"
    >
      {/* Subtle background elements matching Home.jsx */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-light-200 dark:bg-dark-200 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-30" />
        <div className="absolute bottom-32 left-20 w-80 h-80 bg-light-250 dark:bg-dark-250 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-light-300 dark:bg-dark-300 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-10" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Header section */}
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark-600 dark:text-light-650 animate-fadeInLeft mb-4">
            My Projects
          </h1>
          <p className="text-lg text-dark-700 dark:text-light-700 max-w-2xl mx-auto leading-relaxed">
            A collection of projects showcasing my journey in web development, from simple utilities to complex full-stack applications.
          </p>
        </header>

        {/* Filter buttons */}
        <nav className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { key: 'all', label: 'All Projects' },
            { key: 'developing', label: 'In Development' },
            { key: 'published', label: 'Published' }
          ].map(({ key, label }) => (
            <button
              key={key}
              type="button"
              onClick={() => setFilter(key)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg ${filter === key
                ? 'bg-primary-600 text-light-50 shadow-lg'
                : 'bg-light-100 dark:bg-dark-100 text-dark-500 dark:text-light-500 hover:bg-light-200 dark:hover:bg-dark-200 border border-light-300 dark:border-dark-300'
                }`}
            >
              {label}
            </button>
          ))}
        </nav>

        {/* Projects grid */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <article
              key={index}
              className="group relative bg-light-100 dark:bg-dark-100 rounded-3xl p-8 shadow-sm border border-light-500 dark:border-dark-500 hover:shadow-lg hover:scale-[1.02] transition-all duration-500 overflow-hidden"
            >
              {/* Status badge */}
              {project.status !== 'published' && (
                <div className="absolute top-6 right-6 z-10">
                  <span className={`${getStatusColor(project.status)} text-light-50 text-xs font-semibold py-1.5 px-3 rounded-full shadow-lg capitalize`}>
                    {project.badge || project.status}
                  </span>
                </div>
              )}

              {/* Project content */}
              <div className="relative z-10">
                <header className="mb-6">
                  <h2 className="text-xl md:text-2xl font-bold text-dark-550 dark:text-light-550 mb-3 leading-tight group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                    {project.title}
                  </h2>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags?.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-light-200 dark:bg-dark-200 text-dark-700 dark:text-light-700 text-xs font-medium py-1 px-3 rounded-full border border-light-300 dark:border-dark-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </header>

                <p className="text-dark-800 dark:text-light-800 leading-relaxed text-sm md:text-base mb-8 line-clamp-4">
                  {project.description}
                </p>

                {/* Action buttons */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.link && project.title !== "Coming Soon..." && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 bg-light-200 dark:bg-dark-200 text-dark-300 dark:text-light-300 text-sm font-semibold rounded-lg hover:bg-light-300 dark:hover:bg-dark-300 hover:scale-105 transition-all duration-300 border border-light-300 dark:border-dark-300"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m-4 4l-4 4 4 4m8-8l4 4-4 4" />
                      </svg>
                      View Code
                    </a>
                  )}
                  {project.live && project.title !== "Coming Soon..." && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 bg-primary-600 text-light-50 text-sm font-semibold rounded-lg hover:bg-primary-700 hover:scale-105 transition-all duration-300 shadow-md"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>

                {/* Media showcase */}
                {(project.video && !errorMedia[`${index}-video`]) && (
                  <figure className="relative overflow-hidden rounded-xl bg-light-200 dark:bg-dark-200">
                    {loadingMedia[`${index}-video`] && (
                      <div className="absolute inset-0 flex items-center justify-center bg-light-300 dark:bg-dark-300 rounded-xl z-10">
                        <div className="flex items-center gap-3">
                          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary-600" />
                          <span className="text-dark-700 dark:text-light-700 text-sm font-medium">Loading...</span>
                        </div>
                      </div>
                    )}
                    <video
                      controls
                      className="w-full h-48 object-cover rounded-xl shadow-inner group-hover:scale-105 transition-transform duration-500"
                      preload="metadata"
                      onLoadStart={() => handleMediaLoadStart(index, 'video')}
                      onLoadedData={() => handleMediaLoad(index, 'video')}
                      onError={() => handleMediaError(index, 'video')}
                    >
                      <source src={project.video} type="video/mp4" />
                      <p className="text-dark-700 dark:text-light-700 text-sm p-4">
                        Your browser does not support the video tag.
                      </p>
                    </video>
                  </figure>
                )}
              </div>

              {/* Hover overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-primary-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl" />
            </article>
          ))}
        </section>

        {/* Call to action */}
        <footer className="text-center">
          <div className="bg-light-100 dark:bg-dark-100 rounded-3xl p-8 md:p-12 shadow-sm border border-light-300 dark:border-dark-300">
            <h2 className="text-2xl md:text-3xl font-bold text-dark-550 dark:text-light-550 mb-4">
              Interested in collaborating?
            </h2>
            <p className="text-dark-700 dark:text-light-700 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              If you're looking for a passionate developer to collaborate with, I'd love to hear from you.
            </p>
            <a
              href="mailto:soumyodeepdey2003@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-light-50 font-semibold rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Let's Connect</span>
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}

export default Projects;