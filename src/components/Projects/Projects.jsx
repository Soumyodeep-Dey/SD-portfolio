/* Projects.jsx – Upgraded to match Blogs theme and palette */
import { useState } from 'react';

const projectList = [
  {
    title: "Watchly (Developing)",
    description: "Watchly is an e-commerce platform specializing in wristwatches. It provides a seamless shopping experience for users with advanced features such as search, sorting, filtering, infinite scroll, and a sophisticated recommendation system (developing).",
    link: "https://github.com/Soumyodeep-Dey/Watchly",
    live: "https://watchly-frontend.onrender.com/",
    video: "/Videos/WatchLy.mp4",
  },
  {
    title: "BeautyMatch (Will be Published on Chrome Store!)",
    description:
      "BeautyMatch is a privacy-first Chrome extension that shows whether a beauty product is suitable for your skin tone, type, and allergies while browsing Nykaa, Amazon.in, or Sephora. It works 100% locally, with no tracking or data sharing. Built with React, Tailwind, and CRXJS.",
    link: "https://github.com/Soumyodeep-Dey/BeautyMatch",
    live: "https://chromewebstore.google.com/detail/beautymatch/kongfkfcoganehdeiiaffpmmedmkbjho",
    video: "/Videos/BeautyMatch.mp4"
  },
  {
    title: "Prime Minister Special Scholarship Scheme",
    description: "Developed as part of Smart India Hackathon 2024, this project aims to create a paperless scholarship disbursement system for PMSSS. My primary role in this group project was designing and implementing the frontend using React and Tailwind CSS.",
    link: "https://github.com/Soumyodeep-Dey/Scholarship",
    live: "https://pmsss-scholarship.vercel.app/",
    video: "/Videos/PMSSS.mp4",
  },
  {
    title: "AI Job Recommender",
    description: "A smart job recommendation system built using React and the Google AI API. It allows users to input their profile and preferences, and then generates personalized job suggestions powered by AI. It includes category-based filtering and role-specific insights.",
    link: "https://github.com/Soumyodeep-Dey/Ai_Job_Recommendation_System",
    live: "https://ai-job-recommendation-system-eight.vercel.app/",
    video: "/Videos/AIJobRecommender.mp4",
  },
  {
    title: "Next.js Authentication System",
    description: "A production-ready authentication app built with Next.js, TypeScript, MongoDB, and Tailwind CSS. It includes features like JWT-based auth, protected routes, and a clean, responsive UI. Built as a hands-on project after learning advanced authentication patterns.",
    link: "https://github.com/Soumyodeep-Dey/auth_next_js",
    live: "https://auth-next-js-zeta.vercel.app/login",
    video: "/Videos/NextAuthApp.mp4",
  },
  {
    title: "Movie App Demo (v0.1)",
    description: "Built using React Native, NativeWind, TMDB API, and Appwrite (BAAS), this is my first complete mobile app demo. The v0.1 version showcases the core features and design. Special thanks to JavaScript Mastery for guidance.",
    link: "https://github.com/Soumyodeep-Dey/Mobile_Movie_App",
    live: "https://www.linkedin.com/posts/soumyodeep-dey-s-d-2a125b1a7_100daysofcode-buildinpublic-appdevelopment-activity-7352362240777322503-VppU",
    video: "/Videos/MovieAppDemo.mp4"
  },
  {
    title: "MemEconomy",
    description: "MemEconomy is a Hackathon project designed for BRAINROT Hackathon. I was responsible for developing the frontend, ensuring a seamless and responsive UI.",
    link: "https://github.com/Soumyodeep-Dey/memeconomy",
    live: "https://meme-economy-black.vercel.app/",
    video: "/Videos/memeconomy.mp4",
  },
  {
    title: "TO DO App",
    description: "A TODO app built with HTML, CSS, and JavaScript. Users can add, edit, and delete tasks with local storage persistence.",
    link: "https://github.com/Soumyodeep-Dey/TO-DO-LIST",
    live: "https://soumyodeep-dey.github.io/TO-DO-LIST/",
    video: "/Videos/ToDoApp.mp4",
  },
  {
    title: "Coming Soon...",
    description: "This project is under development. Stay tuned for more updates!",
    link: "https://github.com/Soumyodeep-Dey",
    live: "https://github.com/Soumyodeep-Dey",
    video: "/Videos/XYZ.mp4",
  },
];

