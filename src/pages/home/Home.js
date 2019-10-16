import React from 'react';
import Background from '../../components/Background';
import NavBar from '../../components/NavBar';
import { FaGithub, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import Subscribe from '../../components/Subscribe';
import headshot from '../../img/DPheadshot.jpeg';

import './home.scss';

function Home() {
  return (
    <Background>
      <NavBar />
      <div className="intro">
        <div className="img-container">
          <img src={headshot} alt="Darien Payton headshot" />
        </div>
        <div className="top-content">
          <p className="line1">Hello, I'm</p>
          <h1 className="line2">Darien Payton.</h1>
          <p className="line3">I'm a maker, writer, and musician</p>
          <p className="line4">
            I make things, write mostly short-form and play piano. I was born
            and raised in Chicago. I spent three years living in Atlanta, before
            moving back to Chicago. A year ago, I was running a digital
            marketing shop, today I am a software engineer. A lot has changed,
            and it's been a fun ride! You can learn more about me{' '}
            <a href="/about">here</a>.
          </p>
        </div>
        <Subscribe />
        <ul className="social">
          <li>
            <a href="https://twitter.com/darienpayton">
              <FaTwitterSquare className="icon" />
            </a>
          </li>
          <li>
            <a href="https://github.com/darienpayton">
              <FaGithub className="icon" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/darien-payton-a767b814a/">
              <FaLinkedin className="icon" />
            </a>
          </li>
        </ul>
      </div>
    </Background>
  );
}

export default Home;
