import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

import Dragon from '../assets/Dragon-Fruit.jpg'
import To_Do from '../assets/ToDo.jpg'
import W_S from '../assets/Wind_Solar.jpg'
import C_F from '../assets/Connect.jpeg'

const projects = [
  
  {
    title: 'TODO List',
    description: 'A simple and interactive To-Do List for efficient task management.',
    image: To_Do,
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Connect Five game',
    description: 'A strategic game where players compete to align five pieces in a row.',
    image: C_F,
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Hybrid Energy Generation System',
    description: 'A system integrating wind and solar energy for efficient power generation.',
    image: W_S,
    tags: ['Renewable Energy', 'IoT', 'Solar', 'Wind'],
  },
  {
    title: 'Smart Dragon Fruit Disease Detection',
    description: 'A web app that detects five classes of diseases using a trained ML model.',
    image: Dragon,
    tags: ['Machine Learning', 'Python', 'Web'],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a href="https://github.com/harsha-vardh" className="project-link">
                    <Github size={20} />
                    <span>Code</span>
                  </a>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;