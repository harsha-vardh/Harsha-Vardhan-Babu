import React from "react";
import ScrollVelocity from "./ScrollVelocity";

const skills = {
  "Programming Languages": ["JavaScript", "Python", "Java", "HTML", "CSS"],
  "Frameworks & Libraries": ["React", "Node.js", "TensorFlow", "scikit-learn"],
  "Tools & Technologies": ["Git", "VS Code", "Docker", "AWS", "SQL", "Mongo DB"],
  "Soft Skills": [
    "Problem Solving",
    "Team Collaboration",
    "Communication",
    "Time Management",
  ],
};

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <ScrollVelocity
        texts={["People's Dreams |", "Never End |"]}
        velocity={100}
        className="custom-scroll-text"
      />
      <div className="container">
        <br />
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="skill-category">
              <h3>{category}</h3>
              <ul className="skill-list">
                {items.map((skill, index) => (
                  <li key={index} className="skill-item">
                    <span className="skill-dot"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
