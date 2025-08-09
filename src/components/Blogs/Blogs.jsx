/* Blogs.jsx – Pure black dark mode + correct contrast colors */

import { useState } from 'react';

const myBlogs = [
  {
    title: "BeautyMatch: A Privacy-First Chrome Extension for Skincare",
    description: "Smart skincare verdicts on Amazon, Nykaa, and Sephora with zero tracking.",
    link: "https://dev.to/soumyodeep_dey_c6cb5e8c97/beautymatch-smart-skin-compatibility-for-beauty-products-2fbg",
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
    <div className="min-h-screen bg-light-50 dark:bg-dark-50 relative overflow-hidden">
      {/* Decorative background blobs */}
      {[
        'top-10 right-10 animate-blob',
        'top-32 left-10 animate-blob animation-delay-2000',
        'bottom-20 right-20 animate-blob animation-delay-4000'
      ].map((pos, i) => (
        <div
          key={i}
          className={`absolute w-72 h-72 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-20 g-gradient-to-br from-light-300 to-light-200 dark:from-dark-300 dark:to-dark-200 ${pos}`}
        />
      ))}

      {/* Main content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main heading */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-light-900 via-light-700 to-light-500 
                         dark:from-dark-950 dark:via-dark-800 dark:to-dark-600 bg-clip-text text-transparent mb-4 animate-fadeInLeft pb-2">
            Blogs & Articles
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-dark-900 via-dark-700 to-dark-500 dark:from-light-50 dark:via-light-300 dark:to-light-400 mx-auto mt-4 rounded-full" />
          <p className="text-lg text-light-700 dark:text-dark-800 max-w-2xl mx-auto pt-4">
            Discover my latest thoughts on web development, technology trends, and programming insights.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Currently Reading Section */}
          <div className="lg:col-span-1">
            <div className="bg-light-100 dark:bg-dark-100/90 backdrop-blur-md rounded-2xl p-8 shadow-md border border-light-300 dark:border-dark-300 hover:shadow-lg transition">
              <h2 className="text-2xl font-bold text-light-900 dark:text-dark-950 mb-6">
                Currently Reading
              </h2>
              <div className="space-y-6">
                {readingBlogs.map((blog, index) => (
                  <div
                    key={index}
                    className="group relative bg-light-50 dark:bg-dark-50 rounded-xl p-4 
                               hover:scale-[1.02] hover:shadow-lg transition-all duration-300 
                               border border-light-300 dark:border-dark-300 
                               hover:border-primary-300 dark:hover:border-primary-400"
                  >
                    <h3 className="text-sm font-semibold text-light-900 dark:text-dark-950 mb-2 line-clamp-2 group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors">
                      {blog.title}
                    </h3>
                    <p className="text-xs text-light-600 dark:text-dark-700 mb-2">
                      By {blog.author}
                    </p>
                    <p className="text-xs text-light-500 dark:text-dark-700 mb-3">
                      {blog.date}
                    </p>
                    <a
                      href={blog.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-primary-600 dark:text-primary-300 hover:underline"
                    >
                      Read Article →
                    </a>

                    {/* Hover gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-light-200/30 to-light-300/30 dark:from-dark-200/30 dark:to-dark-300/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* My Blog Posts Section */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-light-900 dark:text-dark-950 mb-8">
              My Blog Posts
            </h2>
            <div className="grid gap-8">
              {myBlogs.map((blog, index) => (
                <article
                  key={index}
                  className="group relative bg-light-100 dark:bg-dark-100/90 backdrop-blur-md rounded-2xl overflow-hidden shadow-md hover:shadow-xl 
                             transition-all duration-300 border border-light-300 dark:border-dark-300 
                             hover:border-primary-300 dark:hover:border-primary-400 hover:scale-[1.02]"
                >
                  <div className="md:flex">
                    {/* Blog image */}
                    {blog.image && !errorImages[index] && (
                      <div className="md:w-1/3 relative overflow-hidden">
                        {loadingImages[index] && (
                          <div className="absolute inset-0 bg-light-300 dark:bg-dark-300 animate-pulse rounded-tl-2xl md:rounded-bl-2xl md:rounded-tr-none rounded-tr-2xl" />
                        )}
                        <img
                          src={blog.image}
                          alt={blog.title}
                          className="w-full h-48 md:h-full object-cover rounded-tl-2xl md:rounded-bl-2xl md:rounded-tr-none rounded-tr-2xl 
                                     transition-transform duration-500 group-hover:scale-105"
                          onLoadStart={() => handleImageLoadStart(index)}
                          onLoad={() => handleImageLoad(index)}
                          onError={() => handleImageError(index)}
                        />
                      </div>
                    )}

                    {/* Blog content */}
                    <div className="md:w-2/3 p-8">
                      <h3 className="text-xl font-bold text-light-900 dark:text-dark-950 mb-4 group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors">
                        {blog.title}
                      </h3>
                      <p className="text-light-700 dark:text-dark-800 mb-6 leading-relaxed">
                        {blog.description}
                      </p>
                      {blog.link && (
                        <a
                          href={blog.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-500 
                                     text-light-50 rounded-lg dark:bg-primary-400 dark:hover:bg-primary-300 
                                     dark:text-dark-900 transition-colors font-medium"
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
          <p className="text-light-600 dark:text-dark-700">
            More articles coming soon! Follow me on social media for updates.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
