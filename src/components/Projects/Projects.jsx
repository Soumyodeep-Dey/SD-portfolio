function Projects() {
  const projectList = [
    {
      title: "Watchly",
      description: "Watchly is an e-commerce platform specializing in wristwatches. It provides a seamless shopping experience for users with advanced features such as search, sorting, filtering, infinite scroll, and a sophisticated recommendation system (developing).",
      link: "https://github.com/Soumyodeep-Dey/Watchly",
      live: "https://watchly-frontend.onrender.com/",
      image: "", // Replace with actual image path or remove if unnecessary
      video: "/Videos/WatchLy.mp4", // Replace with actual video path
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

  return (
    <section id="projects" className="bg-gradient-to-b from-gray-100 via-gray-200 to-gray-100 dark:from-gray-800 dark:via-gray-700 dark:to-gray-900 py-16 min-h-screen">
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold text-center mb-12 text-indigo-700 dark:text-indigo-400 animate-fadeInLeft">PROJECTS</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projectList.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
              <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-200">{project.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-4 mb-4">
                {/* Project Code Link */}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-indigo-600 text-white font-medium shadow hover:bg-indigo-700 transition-all duration-300 dark:bg-indigo-500 dark:hover:bg-indigo-600"
                  >
                    View Code
                  </a>
                )}
                {/* Project Live Link */}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-green-600 text-white font-medium shadow hover:bg-green-700 transition-all duration-300 dark:bg-green-500 dark:hover:bg-green-600"
                  >
                    View Project
                  </a>
                )}
              </div>

              {/* Project Media */}
              {project.image && (
                <img
                  src={project.image}
                  alt={`${project.title} Screenshot`}
                  className="rounded-lg shadow-md mb-4 w-full object-cover"
                />
              )}
              {project.video && (
                <video
                  src={project.video}
                  controls
                  className="rounded-lg shadow-md mb-4 w-full object-cover"
                  preload="metadata"
                >
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          ))}
        </div>

        {/* Footnote */}
        <footer className="text-center text-gray-600 dark:text-gray-400 mt-12">
          <p>*All the projects are under development phase...new features will be added and updated.*</p>
        </footer>
      </div>
    </section>
  );
}

export default Projects;
