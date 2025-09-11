function ProjectCard({ project }) {
  const { title, description, imageUrl, projectLink } = project;

  return (
    <div className="project-card">
      <img src={imageUrl} alt={title} className="project-image" />
      <div className="project-body">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <a
          href={projectLink}
          className="project-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
