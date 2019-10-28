import React from 'react';
import Background from '../../components/Background';
import NavBar from '../../components/NavBar';
import Subscribe from '../../components/Subscribe';

const styles = {
  color: '#226597',
  marginTop: '20px',
  textAlign: 'center'
};

const aStyles = {
  textDecoration: 'none'
};

function Newsletter() {
  return (
    <Background>
      <NavBar />
      <Subscribe />
      <a href="/newsletter/archives" style={aStyles}>
        <p style={styles}>Show me past letters &#8594;</p>
      </a>
    </Background>
  );
}

export default Newsletter;
