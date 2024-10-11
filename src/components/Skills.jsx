import React, { useEffect, useState } from 'react';

const skillsData = [
  { name: "Python", percentage: 80 },
  { name: "React", percentage: 65 },
  { name: "HTML", percentage: 85 },
  { name: "C#", percentage: 50 },
  { name: "SQL", percentage: 60 },
  { name: "FastAPI", percentage: 40 },
  {name: "Javascript", percentage: 40},
  {name: "AI", percentage: 60}
];

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [skills, setSkills] = useState(skillsData.map(skill => ({ ...skill, currentPercentage: 0 })));

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('skills-section');
      const rect = section.getBoundingClientRect();
      
      // Check if the section is visible
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setIsVisible(true);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setSkills(prevSkills =>
          prevSkills.map(skill => {
            if (skill.currentPercentage < skill.percentage) {
              return { ...skill, currentPercentage: skill.percentage  };
            }
            return skill;
          })
        );
      }, 30); // Adjust the interval for the speed of the increase

      // Stop the interval when all percentages reach their targets
      if (skills.every(skill => skill.currentPercentage >= skill.percentage)) {
        clearInterval(interval);
      }

      return () => clearInterval(interval);
    }
  }, [isVisible, skills]);

  return (
    <section id="skills-section" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="text-center mb-12">
          <h1 className="text-7xl font-extrabold mb-4">Skills</h1>
          <h2 className="text-4xl mb-6 text-blue-400">Core Competencies</h2>
          <p className="text-lg text-gray-400">
            From web development to AI, these are the key skills I bring to the table.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`w-full transform transition-transform duration-500 ease-in-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }} // Stagger entrance
            >
              {/* Flexbox to align skill name and percentage in a row */}
              <div className="flex justify-between mb-1">
                <h3 className="text-xl font-semibold">{skill.name}</h3>
                <span className="text-xl font-semibold text-white">{skill.currentPercentage}%</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-6 mb-4">
                <div
                  className={`bg-blue-500 h-6 rounded-full transition-all duration-700 ease-in-out transform hover:scale-105`}
                  style={{ width: `${skill.currentPercentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
