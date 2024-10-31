function Blogs() {
  return (
    <section className="py-16 min-h-screen bg-gray-100 dark:bg-gray-800">
      <h1 className="text-5xl font-bold text-center mb-12 text-indigo-700 dark:text-indigo-400 animate-fadeInLeft">
        BLOG
      </h1>
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden dark:bg-gray-800">
          <img
            src="/path/to/your/thumbnail.jpg" // Replace with your actual thumbnail path
            alt="Blog Thumbnail"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
              Your Blog Title Here
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A brief summary or excerpt of your blog goes here. This will give readers an idea of what to expect.
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
    </section>
  );
}

export default Blogs;
