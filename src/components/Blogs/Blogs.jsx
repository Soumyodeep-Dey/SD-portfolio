const blogList = [
  {
    title: "A Beginners Guide to LinkedIn",
    description: "Effective Strategies for Expanding Your LinkedIn Network (most useful for Beginners)",
    link: "https://hashnode.com/edit/cm02l0eje000408mhbmv61h6f",
    image: "/Images/Add a heading.png",
  },
  {
    title: "More on the way...",
    description: "",
    link: "",
    image: "", // Replace with actual image path or remove if unnecessary
  },
  // Add more blogs as needed
];

function Blogs() {
  return (
    <section className="bg-gradient-to-br from-gray-100 via-indigo-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-6xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 animate-fadeInLeft">
          BLOGS
        </h1>
        <div className="grid gap-8 max-w-4xl mx-auto">
          {blogList.map((blog, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {blog.image && (
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={blog.image}
                    alt="Blog Thumbnail"
                    className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              )}
              <div className="p-8">
                <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                  {blog.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                  {blog.description}
                </p>
                {blog.link && (
                  <a
                    href={blog.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Read More
                    <svg
                      className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blogs;
