import React from 'react';
import Portfolio from './components/portfolio/Portfolio'
import Header from './components/Header'
import About from './components/about/About'
import Resume from './components/resume/Resume';
import Contact from './components/contact/Contact';
import Home from './components/home/Home'
import Footer from './components/Footer';
import { useState } from 'react';
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    if (currentPage === 'home') {
      return <Home />;
    } else if (currentPage === 'about') {
      return <About />;
    } else if (currentPage === 'portfolio') {
      return <Portfolio />;
    } else if (currentPage === 'resume') {
      return <Resume />;
    } else if (currentPage === 'contact') {
      return <Contact />;
    }
  };

  return (
    <div className='container'>
      <Header currentPage={currentPage} setCurrentPage={handlePageChange} />
        {renderPage()}
      <Footer/>
    </div>
  );

  // return (
  //   <div>
  //     <Header />
  //     <Home />
  //     <About />
  //     <Portfolio/>
  //     <Resume />
  //     <Contact />
  //     <Footer />
  //   </div>
  // )
}

export default App;
