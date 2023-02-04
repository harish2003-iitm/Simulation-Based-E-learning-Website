import React from 'react';
import {NavLink,Link} from "react-router-dom";
import "./header.css";
import logo from '../features/edusim-low-resolution-color-logo (1).png';
import { useLogout } from '../features/useLogout';
import { UserContext } from '../App';
import { useContext } from "react";

const Header = () => {
  const { logout } = useLogout()

  const handleClick = () => {
    logout()
  }
  const { state, dispatch } = useContext(UserContext);

  const RenderMenu = () => {
    if (state) {
      return (
        <>
          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li><NavLink to="/" className="nav-link px-2 link-light" id="header-elements">Home</NavLink></li>
            <li><NavLink to="/courses" className="nav-link px-2 link-light" id="header-elements">Courses</NavLink></li>
            <li><NavLink to="/about" className="nav-link px-2 link-light" id="header-elements">About</NavLink></li>
            <li><NavLink to="/contact" className="nav-link px-2 link-light"id="header-elements">Contact</NavLink></li>
            <li><button className='logbtn' onClick={handleClick}>Logout</button></li> 
          </ul>
        </>
      )
    }
    else {
      return (
        <>
          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li><NavLink to="/" className="nav-link px-2 link-light" id="header-elements">Home</NavLink></li>
            <li><NavLink to="/courses" className="nav-link px-2 link-light" id="header-elements">Courses</NavLink></li>
            <li><NavLink to="/about" className="nav-link px-2 link-light" id="header-elements">About</NavLink></li>
            <li><NavLink to="/contact" className="nav-link px-2 link-light"id="header-elements">Contact</NavLink></li>
            <li><NavLink to="/login" className="nav-link px-2 link-light" id="header-elements">Login</NavLink></li>
            <li><NavLink to="/signup" className="nav-link px-2 link-light" id="header-elements">Signup</NavLink></li>
          </ul>
        </>
      )
    }
  }
  return (
    
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom buildathon-header">
      <Link to="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
        <img src={logo} alt='logo lessgo' className= 'logo'></img>
      </Link>
      <RenderMenu/>
    </header>

  )
}

export default Header
