/* import React, { useState } from 'react' */
import {Container , Nav , Navbar } from "react-bootstrap";
import { Link } from 'react-router-dom';
export default function NavBar({margin}) {
/*     const [isDarkMode ,setDarkMode] = useState(false);
    const handleChangeDarkMode = (e)=>{
        setDarkMode(!isDarkMode);
    } */
  return (
    <Navbar expand="lg" className={`my-5 bg-c-transparent p-2 fixed-top`}>
    <Container fluid>
        <Navbar.Brand className="ms-5 "><Link className="link-destyle" to="/"><i className="fa-solid fa-utensils bs-orange"></i></Link></Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-t-orange"/>
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/about">About</Link>
            <Link className="nav-link" to="/menu">Menu</Link>
            <Link className="nav-link" to="/gallery">Gallery</Link>
            {/* <Navbar.Brand className={`mx-lg-5 px-3 text-start ${isDarkMode ?"text-dark":"text-white"}`} onClick={handleChangeDarkMode}>
            {isDarkMode? <i className="fa-solid fa-moon"></i>: <i className="fa-solid fa-sun"></i>}
            </Navbar.Brand> */}
        </Nav>
        <div className="book-table-btn d-none d-lg-flex px-4 py-1 me-5"><Link className="link-destyle" to="book-a-table">Book A Table</Link></div>
    </Navbar.Collapse>
    </Container> 
    </Navbar>
    
  )
}
