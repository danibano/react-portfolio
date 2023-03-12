import React from 'react';
import Portfolio from './components/portfolio/Portfolio'
import Header from './components/Header'
import About from './components/about/About'
import Resume from './components/resume/Resume';
import makeParallax from './components/makeParallax';
import Parallax from './components/Parallax';

function App() {
  return (
    <div>
      <Header />
      <About />
      <About />
      <Resume />
      <Portfolio />
    </div>
  );
}

export default App;
