import React from 'react';
import Background from '../components/Background';
import NavBar from '../components/NavBar';
import { FaGithub, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import Subscribe from '../components/Subscribe';

import '../styles/home.scss';

function Home() {
  return (
    <Background>
      <NavBar />
      <div className="intro">
        <div className="top-content">
          <p className="line1">Hello, my name is</p>
          <h1 className="line2">Darien Payton.</h1>
          <p className="line3">I'm building a better future.</p>
          <p className="line4">
            {' '}
            I'm curious about improving the quality of life. Learn more about me{' '}
            <a href="/about">here!</a>
          </p>
        </div>

        <ul className="social">
          <li>
            <a href="https://twitter.com/darienpayton">
              <FaTwitterSquare className="icon" />
            </a>
          </li>
          <li>
            <a href="https://github.com/dpayton23">
              <FaGithub className="icon" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/darien-payton-a767b814a/">
              <FaLinkedin className="icon" />
            </a>
          </li>
        </ul>
        <Subscribe />
      </div>
    </Background>
  );
}

export default Home;
