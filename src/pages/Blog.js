import React from 'react';
import Background from '../components/Background';
import NavBar from '../components/NavBar';

import '../styles/blog.scss';

const Blog = () => {
  return (
    <Background>
      <NavBar />
      <div className="header">
        <h1 className="writing-header">Writing</h1>
      </div>
      <hr />
      <div className="post-container">
        <div className="post">
          <a href="/money">What You Should Know About Money</a>
          <p>
            Most people weren't taught about money. Here's what I learned from a
            wealthy mentor.
          </p>
        </div>
      </div>
    </Background>
  );
};

export default Blog;
