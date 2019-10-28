import React from 'react';
import Background from '../../components/Background';
import NavBar from '../../components/NavBar';

import './archives.scss';

function Archives() {
  return (
    <Background>
      <NavBar />
      <div className="content">
        <h2>Newsletter Archives</h2>
        <div className="letters">
          <a
            className="archive"
            href="https://mailchi.mp/4d5797e90f91/on-brown-street-1"
          >
            OBS #1 - About OBS
          </a>
          <a
            className="archive"
            href="https://mailchi.mp/7a5773f15f11/on-brown-street-3576225"
          >
            OBS #2 - My Favorite Activity
          </a>
          <a
            className="archive"
            href="https://mailchi.mp/2ebd6bb49cd3/on-brown-street-3591197"
          >
            OBS #3 - Why We Complicate Things
          </a>
          <a
            className="archive"
            href="https://mailchi.mp/3f3223d3f237/on-brown-street-3607221"
          >
            OBS #4 - Stripe
          </a>
          <a
            className="archive"
            href="https://mailchi.mp/ac3641d3a5ca/on-brown-street-3618817"
          >
            OBS #5 - Beware of Imitation
          </a>
          <a
            className="archive"
            href="https://mailchi.mp/cb4da3214477/on-brown-street-3631357"
          >
            OBS #6 - Progress
          </a>
          <a
            className="archive"
            href="https://mailchi.mp/9c6813eb4149/on-brown-street-3639673"
          >
            OBS #7 - Apple
          </a>
          <a
            className="archive"
            href="https://mailchi.mp/64c3b219022c/on-brown-street-3658501"
          >
            OBS #8 - Risk
          </a>
          <a
            className="archive"
            href="https://mailchi.mp/aeabe8783efb/on-brown-street-3668681"
          >
            OBS #9 - Open-sourcing Your Thoughts
          </a>
          <a
            className="archive"
            href="https://mailchi.mp/cd2e5ea51574/on-brown-street-3677561"
          >
            OBS #10 - Passion Hacking
          </a>
        </div>
      </div>
    </Background>
  );
}

export default Archives;
