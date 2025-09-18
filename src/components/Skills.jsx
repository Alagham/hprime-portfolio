import React from "react";

const technicalSkills = [
  "HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Tailwind CSS", 
  "Framer Motion", "Styled Components", "React Router", "Next.js"
];

const tools = [
  "Git", "GitHub", "VS Code", "Vercel", "Netlify", "Chrome DevTools", "EmailJS"
];

const softSkills = [
  "Problem Solving", "Time Management", "Collaboration", "Communication", "Adaptability"
];

export default function Skills() {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>

      {/* Technical Skills */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
        <div className="flex flex-wrap gap-4">
          {technicalSkills.map((skill, index) => (
            <span
              key={index}
              className="bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-200 px-4 py-2 rounded-full shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Tools */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Tools</h3>
        <div className="flex flex-wrap gap-4">
          {tools.map((tool, index) => (
            <span
              key={index}
              className="bg-green-100 dark:bg-green-800 text-green-700 dark:text-green-200 px-4 py-2 rounded-full shadow-sm"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>

      {/* Soft Skills */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Soft Skills</h3>
        <div className="flex flex-wrap gap-4">
          {softSkills.map((softSkill, index) => (
            <span
              key={index}
              className="bg-purple-100 dark:bg-purple-800 text-purple-700 dark:text-purple-200 px-4 py-2 rounded-full shadow-sm"
            >
              {softSkill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
