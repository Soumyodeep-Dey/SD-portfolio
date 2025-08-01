/* Projects.jsx – UI/UX-refined, info unchanged */
import { useState } from 'react';

const projectList = [
  {
    title: "Watchly (Developing)",
    description: "Watchly is an e-commerce platform specializing in wristwatches. It provides a seamless shopping experience for users with advanced features such as search, sorting, filtering, infinite scroll, and a sophisticated recommendation system (developing).",
    link: "https://github.com/Soumyodeep-Dey/Watchly",
    live: "https://watchly-frontend.onrender.com/",
    image: "", // Replace with actual image path or remove if unnecessary
    video: "/Videos/WatchLy.mp4", // Replace with actual video path
  },
  {
    title: "BeautyMatch (Will be Published on Chrome Store!)",
    description:
      "BeautyMatch is a privacy-first Chrome extension that shows whether a beauty product is suitable for your skin tone, type, and allergies while browsing Nykaa, Amazon.in, or Sephora. It works 100% locally, with no tracking or data sharing. Built with React, Tailwind, and CRXJS.",
    link: "https://github.com/Soumyodeep-Dey/BeautyMatch",
    live: "https://chromewebstore.google.com/detail/beautymatch/kongfkfcoganehdeiiaffpmmedmkbjho", // Actual link to the Chrome Store
    image: "", // You can add a screenshot path here if available
    video: "/Videos/BeautyMatch.mp4" // Replace with your demo video path if any
  },
  {
    title: "Prime Minister Special Scholarship Scheme",
    description: "Developed as part of Smart India Hackathon 2024, this project aims to create a paperless scholarship disbursement system for PMSSS. My primary role in this group project was designing and implementing the frontend using React and Tailwind CSS.",
    link: "https://github.com/Soumyodeep-Dey/Scholarship",
    live: "https://pmsss-scholarship.vercel.app/",
    image: "", // Replace with actual image path or remove if unnecessary
    video: "/Videos/PMSSS.mp4", // Replace with actual video path if available
  },
  {
    title: "AI Job Recommender",
    description: "A smart job recommendation system built using React and the Google AI API. It allows users to input their profile and preferences, and then generates personalized job suggestions powered by AI. It includes category-based filtering and role-specific insights.",
    link: "https://github.com/Soumyodeep-Dey/Ai_Job_Recommendation_System",
    live: "https://ai-job-recommendation-system-eight.vercel.app/",
    image: "", // Add image path if available
    video: "/Videos/AIJobRecommender.mp4", // Replace with actual video path
  },
  {
    title: "Next.js Authentication System",
    description: "A production-ready authentication app built with Next.js, TypeScript, MongoDB, and Tailwind CSS. It includes features like JWT-based auth, protected routes, and a clean, responsive UI. Built as a hands-on project after learning advanced authentication patterns.",
    link: "https://github.com/Soumyodeep-Dey/auth_next_js",
    live: "https://auth-next-js-zeta.vercel.app/login",
    image: "", // Add image path if available
    video: "/Videos/NextAuthApp.mp4", // Replace with actual video path
  },
  {
    title: "Movie App Demo (v0.1) (For better viewing use live and watch the video on LinkedIn)",
    description: "Built using React Native, NativeWind, TMDB API, and Appwrite (BAAS), this is my first complete mobile app demo. The v0.1 version showcases the core features and design, recorded to document progress and learning. Special thanks to JavaScript Mastery for guidance. Key lessons: Building > planning, small wins compound, and just start—even if it's messy.",
    link: "https://github.com/Soumyodeep-Dey/Mobile_Movie_App", // Add GitHub repo link if available
    live: "https://www.linkedin.com/posts/soumyodeep-dey-s-d-2a125b1a7_100daysofcode-buildinpublic-appdevelopment-activity-7352362240777322503-VppU?utm_source=share&utm_medium=member_desktop&rcm=ACoAADBE6NkB_MbTR3A7lSe3SSF8osCWqxPsViA", // Add Expo or APK demo link if available
    image: "", // Add a screenshot or poster path
    video: "/Videos/MovieAppDemo.mp4" // Replace with actual video path if needed
  },
  {
    title: "MemEconomy",
    description: "MemEconomy is a Hackathon project designed for BRAINROT Hackathon to create an engaging and functional platform. I was responsible for developing the frontend, ensuring a seamless and responsive user interface. For login use email: sdey@gmail.com || password: 1234",
    link: "https://github.com/Soumyodeep-Dey/memeconomy",
    live: "https://meme-economy-black.vercel.app/",
    image: "", // Replace with actual image path or remove if unnecessary
    video: "/Videos/memeconomy.mp4", // Replace with actual video path
  },
  {
    title: "TO DO App",
    description: "A TODO app built with HTML, CSS, and JavaScript. It offers a sleek user interface with inline editing capabilities, and local storage persistence. Users can add, edit, and delete tasks seamlessly. The app ensures tasks are preserved across page refreshes using local storage.",
    link: "https://github.com/Soumyodeep-Dey/TO-DO-LIST",
    live: "https://soumyodeep-dey.github.io/TO-DO-LIST/",
    image: "", // Replace with actual image path or remove if unnecessary
    video: "/Videos/ToDoApp.mp4", // Replace with actual video path
  },
  {
    title: "Coming Soon...",
    description: "This project is under development. Stay tuned for more updates!",
    link: "https://github.com/Soumyodeep-Dey", // No link for this project
    live: "https://github.com/Soumyodeep-Dey", // No live link for this project
    image: "", // No image needed for "Coming Soon"
    video: "/Videos/XYZ.mp4", // No video for "Coming Soon"
  },
];

