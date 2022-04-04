import React from 'react';
import './Header.css'
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/"> <Image width={200} src='/assets/logo.png'></Image> </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className='justify-content-end' id="responsive-navbar-nav">
                    <Nav>
                        <NavLink to="/" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>Home</NavLink>
                      
                        <NavLink to="/reviews" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>Reviews</NavLink>
                        <NavLink to="/dashboard" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>Dashboard</NavLink>
                        <NavLink to="/blogs" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>Blogs</NavLink>
                        <NavLink to="/about" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>About</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;