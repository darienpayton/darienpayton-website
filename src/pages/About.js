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
            things are interesting to you,{' '}
            <a href="mailto:hi@darienpayton.com">drop me a line</a>.
          </p>
          <br />
          <p>
            I recently decided to write more seriously and in public. I started
            a newsletter, On Brown Street, I send out every Thursday. It
            contains stories and links I found interesting, plus new essays.
            It's also a great chance for us to get to know each other better - I
            ask how I can help you every week. You should{' '}
            <a href="/join">sign up</a>!
          </p>
        </div>
      </div>
    </Background>
  );
};

export default About;
