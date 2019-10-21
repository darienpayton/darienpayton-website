import React from 'react';
import Background from '../../components/Background';
import NavBar from '../../components/NavBar';

import './about.scss';

const About = () => {
  return (
    <Background>
      <NavBar />
      <div>
        <h1 className="bio-header">More about me...</h1>
        <div className="about-details">
          <p>
            I live in Chicago, where I grew up. I've also lived in Atlanta for
            about 3 years. Though it was a relatively short amount of time, I
            would say that living in Atlanta was one of the most impactful
            experiences on my life.
          </p>
          <br />
          <p>
            I started off in Atlanta at Morehouse College, though I only
            finished my first year. Morehouse was one of the best things to
            happen to me. In tech, it sounds cool to say you dropped out of
            college, but that wasn't the case here. I intended to go back my
            sophomore year. But, that didn't work out. Instead, I built a
            digital marketing consultancy working with companies like
            Chick-fil-A, Keller Williams and Teach for America, along with a
            host of small businesses. My first foray with business actually came
            in high school where some friends and I would sell snacks to other
            students. I would provide capital (earned from gigs as a freelance
            musician) and my friends would sell the snacks and we would do a
            revenue share. After running the consultancy for a couple of years,
            I decided to join Lambda School to learn how to code, while I
            thought about my next "big thing".
          </p>
          <br />
          <p>
            These days, I'm working on making more things and doing more
            experimentation. I was once an advocate of the "go big or go home"
            mantra so often heralded in the tech world, but I no longer think
            that fits the type of future I want for myself. It took a while to
            recognize this wasn't a sign of failure, or giving up, but just
            self-awareness and a decision to live life on my own terms. That
            said, I'm still a fan of startups, tech and founders who are
            building huge (read: $1B+) businesses. I have a lot of interests,
            including: cities, finance, programming, design, music,
            architecture, movies, cars and sports. Some of these I care about
            more than others.
          </p>
          <br />
          <p>
            I write about a range of topics that you can read in my{' '}
            <a href="/blog">blog</a>. I also send out a weekly{' '}
            <a href="/newsletter">newsletter</a> called On Brown Street (a nod
            to a popular street at Morehouse). It's a great way for us to get to
            know each other better. If you're interested, there's a featured
            list of <a href="/projects">things I've made</a> here on the
            website.
          </p>
          <br />
          <p>
            I hang out a lot on{' '}
            <a href="https://twitter.com/darienpayton">Twitter</a>. Feel free to
            say hi! Or you can email me at hi at darien payton dot com.
          </p>
        </div>
      </div>
    </Background>
  );
};

export default About;
