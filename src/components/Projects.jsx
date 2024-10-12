import React from 'react';
import emotions from '../assets/images/emotions.jpeg';
import animal from "../assets/images/animal.png"
import tict from "../assets/images/tictactoe.png"
import portfolio from "../assets/images/portfolio.jpg"
import voice from "../assets/images/voice.jpg"
import mart from "../assets/images/mart.jpg"
const projectsData = [
  {
    title: "Emotion Recognition App",
    description: "An AI-based project that detects human emotions using facial recognition with TensorFlow.",
    image: emotions,
    link: "https://github.com/hiba-bint-irfan/Face-Emotion-Recognition",
  },
  {
    title: "Personal Portfolio",
    description: "A personal website built with React and Tailwind CSS to showcase my work and skills.",
    image: portfolio,
    link: "https://github.com/hiba-bint-irfan/Personal_portfolio",
  },
  {
    title: "Animal-Image Recognition",
    description: "An AI-based project animal recognition which detects animal by input images.",
    image: animal,
    link: "https://github.com/hiba-bint-irfan/Animal-Image-Recognition",
  },
  {
    title: "Tic Tac Toe",
    description: "An AI- based project where user can play with AI bot and AI analyze your moves and try best to win it..",
    image: tict,
    link: "https://github.com/hiba-bint-irfan/Tic-Tac-Toe",
  },
  {
    title: "Zubaida Mart",
    description: "A grocery store website built with React and Tailwind CSS to showcase my work and skills.",
    image: mart,
    link: "https://github.com/hiba-bint-irfan/zubaida_mart",
  },
  {
    title: "Voice Detection",
    description: "Analyzes speech speed and identifies repeated words in spoken voice, providing a detailed transcript of the audio.",
    image: voice,
    link: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects-section" className="bg-gray-950 text-white py-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="text-center mb-12">
          <h1 className="text-7xl font-bold mb-4">Projects</h1>
          <h2 className="text-4xl mb-6 text-blue-400">Showcasing My Work</h2>
          <p className="text-lg text-gray-300">
            Explore some of the projects I've worked on, ranging from AI-powered applications to cloud solutions.
          </p>
        </div>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          {projectsData.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition ease-out duration-500">
              <a href={`${window.location.origin}${project.link}`}  className="block h-48 bg-cover bg-center" style={{ backgroundImage: `url(${project.image})` }}>
              </a>
              <div className="p-6">
                <div className="flex items-center text-gray-400 text-sm mb-3">
                  <span className="mr-2">{project.date}</span>
                  <span className="mr-2">•</span>
                  <span>By Hiba Irfan</span>
                </div>
                <h3 className="text-2xl font-semibold mb-3">
                  <a href={project.link} className="hover:text-blue-400 transition duration-300">
                    {project.title}
                  </a>
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <a 
                  href={project.link} 
                  className="text-blue-500 hover:text-blue-400 transition-colors duration-300"
                >
                  View Project &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
