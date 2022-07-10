import { React } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ProjectList } from '../utils/ProjectList';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../styles/ProjectDisplay.css';

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1>{project.name}</h1>
      <img src={project.img} alt={project.name} />
      <p>
        <b>Skills:</b>
        {project.skills}
      </p>
      <a href={project.url} target="_blank">
        Live Demo
      </a>
      <a href={project.githubUrl} target="_blank">
        <GitHubIcon />
      </a>
    </div>
  );
}

export default ProjectDisplay;
