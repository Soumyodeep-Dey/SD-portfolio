function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-400 p-5">
      <div className="container mx-auto">
        <nav className="flex justify-center space-x-6 text-2xl">
          <a
            href="https://www.linkedin.com/in/soumyodeep-dey-s-d-2a125b1a7/"
            className="hover:text-orange-700 transition duration-300"
            aria-label="LinkedIn Profile"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com/Soumyodeep2003"
            className="hover:text-orange-700 transition duration-300"
            aria-label="Twitter Profile"
          >
            Twitter
          </a>
          <a
            href="https://www.instagram.com/soumyodeepdey_official/"
            className="hover:text-orange-700 transition duration-300"
            aria-label="Instagram Profile"
          >
            Instagram
          </a>
          <a
            href="https://www.facebook.com/soumyodeep.dey.18/"
            className="hover:text-orange-700 transition duration-300"
            aria-label="Facebook Profile"
          >
            Facebook
          </a>
          <a
            href="./public/Resume.pdf" // Ensure this path is correct for your project
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-700 transition duration-300"
            aria-label="Download Resume"
          >
            Resume
          </a>
        </nav>
      </div>

      <div className="text-center text-gray-600 py-4">
        &copy; 2024 Soumyodeep Dey. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
