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
    <section className="bg-gradient-to-b from-gray-100 via-gray-200 to-gray-100 dark:from-gray-800 dark:via-gray-700 dark:to-gray-900 py-16 min-h-screen">
      <h1 className="text-5xl font-bold text-center mb-12 text-indigo-700 dark:text-indigo-400 animate-fadeInLeft">
        BLOGS
      </h1>
      <div className="container mx-auto">
        {blogList.map((blog, index) => (
          <div
            key={index}
            className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden dark:bg-gray-800 mb-6 transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            {blog.image && (
              <img
                src={blog.image}
                alt="Blog Thumbnail"
                className="w-full h-auto object-cover"
              />

            )}
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">
                {blog.title}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {blog.description}
              </p>
              {blog.link && (
                <a
                  href={blog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline hover:text-indigo-800 dark:hover:text-indigo-600 transition-colors duration-300"
                >
                  Read More
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blogs;
