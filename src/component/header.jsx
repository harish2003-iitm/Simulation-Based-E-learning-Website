import React from 'react';
import {NavLink,Link} from "react-router-dom";
import "./header.css";
import logo from '../features/edusim-low-resolution-color-logo (1).png';

const Header = () => {
  return (
    
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom buildathon-header">
      <Link to="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
        <svg className="bi me-2" width="40" height="32" role="img"></svg>
      </Link>
      <img src={logo} alt='logo lessgo' className= 'logo'></img>
      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><NavLink to="/" className="nav-link px-2 link-light">Home</NavLink></li>
        <li><NavLink to="/courses" className="nav-link px-2 link-light">Courses</NavLink></li>
        <li><NavLink to="/about" className="nav-link px-2 link-light">About</NavLink></li>
        <li><NavLink to="/contact" className="nav-link px-2 link-light">Contact</NavLink></li>
        <li><NavLink to="/login" className="nav-link px-2 link-light">Login</NavLink></li>
        <li><NavLink to="/signup" className="nav-link px-2 link-light">Signup</NavLink></li>
        
      </ul>

      
    </header>

  )
}

export default Header