function Projects() {
  const [loadingMedia, setLoadingMedia] = useState({});
  const [errorMedia, setErrorMedia] = useState({});

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

  return (
    <main
      id="projects"
      className="bg-light-50 dark:bg-dark-50 py-16 min-h-screen relative overflow-hidden"
    >
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[
          'top-10 left-10 animate-blob',
          'top-20 right-20 animate-blob animation-delay-2000',
          'bottom-20 left-20 animate-blob animation-delay-4000'
        ].map((pos, i) => (
          <div
            key={i}
            className={`absolute w-72 h-72 bg-light-300 dark:bg-dark-300 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-20 ${pos}`}
          />
        ))}
      </div>

      <div className="relative container mx-auto px-4 md:px-6 lg:px-8">
        {/* Main heading */}
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark-900 dark:text-light-50 animate-fadeInUp">
            Projects
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-dark-900 via-dark-700 to-dark-500 dark:from-light-50 dark:via-light-300 dark:to-light-400 mx-auto mt-4 rounded-full" />
        </header>

        {/* Projects grid */}
        <section
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
          aria-label="Projects showcase"
        >
          {projectList.map((project, index) => (
            <article
              key={index}
              className="group relative bg-light-100 dark:bg-dark-100 backdrop-blur-md rounded-2xl shadow-sm border border-light-300 dark:border-dark-300 hover:shadow-lg hover:border-dark-400 dark:hover:border-light-400 transition-all duration-500 ease-in-out transform hover:-translate-y-2 hover:scale-[1.02] overflow-hidden"
            >
              {/* Content */}
              <div className="p-6 md:p-8">
                <header className="mb-4">
                  <h2 className="text-xl md:text-2xl font-bold text-dark-900 dark:text-light-50 group-hover:text-dark-700 dark:group-hover:text-light-300 transition-colors duration-300 leading-tight">
                    {project.title}
                  </h2>
                </header>

                <p className="text-dark-700 dark:text-light-300 leading-relaxed text-sm md:text-base mb-6">
                  {project.description}
                </p>

                {/* Links */}
                <nav className="flex flex-wrap gap-3 mb-6">
                  {project.link && project.title !== "Coming Soon..." && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-dark-900 dark:bg-light-50 text-light-50 dark:text-dark-900 text-sm font-medium rounded-lg hover:bg-dark-700 dark:hover:bg-light-200 transform hover:scale-105 transition-all duration-300"
                    >
                      View Code
                    </a>
                  )}
                  {project.live && project.title !== "Coming Soon..." && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-dark-900 to-dark-700 dark:from-light-50 dark:to-light-300 text-light-50 dark:text-dark-900 text-sm font-medium rounded-lg hover:from-dark-700 hover:to-dark-500 dark:hover:from-light-200 dark:hover:to-light-400 transform hover:scale-105 transition-all duration-300"
                    >
                      View Project
                    </a>
                  )}
                </nav>

                {/* Media */}
                {(project.video && !errorMedia[`${index}-video`]) && (
                  <figure className="relative overflow-hidden rounded-xl">
                    {loadingMedia[`${index}-video`] && (
                      <div className="absolute inset-0 flex items-center justify-center bg-light-300 dark:bg-dark-300 rounded-xl z-10">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-dark-900 dark:border-light-50" />
                      </div>
                    )}
                    <video
                      controls
                      className="w-full h-48 object-cover rounded-xl shadow-md"
                      preload="metadata"
                      onLoadStart={() => handleMediaLoadStart(index, 'video')}
                      onLoadedData={() => handleMediaLoad(index, 'video')}
                      onError={() => handleMediaError(index, 'video')}
                    >
                      <source src={project.video} type="video/mp4" />
                      <p className="text-dark-700 dark:text-light-300 text-sm p-4">
                        Your browser does not support the video tag.
                      </p>
                    </video>
                  </figure>
                )}
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-light-200/20 to-light-300/20 dark:from-dark-200/20 dark:to-dark-300/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </article>
          ))}
        </section>

        {/* Footnote */}
        <footer className="text-center mt-16 pt-8 border-t border-light-300 dark:border-dark-300">
          <p className="text-dark-600 dark:text-light-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Each project represents a step in my learning journey. From simple todos to complex full-stack applications,
            every build has taught me something valuable about development, design, and problem-solving.
          </p>
        </footer>
      </div>
    </main>
  );
}

export default Projects;
