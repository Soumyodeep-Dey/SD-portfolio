const myBlogs = [
  {
    title: "A Beginners Guide to LinkedIn",
    description: "Effective Strategies for Expanding Your LinkedIn Network (most useful for Beginners)",
    link: "https://hashnode.com/post/cm02l0eje000408mhbmv61h6f",
    image: "/Images/LinkedIn Blog.png",
    date: "March 15, 2024",
    readTime: "5 min read"
  },
  {
    title: "Step-by-Step Guide to Creating a ToDo App with Complete CRUD Functionality",
    description: "Building a ToDo App with HTML, CSS, JavaScript, and Local Storage",
    link: "https://hashnode.com/post/cmas1h2tg000509lbe8flaetj",
    image: "/Images/ToDo App Blog.png",
    date: "March 10, 2024",
    readTime: "8 min read"
  },
];

const readingBlogs = [
  {
    title: "Don't Let Your Best Ideas Die in Silence",
    author: "Arpit Bhayani",
    link: "https://arpitbhayani.me/blogs/dont-let-your-best-ideas-die-in-silenc",
    date: "June 5, 2025"
  },
  {
    title: "I Built an MCP Server for DevTo (100% Open Source)🎉",
    author: "Arindam Majumdar",
    link: "https://dev.to/arindam_1729/i-built-an-mcp-server-for-devto-100-open-source-4f6n",
    date: "June 3, 2025"
  }
];

function Blogs() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 via-indigo-50 to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
            BLOGS
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Sharing knowledge and learning from others in the tech community
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Blogs I'm Reading Section */}
          <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
                Currently Reading
              </h2>
              <div className="h-1 flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"></div>
            </div>
            <div className="space-y-6">
              {readingBlogs.map((blog, index) => (
                <div
                  key={index}
                  className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-4 py-1 text-sm font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-900/30 rounded-full">
                      {blog.category}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {blog.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                    {blog.title}
                  </h3>
                  <p className="text-indigo-600 dark:text-indigo-400 mb-3">
                    By {blog.author}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                    {blog.description}
                  </p>
                  <a
                    href={blog.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Read Article
                    <svg
                      className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
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
                </div>
              ))}
            </div>
          </div>

          {/* My Blog Posts Section */}
          <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
                My Writings
              </h2>
              <div className="h-1 flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"></div>
            </div>
            <div className="space-y-6">
              {myBlogs.map((blog, index) => (
                <div
                  key={index}
                  className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
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
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {blog.date}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {blog.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                      {blog.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                      {blog.description}
                    </p>
                    {blog.link && (
                      <a
                        href={blog.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                      >
                        Read More
                        <svg
                          className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
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
        </div>
      </div>
    </section>
  );
}

export default Blogs;
