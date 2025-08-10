/* Blogs.jsx – Enhanced to match Home.jsx and Projects.jsx design patterns */
import { useState } from 'react';

const myBlogs = [
  {
    title: "BeautyMatch: A Privacy-First Chrome Extension for Skincare",
    description: "Smart skincare verdicts on Amazon, Nykaa, and Sephora with zero tracking.",
    link: "https://dev.to/soumyodeep_dey_c6cb5e8c97/beautymatch-smart-skin-compatibility-for-beauty-products-2fbg",
    image: "/Images/BeautyMatch Blog.png",
    tags: ["Chrome Extension", "Privacy", "Skincare", "React"],
    platform: "dev.to",
    readTime: "5 min read"
  },
  {
    title: "Step-by-Step Guide to Creating a ToDo App with Complete CRUD Functionality",
    description: "Building a ToDo App with HTML, CSS, JavaScript, and Local Storage",
    link: "https://hashnode.com/post/cmas1h2tg000509lbe8flaetj",
    image: "/Images/ToDo App Blog.png",
    tags: ["JavaScript", "HTML", "CSS", "CRUD"],
    platform: "hashnode",
    readTime: "8 min read"
  },
  {
    title: "A Beginners Guide to LinkedIn",
    description: "Effective Strategies for Expanding Your LinkedIn Network (most useful for Beginners)",
    link: "https://hashnode.com/post/cm02l0eje000408mhbmv61h6f",
    image: "/Images/LinkedIn Blog.png",
    tags: ["Career", "Networking", "LinkedIn", "Professional"],
    platform: "hashnode",
    readTime: "6 min read"
  },
];

const readingBlogs = [
  {
    title: "Mastering Git Commit Types: A Comprehensive Example in Convention",
    author: "Tanmoy Ganguly",
    link: "https://xanmoy.hashnode.dev/mastering-git-commit-types-a-comprehensive-example-in-convention",
    date: "July 27, 2025",
    category: "Development"
  },
  {
    title: "Everything I know about good system design",
    author: "sean goedecke",
    link: "https://www.seangoedecke.com/good-system-design/?ref=dailydev",
    date: "June 30, 2025",
    category: "Architecture"
  },
  {
    title: "Don't Let Your Best Ideas Die in Silence",
    author: "Arpit Bhayani",
    link: "https://arpitbhayani.me/blogs/dont-let-your-best-ideas-die-in-silenc",
    date: "June 5, 2025",
    category: "Career"
  },
  {
    title: "I Built an MCP Server for DevTo (100% Open Source)🎉",
    author: "Arindam Majumdar",
    link: "https://dev.to/arindam_1729/i-built-an-mcp-server-for-devto-100-open-source-4f6n",
    date: "June 3, 2025",
    category: "Open Source"
  },
];

