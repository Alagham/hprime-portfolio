import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section className="h-screen flex items-center justify-center text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-extrabold mb-4">
          Hi, I'm <span className="text-blue-500">Alagbe Hamzah (hprime)</span>
        </h1>
        <TypeAnimation
          sequence={[
            "Software Developer",
            2000,
            "Fullstack Developer",
            2000,
            "Problem Solver",
            2000,
            "Tech Enthusiast",
            2000,
          ]}
          wrapper="p"
          className="text-xl text-gray-600 dark:text-gray-300"
          repeat={Infinity}
        />
        <motion.a
        href="#projects"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="mt-8 inline-block bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition"
        >
        View My Work
        </motion.a>
      </motion.div>
    </section>
  );
}

export default Hero;
