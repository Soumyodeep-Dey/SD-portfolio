/* Blogs.jsx – UI/UX-refined, info unchanged */
import { useState } from 'react';

const myBlogs = [
  
  {
    title: "BeautyMatch: A Privacy‑First Chrome Extension for Skincare",
    description: "Smart skincare verdicts on Amazon, Nykaa, and Sephora with zero tracking.",
    link: "https://dev.to/soumyodeepdey/beautymatch-a-privacyfirst-chrome-extension-for-smarter-skincare-1b45", // update with your actual URL
    image: "/Images/BeautyMatch Blog.png", // make sure this image is in your public/Images folder
  },
 
  {
    title: "Step-by-Step Guide to Creating a ToDo App with Complete CRUD Functionality",
    description: "Building a ToDo App with HTML, CSS, JavaScript, and Local Storage",
    link: "https://hashnode.com/post/cmas1h2tg000509lbe8flaetj",
    image: "/Images/ToDo App Blog.png",
  },

  {
    title: "A Beginners Guide to LinkedIn",
    description: "Effective Strategies for Expanding Your LinkedIn Network (most useful for Beginners)",
    link: "https://hashnode.com/post/cm02l0eje000408mhbmv61h6f",
    image: "/Images/LinkedIn Blog.png",
  },
  
];

const readingBlogs = [
  {
    title: "Everything I know about good system design",
    author: "sean goedecke",
    link: "https://www.seangoedecke.com/good-system-design/?ref=dailydev",
    date: "June 30, 2025"
  },
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
  },
];

function Blogs() {
  const [loadingImages, setLoadingImages] = useState({});
  const [errorImages, setErrorImages] = useState({});

  const handleImageLoad = (blogIndex) => {
    setLoadingImages(prev => ({ ...prev, [blogIndex]: false }));
  };

  const handleImageError = (blogIndex) => {
    setErrorImages(prev => ({ ...prev, [blogIndex]: true }));
    setLoadingImages(prev => ({ ...prev, [blogIndex]: false }));
  };

  const handleImageLoadStart = (blogIndex) => {
    setLoadingImages(prev => ({ ...prev, [blogIndex]: true }));
  };

  return (
    <main
      id="blogs"
      className="bg-gradient-to-b from-gray-100 via-gray-200 to-gray-100 dark:from-gray-800 dark:via-gray-700 dark:to-gray-900 py-16 min-h-screen"
    >
      {/* ===== Decorative background elements ===== */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[
          'top-10 right-10 animate-blob',
          'top-32 left-10 animate-blob animation-delay-2000',
          'bottom-20 right-20 animate-blob animation-delay-4000'
        ].map((pos, i) => (
          <div
            key={i}
            aria-hidden="true"
            className={`w-72 h-72 rounded-full filter blur-3xl absolute bg-purple-500/10 dark:bg-purple-500/5 ${pos}`}
          />
        ))}
      </div>
      {/* ===== Main content container ===== */}  

      <div className="relative container mx-auto px-4 md:px-6 lg:px-8">
        {/* ===== Main heading ===== */}
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 animate-fadeInUp">
            BLOGS
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto leading-relaxed">
            Sharing knowledge and learning from others in the tech community
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto mt-6 rounded-full" />
        </header>

        {/* ===== Main Content Grid ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">

          {/* ===== Currently Reading Section ===== */}
          <section
            className="space-y-8"
            aria-labelledby="reading-heading"
          >
            <header className="text-center lg:text-left">
              <h2
                id="reading-heading"
                className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6"
              >
                Currently Reading
              </h2>
            </header>

            <div className="space-y-6">
              {readingBlogs.map((blog, index) => (
                <article
                  key={index}
                  className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:border-purple-300 dark:hover:border-purple-600 transition-all duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-[1.02]"
                >
                  <header className="mb-4">
                    <time
                      dateTime={blog.date}
                      className="text-sm text-gray-500 dark:text-gray-400 font-medium"
                    >
                      {blog.date}
                    </time>
                    <p className="text-sm text-indigo-600 dark:text-indigo-400 font-medium mt-1">
                      by {blog.author}
                    </p>
                  </header>

                  <div className="mb-6">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300 leading-tight mb-4">
                      {blog.title}
                    </h3>
                  </div>

                  <nav aria-label={`Read article: ${blog.title}`}>
                    <a
                      href={blog.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-sm font-medium rounded-lg hover:from-purple-600 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 group"
                      aria-label={`Read article: ${blog.title} by ${blog.author}`}
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      Read Article
                      <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </nav>

                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl" />
                </article>
              ))}
            </div>
          </section>

          {/* ===== My Blog Posts Section ===== */}
          <section
            className="space-y-8"
            aria-labelledby="writings-heading"
          >
            <header className="text-center lg:text-left">
              <h2
                id="writings-heading"
                className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6"
              >
                My Writings
              </h2>
            </header>

            <div className="space-y-8">
              {myBlogs.map((blog, index) => (
                <article
                  key={index}
                  className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:border-indigo-300 dark:hover:border-indigo-600 transition-all duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-[1.02] overflow-hidden"
                >
                  {/* Blog image */}
                  {blog.image && !errorImages[index] && (
                    <figure className="relative overflow-hidden">
                      {loadingImages[index] && (
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-700 z-10">
                          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-500" />
                        </div>
                      )}
                      <img
                        src={blog.image}
                        alt={`Featured image for blog post: ${blog.title}`}
                        className="w-full h-48 md:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                        onLoadStart={() => handleImageLoadStart(index)}
                        onLoad={() => handleImageLoad(index)}
                        onError={() => handleImageError(index)}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </figure>
                  )}

                  {/* Blog content */}
                  <div className="p-6 md:p-8">
                    <header className="mb-4">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300 leading-tight">
                        {blog.title}
                      </h3>
                    </header>

                    <div className="mb-6">
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base">
                        {blog.description}
                      </p>
                    </div>

                    {blog.link && (
                      <nav aria-label={`Read blog post: ${blog.title}`}>
                        <a
                          href={blog.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-medium rounded-lg hover:from-indigo-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 group"
                          aria-label={`Read full blog post: ${blog.title}`}
                        >
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                          </svg>
                          Read More
                          <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </nav>
                    )}
                  </div>

                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl" />
                </article>
              ))}
            </div>
          </section>
        </div>

        {/* ===== Footnote ===== */}
        <footer className="text-center mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Writing and reading are essential parts of my learning journey. Each article shared here represents
            knowledge gained, lessons learned, and insights discovered in the world of technology and development.
          </p>
        </footer>
      </div>
    </main>
  );
}

export default Blogs;