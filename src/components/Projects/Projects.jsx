
function Projects() {
  const projectList = [
    {
      title: "ABC Project",
      description: "A comprehensive web development project showcasing front-end and back-end skills.",
      link: "https://yourprojectlink.com",
      image: "/path/to/project1.jpg", // replace with actual image path or remove if unnecessary
      video: "/path/to/project1.mp4", // replace with actual video path if available
    },
    {
      title: "XYZ Research Project",
      description: "A data analysis project involving machine learning and research methods.",
      link: "https://yourresearchprojectlink.com",
      image: "/path/to/project2.jpg", // replace with actual image path or remove if unnecessary
      video: "/path/to/project2.mp4", // replace with actual video path
    },
    // Add more projects as needed
  ];

  return (
    <section id="projects" className= "bg-gradient-to-b from-gray-100 via-gray-200 to-gray-100 dark:from-gray-800 dark:via-gray-700 dark:to-gray-900 py-16 min-h-screen">
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
