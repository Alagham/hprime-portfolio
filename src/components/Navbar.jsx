import { motion } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useState } from "react";

export default function NavBar({ theme, setTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed w-full bg-white dark:bg-gray-900 shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold text-blue-600 dark:text-blue-400"
        >
         hprime
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#about" className="hover:text-blue-500 dark:hover:text-blue-400">
            About
          </a>
          <a href="#projects" className="hover:text-blue-500 dark:hover:text-blue-400">
            Projects
          </a>
          <a href="#resume" className="hover:text-blue-500 dark:hover:text-blue-400">
            Resume
          </a>
          <a href="#contact" className="hover:text-blue-500 dark:hover:text-blue-400">
            Contact
          </a>

          {/* Resume Button with Motion */}
          <motion.a
            href="/resume.docx"
            download
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
          >
            Resume
          </motion.a>

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="ml-3 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-110 transition"
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-gray-800 dark:text-gray-200">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 shadow-lg px-6 py-4 space-y-4">
          <a
            href="#about"
            className="block hover:text-blue-500 dark:hover:text-blue-400"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a
            href="#projects"
            className="block hover:text-blue-500 dark:hover:text-blue-400"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </a>
          <a
            href="/resume.docx"
            className="block hover:text-blue-500 dark:hover:text-blue-400"
            onClick={() => setIsOpen(false)}
          >
            Resume
          </a>
          <a
            href="#contact"
            className="block hover:text-blue-500 dark:hover:text-blue-400"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>

          {/* Mobile Resume Button with Motion */}
          <motion.a
            href="/resume.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="block px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition text-center"
            onClick={() => setIsOpen(false)}
          >
            Resume
          </motion.a>

          {/* Theme Toggle */}
          <button
            onClick={() => {
              setTheme(theme === "light" ? "dark" : "light");
              setIsOpen(false);
            }}
            className="w-full px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 flex justify-center"
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>
      )}
    </nav>
  );
}
