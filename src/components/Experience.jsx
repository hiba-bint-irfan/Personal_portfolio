import React, { useEffect, useState } from 'react';

const experiences = [
  {
    title: 'Junior Full Stack Developer',
    company: 'Trade Foresight',
    duration: 'March 2024 - Present',
    description: 'I’m currently working as a full-stack developer, using Python for the backend and Angular/React for the frontend to build and optimize applications.',
  },{
    title: 'Frontend Developer Intern',
    company: 'Trade Foresight',
    duration: 'Nov 2024 - Feb 2025',
    description: 'I gained valuable experience working with Angular, focusing on UI design, layout improvements, and optimizing performance. I also developed a Python-based email verification system, conducted web scraping for data extraction, and performed thorough testing. Additionally, I contributed to frontend design, enhancing user interfaces and collaborating on finalizing designs for deployment.',
  },
  {
    title: 'Python Developer Intern',
    company: 'Webventure',
    duration: 'March 2024 - June 2024',
    description: 'Engaged in code reviews and explored AI and data science with NumPy and Pandas for ML algorithms.',
  },
  {
    title: 'Artificial Intelligence Intern (Remote)',
    company: 'CodSoft',
    duration: 'Mar 2024 - Apr 2024',
    description: 'Develop small project using basic AI concept and build agent, game etc',
  }
];

const Experience = () => {
  const [visibleIndices, setVisibleIndices] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    
    setIsLoaded(true);

    const handleScroll = () => {
      const experienceItems = document.querySelectorAll('.experience-item');
      experienceItems.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          setVisibleIndices((prev) => {
            if (!prev.includes(index)) {
              return [...prev, index];
            }
            return prev;
          });
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="experience-section" className="bg-gray-950 text-white py-10">
      <div
        className={`text-center mb-12 transform transition duration-1000 ease-in-out ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="text-4xl font-bold text-blue-400">Experience</h2>
        <p className="text-lg text-gray-300 mt-2">Here's a glimpse of my professional journey.</p>
      </div>
      <div className="grid px-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`experience-item bg-gray-800 p-6 rounded-lg shadow-lg transition-all duration-1000 ease-in-out ${
              visibleIndices.includes(index) ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[-50px]'
            }`}
          >
            <h3 className="text-2xl font-semibold">{exp.title}</h3>
            <p className="text-lg text-blue-400">{exp.company}</p>
            <p className="text-sm text-gray-400">{exp.duration}</p>
            <p className="text-base mt-2">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
