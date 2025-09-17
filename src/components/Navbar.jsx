import React from "react";
import useDarkMode from "../hooks/useDarkMode";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

function Navbar() {
  const [theme, setTheme] = useDarkMode();

  return (
    <nav className="fixed w-full bg-white dark:bg-gray-800 shadow-md z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
            <h1 className="text-2xl font-bold">hprime</h1>
            <ul className="flex gap-6">
            <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
            <li><a href="#skills" className="hover:text-blue-500">Skills</a></li>
            <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
            </ul>
            <div className="flex items-center space-x-2">

                <motion.a
                    href="/resume.pdf"
                    download
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-3 py-2 rounded-full bg-blue-600 text-white font-medium shadow-md hover:bg-blue-700 transition"
                >
                    Resume
                </motion.a>

                <motion.button
                    onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 shadow-md transition"
                >
                    {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
                </motion.button>
            </div>
        </div>
    </nav>
  );
}

export default Navbar;
