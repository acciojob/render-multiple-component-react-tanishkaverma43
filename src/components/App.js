import React from "react";

function Project({ name, description }) {
  return (
    <div>
      <h1 data-ns-test="project-name">{name}</h1>
      <h6 data-ns-test="project-description">{description}</h6>
    </div>
  );
}

function App() {
  const projects = [
    { name: "E-commerce Website", description: "An online shopping platform." },
    { name: "Chat Application", description: "A real-time messaging app." },
    { name: "Portfolio Website", description: "A personal portfolio to showcase projects." }
  ];

  return (
    <div className="ns-wrapper">
      {projects.map((project, index) => (
        <Project key={index} name={project.name} description={project.description} />
      ))}
    </div>
  );
}

export default App;
