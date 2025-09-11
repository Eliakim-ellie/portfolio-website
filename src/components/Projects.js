import ProjectCard from './ProjectCard';

function Projects({ projects }) {
  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((proj, idx) => (
          <ProjectCard key={idx} project={proj} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
