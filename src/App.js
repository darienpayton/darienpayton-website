import React from 'react';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Money from './pages/articles/Money';
import About from './pages/About';
import Projects from './pages/Projects';
import Newsletter from './pages/Newsletter';
import ComplicatedThings from './pages/articles/ComplicatedThings';

function App() {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/blog" component={Blog} />
      <Route path="/about" component={About} />
      <Route path="/money" component={Money} />
      <Route path="/projects" component={Projects} />
      <Route path="/newsletter" component={Newsletter} />
      <Route path="/complicatedthings" component={ComplicatedThings} />
    </div>
  );
}

export default App;
