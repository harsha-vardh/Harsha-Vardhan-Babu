import React from "react";
import Particles from "./Particles";
import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="hero">


      <div style={{ width: "100%", height: "600px", position: "absolute" }}>
        <Particles
          particleColors={["#1f2937", "#1f2937"]}
          particleCount={200}
          particleSpread={10}
          speed={0.2}
          particleBaseSize={80}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      <div className="container-hero-content">
        <h1>Harsha Vardhan Babu</h1>
        <p>AIML Student & Software Engineer</p>
        <p>
          Passionate about building innovative solutions and exploring the
          frontiers of AI/ML technology.
        </p>
        <div className="social-links">
          <a
            href="https://github.com/harsha-vardh"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/harsha-vardhan-babu-racha-766065222/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <Linkedin size={24} />
          </a>
          <a href="mailto:harshavardhanracha9@gmail.com" className="social-link">
            <Mail size={24} />
          </a>
        </div>
        <a href="#projects" className="cta-button">
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;
