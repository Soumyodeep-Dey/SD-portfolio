function Blogs() {
  return (
    <section className="py-16 min-h-screen bg-gray-100 dark:bg-gray-800">
      <h1 className="text-5xl font-bold text-center mb-12 text-indigo-700 dark:text-indigo-400 animate-fadeInLeft">
        BLOG
      </h1>
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden dark:bg-gray-800">
          <img
            src="/Images/Add a heading.png" 
            alt="Blog Thumbnail"
            className="w-full h-full object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-gray-200">
            A Beginners Guide to LinkedIn
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
            Effective Strategies for Expanding Your LinkedIn Network (most useful for Beginners)
            </p>
            <a
              href="https://hashnode.com/edit/cm02l0eje000408mhbmv61h6f"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
      <br />
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden dark:bg-gray-800">
          <img
            src="" 
            alt="Blog Thumbnail"
            className="w-full h-full object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-gray-200">
            More on the way...
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
            
            </p>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blogs;
