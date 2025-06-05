const myBlogs = [
  {
    title: "A Beginners Guide to LinkedIn",
    description: "Effective Strategies for Expanding Your LinkedIn Network (most useful for Beginners)",
    link: "https://hashnode.com/post/cm02l0eje000408mhbmv61h6f",
    image: "/Images/LinkedIn Blog.png",
  },
  {
    title: "Step-by-Step Guide to Creating a ToDo App with Complete CRUD Functionality",
    description: "Building a ToDo App with HTML, CSS, JavaScript, and Local Storage",
    link: "https://hashnode.com/post/cmas1h2tg000509lbe8flaetj",
    image: "/Images/ToDo App Blog.png",  
  },
];

const readingBlogs = [
  {
    title: "The Future of Web Development",
    author: "John Doe",
    description: "Exploring upcoming trends and technologies in web development",
    link: "https://example.com/blog1",
  },
  {
    title: "Mastering React Hooks",
    author: "Jane Smith",
    description: "A comprehensive guide to React Hooks and their best practices",
    link: "https://example.com/blog2",
  },
  {
    title: "Mastering React Hooks",
    author: "Jane Smith",
    description: "A comprehensive guide to React Hooks and their best practices",
    link: "https://example.com/blog2",
  }
  // Add more blogs you're reading
];

function Blogs() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-100 via-indigo-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-6xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
          BLOGS
        </h1>

        {/* Blogs I'm Reading Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold mb-8 text-gray-800 dark:text-gray-200 text-center">
            Currently Reading
          </h2>
          <div className="grid gap-6 max-w-4xl mx-auto">
            {readingBlogs.map((blog, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                      {blog.title}
                    </h3>
                    <p className="text-indigo-600 dark:text-indigo-400 mb-3">
                      By {blog.author}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {blog.description}
                    </p>
                  </div>
                  <a
                    href={blog.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors duration-300"
                  >
                    Read Article
                    <svg
                      className="w-4 h-4 ml-2"
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
              </div>
            ))}
          </div>
        </div>

        {/* My Blog Posts Section */}
        <div>
          <h2 className="text-4xl font-bold mb-8 text-gray-800 dark:text-gray-200 text-center">
            My Writings
          </h2>
          <div className="grid gap-8 max-w-4xl mx-auto">
            {myBlogs.map((blog, index) => (
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
                  <h3 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                    {blog.title}
                  </h3>
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
      </div>
    </section>
  );
}

export default Blogs;
