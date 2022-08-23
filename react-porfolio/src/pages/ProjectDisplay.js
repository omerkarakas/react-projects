import { React } from 'react';
import { useParams } from 'react-router-dom';
import { ProjectList } from '../utils/ProjectsData';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../styles/ProjectDisplay.css';

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h2>{project.name}</h2>
      <a href={project.url} target="_blank" rel="noreferrer">
        <img src={project.img} alt={project.name} />
      </a>
      <p>
        <b> Tech stack</b>
      </p>
      <p>{project.skills}</p>
      <a href={project.url} target="_blank" rel="noreferrer">
        Live Demo
      </a>
      <a href={project.githubUrl} target="_blank" rel="noreferrer">
        <GitHubIcon />
      </a>
    </div>
  );
}

export default ProjectDisplay;
