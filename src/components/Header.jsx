import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css'

function CollapsibleExample({currentPage, setCurrentPage}) {
    const [isSticky, setSticky] = useState(false);

    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

  return (
    <header className={isSticky ? 'sticky' : ''}>
        <Navbar collapseOnSelect expand="lg" >
        <Container>
            <Navbar.Brand href="#home" className='tabs' onClick={() => setCurrentPage('home')}>Dani Bano</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
                <Nav.Link href="#about" className='tabs' onClick={() => setCurrentPage('about')}>About</Nav.Link>
                <Nav.Link href="#portfolio" className='tabs' onClick={() => setCurrentPage('portfolio')}>Portfolio</Nav.Link>
                <Nav.Link href="#resume" className='tabs' onClick={() => setCurrentPage('resume')}>Resume</Nav.Link>
                <Nav.Link href="#contact" className='tabs' onClick={() => setCurrentPage('contact')}>Contact</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </header>
    );
}

export default CollapsibleExample;