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
        Things I've Made
      </a>
    </div>
  );
};

export default NavBar;
