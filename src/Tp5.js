import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import BtnToggle from './BtnToggle';
import { ThemeContext } from './ThemeContext';
import LangueContext from './LangueContext';
import Icons from './Icons';
import Ccontent from './Ccontent';

import './Tp5.css';

export default function Tp5() {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <Navbar expand="lg" bg={theme ? 'dark' : 'light'} variant={theme ? 'dark' : 'light'}>
        <Container>
          <Navbar.Brand href="#home">NavBarLinks</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/CalcState">Calculatrice</Nav.Link>
              <Nav.Link as={Link} to="/Slider">Slider</Nav.Link>
              <Nav.Link as={Link} to="/Formtasks">To Do Tasks</Nav.Link>
              <Nav.Link as={Link} to="/UseEffectTp">API</Nav.Link>
              <BtnToggle />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <LangueContext>
        <Icons />
        <Ccontent />
      </LangueContext>
    </div>
  );
}
