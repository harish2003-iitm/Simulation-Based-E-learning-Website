import React from 'react';
import {NavLink,Link} from "react-router-dom";

const Header = () => {
  return (
    
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <Link to="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
        <svg className="bi me-2" width="40" height="32" role="img"></svg>
      </Link>

      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><NavLink to="/" className="nav-link px-2 link-dark">Home</NavLink></li>
        <li><NavLink to="/courses" className="nav-link px-2 link-dark">Courses</NavLink></li>
        <li><NavLink to="/about" className="nav-link px-2 link-dark">About</NavLink></li>
        <li><NavLink to="/contact" className="nav-link px-2 link-dark">Contact</NavLink></li>
        <li><NavLink to="/login" className="nav-link px-2 link-dark">Login</NavLink></li>
        <li><NavLink to="/signup" className="nav-link px-2 link-dark">Signup</NavLink></li>
        
      </ul>

      
    </header>

  )
}

export default Header