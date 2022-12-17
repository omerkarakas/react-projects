import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

import '../styles/Home.css';

function Home() {
    return (
        <div className="home">
            <div className="about">
                <h2>I'm Omer Karakas</h2>
                <div className="prompt">
                    <p>I am a software engineer who loves coding and creating</p>
                    <div className="icons-container">
                        <a href="https://www.linkedin.com/in/okarakas/" target="_blank" rel="noreferrer">
                            <LinkedInIcon />
                        </a>
                        <a href="mailto:omer@okarakas.com">
                            <EmailIcon />
                        </a>

                        <a href="https://github.com/omerkarakas" target="_blank" rel="noreferrer">
                            <GitHubIcon />
                        </a>
                    </div>
                </div>
            </div>
            <div className="skills">
                <h2>Skills</h2>
                <ol className="list">
                    <li className="item">
                        <h4>Front-End</h4>
                        <span className="span">
                            HTML, CSS, Styled Components, Tailwind, BootStrap, Material UI, Ant Design
                        </span>
                        <br />
                        <span className="span">JavaScript, TypeScript, ReactJS, NextJS</span>
                    </li>
                    <li className="item">
                        <h4>Back-End</h4>
                        <span className="span">NodeJS, ExpressJS, NestJS</span>
                        <br />
                        <span className="span">Java, Spring, C#</span>
                        <br />
                        <span className="span">AWS, Serverless, Lambda, SQL, NoSQL</span>
                    </li>
                    <li className="item">
                        <h4>Languages</h4>
                        <span className="span">JavaScript, TypeScript, Java, C#, PL/SQL </span>
                    </li>
                </ol>
            </div>
        </div>
    );
}

export default Home;
