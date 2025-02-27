function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-sky-400 dark:bg-gray-900 w-full mt-auto">
      <div className="text-center text-gray-800 dark:text-gray-300 py-4">
        <h3>&copy; {currentYear} Soumyodeep Dey. All rights reserved.</h3>
      </div>
    </footer>
  );
}

export default Footer;
