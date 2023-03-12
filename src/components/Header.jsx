import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css'

function CollapsibleExample() {
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
            <Navbar.Brand href="#home">Dani Bano</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                <Nav.Link href="#resume">Resume</Nav.Link>
                <Nav.Link href="#conact">Contact</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </header>
    );
}

export default CollapsibleExample;