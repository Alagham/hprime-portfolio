import { motion } from "framer-motion";

export default function Resume() {
  return (
    <section id="resume" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-6">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12"
        >
          Resume
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
          >
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">
              Education
            </h3>
            <ul className="space-y-4">
              <li>
                <h4 className="font-medium text-gray-700 dark:text-gray-200">
                  National Diploma in Mechatronics Engineering 
                  Lagos State Polytechnic — 2021–2024 
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Focus on automation systems, robotics fundamentals, and industrial electronics.
                </p>
              </li>
              <li>
                <h4 className="font-medium text-gray-700 dark:text-gray-200">
                 Lagos State University of Science and Technology — 2025–Present
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Currently expanding knowledge in intelligent systems, control engineering, and advanced robotics.
                </p>
              </li>
            </ul>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
          >
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">
              Experience
            </h3>
            <ul className="space-y-4">
              <li>
                <h4 className="font-medium text-gray-700 dark:text-gray-200">
                  Frontend Developer Intern
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  TrippleA Tech — 2023
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Learnt the fundamentals of web development using HTML and CSS, with some functionality in JavaScript. Built responsive web pages, improved UI/UX, and collaborated in an agile team environment.
                </p>
              </li>
              <li>
                <h4 className="font-medium text-gray-700 dark:text-gray-200">
                  FullStack Development
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  SAIL Inovation Lab — 2024–2025
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Built fullstack apps with React, Node.js, and MongoDB. Designed APIs, created responsive UIs, and deployed projects to the cloud.
                </p>
                </li>
                <li>
                <h4 className="font-medium text-gray-700 dark:text-gray-200">
                  Web2 Advance Intern
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Web3bridge — 2025(Ongoing)
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Worked on collaborative projects using HTML, CSS, JavaScript, and React. Built responsive interfaces, practiced version control with Git/GitHub, and learned to contribute effectively in a team environment.
                </p>
              </li>
              <li>
                <h4 className="font-medium text-gray-700 dark:text-gray-200">
                  Advance FrontEnd Intern
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Tech Juaunt — 2025(Ongoing)
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Collaborated with peers on multiple frontend projects, improving teamwork and communication skills. Gained deeper knowledge of HTML, CSS, JavaScript and React while building responsive, user-friendly interfaces.
                </p>
              </li>
              <li>
                <h4 className="font-medium text-gray-700 dark:text-gray-200">
                  Frontend Developer Intern
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  HNG Internship — 2025(Ongoing)
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Worked on real-world projects under tight deadlines. Code was regularly reviewed and assessed by mentors, providing hands-on corrections and feedback. Gained practical experience in frontend development using HTML, CSS, JavaScript, and React.
                </p>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Download Resume Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-10"
        >
          <motion.a
                href="/resume.docx"
                download
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition"
                >
            Download Resume
          </motion.a>

        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mt-10"
        >
          <h3 className="text-2xl font-semibold text-blue-600 mb-4">Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-700 dark:text-gray-200">
            <span className="px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg shadow">
              Time Management
            </span>
            <span className="px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg shadow">
              Teamwork & Collaboration
            </span>
            <span className="px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg shadow">
              Problem-Solving
            </span>
            <span className="px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg shadow">
              Adaptability
            </span>
            <span className="px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg shadow">
              Leadership
            </span>
            <span className="px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg shadow">
              Communication
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
