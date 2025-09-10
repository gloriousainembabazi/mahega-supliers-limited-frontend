import React from "react";
import "../style/project.css"; 

const projects = [
  { name: "Project A", description: "Construction using our materials", image: "/images/project1.jpg" },
  { name: "Project B", description: "Completed commercial building", image: "/images/project2.jpg" },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.image} alt={project.name} className="project-image" />
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
