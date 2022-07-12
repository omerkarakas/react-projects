import React from 'react';
import ProjectItem from '../components/ProjectItem';
import { Link } from 'react-router-dom';

import '../styles/Projects.css';
import { ProjectList } from '../utils/ProjectList';

function Projects() {
  return (
    <div className="projects">
      <h3>My Personal Projects</h3>
      <div className="projectList">
        {ProjectList.map((prj, index) => {
          return (
            <Link to={`/project/${index}`}>
              <ProjectItem key={index} image={prj.img} name={prj.name} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