function Projects() {
  const [loadingMedia, setLoadingMedia] = useState({});
  const [errorMedia, setErrorMedia] = useState({});

  const handleMediaLoad = (projectIndex, mediaType) => {
    setLoadingMedia(prev => ({ ...prev, [`${projectIndex}-${mediaType}`]: false }));
  };

  const handleMediaError = (projectIndex, mediaType) => {
    setErrorMedia(prev => ({ ...prev, [`${projectIndex}-${mediaType}`]: true }));
    setLoadingMedia(prev => ({ ...prev, [`${projectIndex}-${mediaType}`]: false }));
  };

  const handleMediaLoadStart = (projectIndex, mediaType) => {
    setLoadingMedia(prev => ({ ...prev, [`${projectIndex}-${mediaType}`]: true }));
  };

  return (
    <main
      id="projects"
      className="bg-gradient-to-b from-gray-100 via-gray-200 to-gray-100 dark:from-gray-800 dark:via-gray-700 dark:to-gray-900 py-16 min-h-screen"
    >
      {/* ===== Decorative background elements ===== */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[
          'top-10 left-10 animate-blob',
          'top-20 right-20 animate-blob animation-delay-2000',
          'bottom-20 left-20 animate-blob animation-delay-4000'
        ].map((pos, i) => (
          <div
            key={i}
            aria-hidden="true"
            className={`w-72 h-72 rounded-full filter blur-3xl absolute bg-indigo-500/10 dark:bg-indigo-500/5 ${pos}`}
          />
        ))}
      </div>

      <div className="relative container mx-auto px-4 md:px-6 lg:px-8">
        {/* ===== Main heading ===== */}
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 animate-fadeInUp">
            PROJECTS
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto mt-4 rounded-full" />
        </header>

        {/* ===== Projects grid ===== */}
        <section
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
          aria-label="Projects showcase"
        >
          {projectList.map((project, index) => (
            <article
              key={index}
              className="group relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:border-indigo-300 dark:hover:border-indigo-600 transition-all duration-500 ease-in-out transform hover:-translate-y-2 hover:scale-[1.02] overflow-hidden"
            >
              {/* Project content */}
              <div className="p-6 md:p-8">
                <header className="mb-4">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300 leading-tight">
                    {project.title}
                  </h2>
                </header>

                <div className="mb-6">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base">
                    {project.description}
                  </p>
                </div>

                {/* Project links */}
                <nav className="flex flex-wrap gap-3 mb-6" aria-label={`Links for ${project.title}`}>
                  {project.link && project.title !== "Coming Soon..." && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-medium rounded-lg hover:from-indigo-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
                      aria-label={`View source code for ${project.title}`}
                    >
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      View Code
                    </a>
                  )}

                  {project.live && project.title !== "Coming Soon..." && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-pink-500 to-rose-600 text-white text-sm font-medium rounded-lg hover:from-pink-600 hover:to-rose-700 transform hover:scale-105 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2"
                      aria-label={`View live demo of ${project.title}`}
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      View Project
                    </a>
                  )}
                </nav>

                {/* Project media */}
                {(project.image || project.video) && project.title !== "Coming Soon..." && (
                  <div className="space-y-4">
                    {project.image && (
                      <figure className="relative overflow-hidden rounded-xl">
                        {loadingMedia[`${index}-image`] && (
                          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-xl">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-500" />
                          </div>
                        )}
                        <img
                          src={project.image}
                          alt={`Screenshot of ${project.title} project`}
                          className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                          onLoadStart={() => handleMediaLoadStart(index, 'image')}
                          onLoad={() => handleMediaLoad(index, 'image')}
                          onError={() => handleMediaError(index, 'image')}
                        />
                      </figure>
                    )}

                    {project.video && !errorMedia[`${index}-video`] && (
                      <figure className="relative overflow-hidden rounded-xl">
                        {loadingMedia[`${index}-video`] && (
                          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-xl z-10">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-500" />
                          </div>
                        )}
                        <video
                          controls
                          className="w-full h-48 object-cover rounded-xl shadow-md"
                          preload="metadata"
                          onLoadStart={() => handleMediaLoadStart(index, 'video')}
                          onLoadedData={() => handleMediaLoad(index, 'video')}
                          onError={() => handleMediaError(index, 'video')}
                          aria-label={`Demo video for ${project.title}`}
                        >
                          <source src={project.video} type="video/mp4" />
                          <p className="text-gray-600 dark:text-gray-400 text-sm p-4">
                            Your browser does not support the video tag.
                          </p>
                        </video>
                      </figure>
                    )}
                  </div>
                )}
              </div>

              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl" />
            </article>
          ))}
        </section>

        {/* ===== Footnote ===== */}
        <footer className="text-center mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Each project represents a step in my learning journey. From simple todos to complex full-stack applications,
            every build has taught me something valuable about development, design, and problem-solving.
          </p>
        </footer>
      </div>
    </main>
  );
}

export default Projects;