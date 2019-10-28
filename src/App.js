import React from 'react';
import { Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Blog from './pages/blog/Blog';
import Money from './pages/articles/Money';
import About from './pages/about/About';
import Projects from './pages/projects/Projects';
import Newsletter from './pages/newsletter/Newsletter';
import ComplicatedThings from './pages/articles/ComplicatedThings';
import Archives from './pages/newsletter/Archives';

function App() {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/blog" component={Blog} />
      <Route path="/about" component={About} />
      <Route path="/money" component={Money} />
      <Route path="/projects" component={Projects} />
      <Route exact path="/newsletter" component={Newsletter} />
      <Route path="/complicatedthings" component={ComplicatedThings} />
      <Route path="/newsletter/archives" component={Archives} />
    </div>
  );
}

export default App;
