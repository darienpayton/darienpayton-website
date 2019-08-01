import React from 'react';

import '../styles/navbar.scss';

const NavBar = () => {
  return (
    <div className="nav-bar">
      <a className="item" href="/">
        Home
      </a>
      <a className="item" href="/about">
        About
      </a>
      <a className="item" href="/blog">
        Writing
      </a>
      <a className="item" href="/projects">
        Projects
      </a>
      <a className="item" href="https://twitter.com/darienpayton">
        Twitter
      </a>
    </div>
  );
};

export default NavBar;
