import React from 'react';

function ProjectItem({ image, name }) {
  return (
    <div className="projectItem">
      {/* <div style={{ backgroundImage: `url(${image})` }} className="bgImage" /> */}
      <img src={image} alt={name} className="projectImage" />

      <h3>{name}</h3>
    </div>
  );
}

export default ProjectItem;
