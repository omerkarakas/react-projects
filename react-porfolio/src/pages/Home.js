import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

import '../styles/Home.css';

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>
          Hi, My name is <br /> Omer Karakas
        </h2>
        <div className="prompt">
          <p>
            I am a software engineer who loves learning, coding and creating
          </p>
          <div className="icons-container">
            <LinkedInIcon />
            <EmailIcon />
            <GitHubIcon />
          </div>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>HTML, CSS, JavaScript, BootStrap, ReactJS, Redux</span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>NodeJS, ExpressJS, Java Spring</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, C, C++</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
