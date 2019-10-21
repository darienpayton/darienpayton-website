import React from 'react';
import Background from '../../components/Background';
import NavBar from '../../components/NavBar';

import './projects.scss';

function Projects() {
  return (
    <Background>
      <NavBar />
      <div className="section-header">
        <h2 className="section-title">Projects</h2>
      </div>
      <div className="featured-container">
        <div className="featured">
          <div className="desc">
            <a
              className="title"
              href="https://reading-recommender.netlify.com/"
            >
              Reading Recommender
            </a>
            <p>Web application for book suggestions</p>
          </div>
        </div>
        <div className="featured">
          <div className="desc">
            <a className="title" href="https://darienpayton.com">
              Portfolio Site
            </a>
            <p>Personal website built with React.js</p>
          </div>
        </div>
      </div>
    </Background>
  );
}

export default Projects;
