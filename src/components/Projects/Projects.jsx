
function Projects() {
  const projectList = [
    {
      title: "Watchly",
      description: "Watchly is a large-scale e-commerce platform specializing in wristwatches. It provides a seamless shopping experience for users with advanced features such as search, sorting, filtering, infinite scroll, and a sophisticated recommendation system. My contribution included designing the frontend architecture and implementing key interactive features like personalized recommendations and an AI-powered style advisor.",
      link: "https://github.com/Soumyodeep-Dey/Watchly",
      image: "", // Replace with actual image path or remove if unnecessary
      video: "/WatchlyDemo.mp4", // Replace with actual video path
    },
    {
      title: "Prime Minister Special Scholarship Scheme",
      description: "Developed as part of Smart India Hackathon 2024, this project aims to create a paperless scholarship disbursement system for PMSSS. My primary role in this group project was designing and implementing the frontend using React and Tailwind CSS.",
      link: "https://github.com/Soumyodeep-Dey/Scholarship",
      image: "", // Replace with actual image path or remove if unnecessary
      video: "/PMSSS.mp4", // Replace with actual video path if available
    },
    {
      title: "MemEconomy",
      description: "MemEconomy is a Hackathon project designed for BRAINROT Hackathon to create an engaging and functional platform. I was responsible for developing the frontend, ensuring a seamless and responsive user interface.",
      link: "https://yourresearchprojectlink.com",
      image: "", // Replace with actual image path or remove if unnecessary
      video: "memeconomy.mp4", // Replace with actual video path
    },
    // Add more projects as needed
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

              {/* Project Link */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 font-semibold hover:underline mb-4 inline-block dark:text-indigo-400"
              >
                View Project
              </a>

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
      </div>
    </section>
  );
}

export default Projects;
