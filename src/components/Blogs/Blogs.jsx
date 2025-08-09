/* Blogs.jsx â€“ Clean white/black theme implementation */

import { useState } from 'react';

const myBlogs = [
  {
    title: "BeautyMatch: A Privacyâ€‘First Chrome Extension for Skincare",
    description: "Smart skincare verdicts on Amazon, Nykaa, and Sephora with zero tracking.",
    link: "https://dev.to/soumyodeepdey/beautymatch-a-privacyfirst-chrome-extension-for-smarter-skincare-1b45",
    image: "/Images/BeautyMatch Blog.png",
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
    title: "Mastering Git Commit Types: A Comprehensive Example in Convention",
    author: "Tanmoy Ganguly",
    link: "https://xanmoy.hashnode.dev/mastering-git-commit-types-a-comprehensive-example-in-convention",
    date: "July 27, 2025"
  },
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
    title: "I Built an MCP Server for DevTo (100% Open Source)ðŸŽ‰",
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
    <div className="min-h-screen bg-light-50 dark:bg-dark-50 relative overflow-hidden">
      {/* Decorative background elements */}
      {[
        'top-10 right-10 animate-blob',
        'top-32 left-10 animate-blob animation-delay-2000',
        'bottom-20 right-20 animate-blob animation-delay-4000'
      ].map((pos, i) => (
        <div
          key={i}
          className={`absolute w-72 h-72 bg-light-300 dark:bg-dark-300 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-20 ${pos}`}
        />
      ))}

      {/* Main content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main heading */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-dark-900 dark:text-light-50 mb-6">
            Blogs & Articles
          </h1>
          <p className="text-lg text-dark-700 dark:text-light-300 max-w-2xl mx-auto">
            Discover my latest thoughts on web development, technology trends, and programming insights.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Currently Reading Section */}
          <div className="lg:col-span-1">
            <div className="bg-light-100 dark:bg-dark-100 rounded-2xl p-8 shadow-sm border border-light-300 dark:border-dark-300">
              <h2 className="text-2xl font-bold text-dark-900 dark:text-light-50 mb-6">
                Currently Reading
              </h2>
              <div className="space-y-6">
                {readingBlogs.map((blog, index) => (
                  <div
                    key={index}
                    className="group relative bg-light-50 dark:bg-dark-50 rounded-xl p-4 hover:shadow-md transition-all duration-300 border border-light-300 dark:border-dark-300 hover:border-dark-400 dark:hover:border-light-400"
                  >
                    <h3 className="text-sm font-semibold text-dark-900 dark:text-light-50 mb-2 line-clamp-2 group-hover:text-dark-700 dark:group-hover:text-light-300 transition-colors">
                      {blog.title}
                    </h3>
                    <p className="text-xs text-dark-600 dark:text-light-400 mb-2">
                      By {blog.author}
                    </p>
                    <p className="text-xs text-dark-500 dark:text-light-500 mb-3">
                      {blog.date}
                    </p>
                    <a
                      href={blog.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-dark-700 dark:text-light-300 hover:text-dark-900 dark:hover:text-light-50 font-medium transition-colors"
                    >
                      Read Article â†’
                    </a>

                    {/* Hover gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-light-200/50 to-light-300/50 dark:from-dark-200/50 dark:to-dark-300/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* My Blog Posts Section */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-dark-900 dark:text-light-50 mb-8">
              My Blog Posts
            </h2>
            <div className="grid gap-8">
              {myBlogs.map((blog, index) => (
                <article
                  key={index}
                  className="group relative bg-light-100 dark:bg-dark-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-light-300 dark:border-dark-300 hover:border-dark-400 dark:hover:border-light-400"
                >
                  <div className="md:flex">
                    {/* Blog image */}
                    {blog.image && !errorImages[index] && (
                      <div className="md:w-1/3 relative">
                        {loadingImages[index] && (
                          <div className="absolute inset-0 bg-light-300 dark:bg-dark-300 animate-pulse rounded-tl-2xl md:rounded-bl-2xl md:rounded-tr-none rounded-tr-2xl" />
                        )}
                        <img
                          src={blog.image}
                          alt={blog.title}
                          className="w-full h-48 md:h-full object-cover rounded-tl-2xl md:rounded-bl-2xl md:rounded-tr-none rounded-tr-2xl"
                          onLoadStart={() => handleImageLoadStart(index)}
                          onLoad={() => handleImageLoad(index)}
                          onError={() => handleImageError(index)}
                        />
                      </div>
                    )}

                    {/* Blog content */}
                    <div className="md:w-2/3 p-8">
                      <h3 className="text-xl font-bold text-dark-900 dark:text-light-50 mb-4 group-hover:text-dark-700 dark:group-hover:text-light-300 transition-colors">
                        {blog.title}
                      </h3>
                      <p className="text-dark-700 dark:text-light-300 mb-6 leading-relaxed">
                        {blog.description}
                      </p>
                      {blog.link && (
                        <a
                          href={blog.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-6 py-3 bg-dark-900 dark:bg-light-50 text-light-50 dark:text-dark-900 rounded-lg hover:bg-dark-700 dark:hover:bg-light-200 transition-colors font-medium"
                        >
                          Read More
                          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-light-200/20 to-light-300/20 dark:from-dark-200/20 dark:to-dark-300/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Footnote */}
        <div className="text-center mt-16 pt-8 border-t border-light-300 dark:border-dark-300">
          <p className="text-dark-600 dark:text-light-400">
            More articles coming soon! Follow me on social media for updates.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
