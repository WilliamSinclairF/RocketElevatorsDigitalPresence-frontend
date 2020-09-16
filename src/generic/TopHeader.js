import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import './Header.scss';
import ScrollUpButton from 'react-scroll-up-button';

export default function Header() {
  return (
    <>
      <Navbar
        sticky='top'
        bg='light'
        collapseOnSelect
        expand='lg'
        className='pb-0'>
        <ScrollUpButton>
          <Navbar.Brand as={Link} to='/'>
            <img
              src={require('../assets/RE_assets/headerlogo.png')}
              height='70'
              className='logo d-inline-block '
              alt='Rocket Logo'
            />
          </Navbar.Brand>
        </ScrollUpButton>

        <Navbar.Toggle />

        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto'>
            <ScrollUpButton>
              <Nav.Link as={Link} to='/' href='/'>
                <p className='fw-300 fs-20 mt-25'>HOME</p>
              </Nav.Link>
            </ScrollUpButton>
            <NavDropdown
              title={<p className='fw-300 fs-20 mb-0 mt-25'>SERVICES</p>}>
              <NavDropdown.Item as={Link} to='/residential' href='/residential'>
                <p className='fw-300 fs-20'>RESIDENTIAL</p>
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} to='/commercial' href='/commercial'>
                <p className='fw-300 fs-20'>COMMERCIAL</p>
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} to='/quote#quote' href='/quote'>
                <p className='fw-300 fs-20'>GET A QUOTE</p>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href='/#portfolio'>
              <p className='fw-300 fs-20 mt-25'>PORTFOLIO</p>
            </Nav.Link>
            <Nav.Link href='#contact'>
              <p className='fw-300 fs-20 mt-25'>CONTACT</p>
            </Nav.Link>
            <Nav.Link
              as={Link}
              to='/quote'
              className='text-blue quote-cta glowButton'>
              <p className='fw-300 fs-20 mt-25'> GET A QUOTE</p>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
