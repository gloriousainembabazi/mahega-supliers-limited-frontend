import React from "react";
<<<<<<< HEAD
import "../style/project.css"; 
=======
>>>>>>> 66080b534ee2746ba874726c84c17f6ebf5045fd

const projects = [
  { name: "Project A", description: "Construction using our materials", image: "/images/project1.jpg" },
  { name: "Project B", description: "Completed commercial building", image: "/images/project2.jpg" },
];

const Projects = () => {
  return (
<<<<<<< HEAD
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.image} alt={project.name} className="project-image" />
              <h3>{project.name}</h3>
=======
    <section id="projects" className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded shadow hover:shadow-lg transition">
              <img src={project.image} alt={project.name} className="w-full h-48 object-cover mb-4 rounded" />
              <h3 className="text-xl font-semibold">{project.name}</h3>
>>>>>>> 66080b534ee2746ba874726c84c17f6ebf5045fd
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
