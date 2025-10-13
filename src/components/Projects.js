import React from "react";
import ProjectCard from "./ProjectCard";

function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "My personal portfolio built with React.",
      imageUrl: "/images/portfolio.png",
      projectLink: "https://walela.dev"
    },
    {
      title: "Weather App",
      description: "A weather forecast app using OpenWeather API.",
      imageUrl: "/images/weather.jpg",
      projectLink: "https://github.com/walela/weather-app"
    },
    {
      title: "Task Manager",
      description: "A simple task tracking app with local storage.",
      imageUrl: "/images/todo.jpg",
      projectLink: "https://github.com/walela/todo-app"
    },
    {
      title: "Chat App",
      description: "A real-time messaging app built with React and Firebase.",
      imageUrl: "/images/chatapp.jpg",
      projectLink: "https://github.com/walela/chat-app"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>

      <div className="projects-marquee">
        <div className="projects-track">
          {projects.concat(projects).map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
