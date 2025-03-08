import React from "react";
import SpotlightCard from "./SpotlightCard";
import { Code, Brain, Database,Layers } from "lucide-react";

const About = () => {
  return (
    <SpotlightCard 
      className="custom-spotlight-card"
      spotlightColor="rgba(215, 223, 250, 0.74)"
    >
      <section id="about" className="about">
        <div className="C-container">
          <h2 className="section-title">About Me</h2>
          <div className="about-grid">
            <div className="about-text">
              <p>
              Hello! I'm Harsha Vardhan Babu, a passionate Software Engineer with a strong foundation in web development, 
              machine learning, and problem-solving. I have experience working with HTML, CSS, JavaScript, and Python, and 
              I’m continuously expanding my expertise in building user-friendly, scalable applications.
              </p>
              <p>
              My goal is to create impactful solutions through technology and innovation. Whether it's designing aesthetic, 
              responsive web applications or implementing AI-driven models, I love tackling challenges that push me to grow 
              as a developer.
              <br />
              Let's connect to collaborate on exciting ideas!
              </p>

            </div>
            <div className="about-cards">
              <div className="about-card">
                <Code className="about-card-icon" />
                <h3>Web Development</h3>
                <p>Crafting responsive and interactive web applications</p>
              </div>
              <div className="about-card">
                <Brain className="about-card-icon" />
                <h3>Machine Learning</h3>
                <p>Building intelligent systems and ML models</p>
              </div>
              <div className="about-card">
                <Database className="about-card-icon" />
                <h3>Data base</h3>
                <p>Managing and organizing data efficiently with modern database technologies.</p>
              </div>
              <div className="about-card">
                <Layers className="about-card-icon"/>
                <h3>Full Stack Development</h3>
                <p>Creating end-to-end solutions with modern technologies</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SpotlightCard>
  );
};

export default About;
