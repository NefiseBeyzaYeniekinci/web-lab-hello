export default function Skills() {
  const skills = [
    "HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", 
    "React", "Tailwind CSS", "Git & GitHub", "Responsive Design"
  ];

  return (
    <section id="skills" className="py-16 px-4 bg-gray-50 dark:bg-gray-900 border-y border-gray-200 dark:border-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Yetenekler
        </h2>
        <div className="flex flex-wrap gap-3">
          {skills.map(skill => (
            <span key={skill} className="px-4 py-2 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 font-medium rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
