import React from 'react';
import Background from '../../components/Background';
import NavBar from '../../components/NavBar';

import './projects.scss';

function Projects() {
  return (
    <Background>
      <NavBar />
      <div className="header">
        <h1 className="page-header">Projects</h1>
      </div>
      <hr />
      <div className="project-container">
        <div className="project">
          <h3>Reading Recommender (Node.js)</h3>
          <div className="desc">
            <p>Web application for book suggestions</p>
            <div className="refs">
              <a href="https://github.com/reading-recommender/reading-recommender-BE">
                Code
              </a>
              <a href="https://reading-recommender.netlify.com/">Site</a>
            </div>
          </div>
        </div>
        <div className="project">
          <h3>Portfolio Site</h3>
          <div className="desc">
            <p>Personal website built with React.js</p>
            <div className="refs">
              <a href="https://github.com/darienpayton/darienpayton-website">
                Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </Background>
  );
}

export default Projects;