function Blogs() {
  const [loadingImages, setLoadingImages] = useState({});
  const [errorImages, setErrorImages] = useState({});
  const [activeTab, setActiveTab] = useState('my-blogs');

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

  const getPlatformColor = (platform) => {
    switch (platform) {
      case 'dev.to': return 'bg-success-500';
      case 'hashnode': return 'bg-primary-500';
      default: return 'bg-light-600 dark:bg-dark-600';
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Development': return 'bg-primary-500';
      case 'Architecture': return 'bg-secondary-500';
      case 'Career': return 'bg-warning-500';
      case 'Open Source': return 'bg-success-500';
      default: return 'bg-light-600 dark:bg-dark-600';
    }
  };

  return (
    <main
      id="blogs"
      className="bg-light-50 dark:bg-dark-50 py-20 min-h-screen relative overflow-hidden"
    >
      {/* Subtle background elements matching Home.jsx */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-light-200 dark:bg-dark-200 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-30" />
        <div className="absolute bottom-32 left-20 w-80 h-80 bg-light-250 dark:bg-dark-250 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-20" />
        <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-light-300 dark:bg-dark-300 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-15" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Header section */}
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark-500 dark:text-light-550 animate-fadeInLeft mb-4">
            Blogs & Articles
          </h1>
          <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full" />
          <br />
          <p className="text-lg text-dark-700 dark:text-light-700 max-w-2xl mx-auto leading-relaxed">
            Discover my latest thoughts on web development, technology trends, and programming insights.
          </p>
        </header>

        {/* Navigation tabs */}
        <nav className="flex justify-center gap-8 mb-12">
          {[
            { key: 'my-blogs', label: 'My Articles' },
            { key: 'reading-list', label: 'Reading List' }
          ].map(({ key, label }) => (
            <button
              key={key}
              type="button"
              onClick={() => setActiveTab(key)}
              className={`relative font-bold text-xl md:text-2xl transition-all duration-300 hover:scale-105 ${activeTab === key
                  ? 'text-dark-950 dark:text-light-950'
                  : 'text-dark-600 dark:text-light-600 hover:text-dark-850 dark:hover:text-light-850'
                }`}
            >
              {label}
              {activeTab === key && (
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-primary-600 rounded-full" />
              )}
            </button>
          ))}
        </nav>

        {/* Content sections */}
        <section className="bg-light-100 dark:bg-dark-100 rounded-3xl p-8 md:p-12 shadow-sm border border-light-300 dark:border-dark-300 min-h-[600px]">
          {activeTab === 'my-blogs' && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-dark-550 dark:text-light-550 mb-2">
                  My Published Articles
                </h2>
                <p className="text-dark-700 dark:text-light-700">
                  Sharing knowledge and experiences from my development journey
                </p>
              </div>

              <div className="grid gap-8">
                {myBlogs.map((blog, index) => (
                  <article
                    key={index}
                    className="group relative bg-light-150 dark:bg-dark-150 rounded-2xl overflow-hidden shadow-sm border border-light-250 dark:border-dark-250 hover:shadow-lg hover:scale-[1.02] transition-all duration-500"
                  >
                    <div className="lg:flex">
                      {/* Blog image */}
                      {blog.image && !errorImages[index] && (
                        <figure className="lg:w-1/3 relative overflow-hidden">
                          {loadingImages[index] && (
                            <div className="absolute inset-0 bg-light-300 dark:bg-dark-300 animate-pulse" />
                          )}
                          <img
                            src={blog.image}
                            alt={blog.title}
                            className="w-full h-48 lg:h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            onLoadStart={() => handleImageLoadStart(index)}
                            onLoad={() => handleImageLoad(index)}
                            onError={() => handleImageError(index)}
                          />

                          {/* Platform badge */}
                          <div className="absolute top-4 right-4">
                            <span className={`${getPlatformColor(blog.platform)} text-light-50 text-xs font-semibold py-1.5 px-3 rounded-full shadow-lg capitalize`}>
                              {blog.platform}
                            </span>
                          </div>
                        </figure>
                      )}

                      {/* Blog content */}
                      <div className="lg:w-2/3 p-8">
                        <header className="mb-6">
                          <h3 className="text-xl md:text-2xl font-bold text-dark-650 dark:text-light-650 mb-3 leading-tight group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                            {blog.title}
                          </h3>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {blog.tags?.map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="bg-light-200 dark:bg-dark-200 text-dark-700 dark:text-light-700 text-xs font-medium py-1 px-3 rounded-full border border-light-300 dark:border-dark-300"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          {/* Read time */}
                          <div className="flex items-center gap-2 text-sm text-dark-600 dark:text-light-600 mb-4">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>{blog.readTime}</span>
                          </div>
                        </header>

                        <p className="text-dark-800 dark:text-light-800 leading-relaxed text-base mb-8">
                          {blog.description}
                        </p>

                        {blog.link && (
                          <a
                            href={blog.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-light-50 font-semibold rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-lg"
                          >
                            <span>Read Article</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Hover overlay effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-primary-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />
                  </article>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'reading-list' && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-dark-550 dark:text-light-550 mb-2">
                  Currently Reading
                </h2>
                <p className="text-dark-700 dark:text-light-700">
                  Articles and resources I'm exploring to expand my knowledge
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {readingBlogs.map((blog, index) => (
                  <article
                    key={index}
                    className="group relative bg-light-150 dark:bg-dark-150 rounded-2xl p-6 border border-light-250 dark:border-dark-250 hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
                  >
                    {/* Category badge */}
                    <div className="flex justify-between items-start mb-4">
                      <span className={`${getCategoryColor(blog.category)} text-light-50 text-xs font-semibold py-1.5 px-3 rounded-full`}>
                        {blog.category}
                      </span>
                      <span className="text-xs text-dark-600 dark:text-light-600 font-medium">
                        {blog.date}
                      </span>
                    </div>

                    <header className="mb-4">
                      <h3 className="text-lg font-bold text-dark-650 dark:text-light-650 mb-2 leading-tight group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                        {blog.title}
                      </h3>
                      <p className="text-sm text-dark-700 dark:text-light-700 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        By {blog.author}
                      </p>
                    </header>

                    <a
                      href={blog.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200"
                    >
                      <span>Read Article</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>

                    {/* Hover overlay effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-primary-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl" />
                  </article>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* Call to action */}
        <footer className="text-center mt-16">
          <div className="bg-light-100 dark:bg-dark-100 rounded-3xl p-8 md:p-12 shadow-sm border border-light-300 dark:border-dark-300">
            <h2 className="text-2xl md:text-3xl font-bold text-dark-650 dark:text-light-650 mb-4">
              Stay Updated
            </h2>
            <p className="text-dark-700 dark:text-light-700 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              More articles coming soon! Follow me on social media for updates on new posts and insights.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://dev.to/soumyodeep_dey_c6cb5e8c97"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-success-600 hover:bg-success-700 text-light-50 font-semibold rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-lg"
              >
                <span>Follow on Dev.to</span>
              </a>
              <a
                href="https://hashnode.com/@Soumyodeep09"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-light-50 font-semibold rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-lg"
              >
                <span>Follow on Hashnode</span>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}

export default Blogs;