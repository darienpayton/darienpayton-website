import React from 'react';
import Background from '../components/Background';
import NavBar from '../components/NavBar';
import headshot from '../img/DPheadshot.jpeg';

import '../styles/about.scss';

const About = () => {
  return (
    <Background>
      <NavBar />
      <div>
        <div className="img-container">
          <img src={headshot} alt="Darien Payton headshot" />
        </div>
        <div className="about-details">
          <p>
            Hi, I'm Darien. I live in Chicago, IL. In my past, I studied at
            Morehouse and ran a marketing consultancy that worked with brands on
            marketing strategy and production. These days, I'm at Lambda School
            learning about Full-Stack Web Development.
          </p>
          <br />
          <p>
            My mission is to improve the general quality of life. I care about
            the communities we live in and the institutions that support us. I'm
            really interested in economics, cities, and history. If any of those
            things are interesting to you, feel free to{' '}
            <a href="mailto:hi@darienpayton.com">drop me a line</a>!
          </p>
          <br />
          <p>
            Every Thursday I send out a newsletter containing stories and links
            I found interesting. It's a great chance for us to get to know each
            other better - I ask how I can help you and I (infrequently) ask
            your help. You should <a href="/join">sign up</a>!
          </p>
        </div>
      </div>
    </Background>
  );
};

export default About;
