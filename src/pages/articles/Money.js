import React from 'react';
import Background from '../../components/Background';
import Article from '../../components/Article';
import Header from '../../components/Header';
import NavBar from '../../components/NavBar';

import '../../styles/article.scss';

const Money = () => {
  return (
    <Background>
      <NavBar />
      <Header />
      <Article>
        <div className="article-wrapper">
          <div className="article-container">
            <h1 className="title">The Money Conversation</h1>
            <p className="text">Here is the text</p>
          </div>
        </div>
      </Article>
    </Background>
  );
};

export default Money;
