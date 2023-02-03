import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {NavLink,Link} from "react-router-dom";
import Footer from '../component/footer';
import './signup.css';
import logo from './edusim-low-resolution-color-logo (1).png';




const Signup = () => {

  
  
  const[Givevalueuser,setGivevalueuser]=useState('');
  const[Givevaluepass,setGivevaluepass]=useState('');
  const[emailError,setEmailErrorHandler]=useState('');
  const[passwordError,setPasswordErrorHandler]=useState('');
  const navigateToHome = useNavigate();
  
  
  const postrequest= async ()=>{
    const post={email:Givevalueuser,password:Givevaluepass};

     try{
      const responses =await axios.post('http://localhost:4000/api/user/signup/',post)
      const{data}=responses;
      const{token}=data;
      if (token){
        navigateToHome('/');
        localStorage.setItem("token",token)
        }


      }
      catch(e){
        const {data}=e.response;
        const {error:errorhandler}=data;
        
        if (errorhandler==="Please fill out all fields."){
          setEmailErrorHandler(errorhandler);
          setPasswordErrorHandler(errorhandler)
          setGivevaluepass("");
          setGivevalueuser("");
        };
        if (errorhandler==="Invalid Email"){
          setEmailErrorHandler(errorhandler)
          setPasswordErrorHandler("")
          
          setGivevalueuser("");


        }
        if(errorhandler==="The password is not strong enough."){
          setEmailErrorHandler("")
          setGivevaluepass("");
   setGivevaluepass("");
          setPasswordErrorHandler("The password is not strong enough.")
          
        }
        if (errorhandler==="Email already registered."){
          setEmailErrorHandler(errorhandler)
          setPasswordErrorHandler("")
          setGivevalueuser("")
        }

      }
 
 
  

      
  }
 
  const submithandler=(event)=>{
  event.preventDefault();
  postrequest();
  
  


   
  
   
   
   
  
   

    
  
}

  

   
  

  
  

  
  
  

  
  const Usernamehandler=(e)=>{
   setGivevalueuser(e.target.value) 
  }
  const passhandler=(event)=>{
    setGivevaluepass(event.target.value)
    
  }
  

  
  
 


  return (
    
    <>
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom head-color">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <Link to="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
        <img src={logo} alt='logo lessgo' className= 'logo1'></img>
      </Link>
      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><NavLink to="/" className="nav-link px-2 link-light" id="header-elements">Home</NavLink></li>
        <li><NavLink to="/about" className="nav-link px-2 link-light" id="header-elements">About</NavLink></li>
        <li><NavLink to="/contact" className="nav-link px-2 link-light" id="header-elements">Contact</NavLink></li>
        <li><NavLink to="/signup" className="nav-link px-2 link-light" id="header-elements">Signup</NavLink></li>
        
      </ul>

      
    </header>
    <main className="page">
      <div className='divStyle1'>
      <form className='forminp' onSubmit={submithandler} >
        <h1 className='h1Style'>SIGNUP</h1>
        <br></br>
        <div className="mb-3">
          <label for="username" className='labStyle'>USERNAME:</label>
          <input type="email" id="username" className="form-control" placeholder="Enter email" value={Givevalueuser}  onChange={Usernamehandler} />
          {emailError&& <div className='alert alert-danger erralert'>{emailError}</div>}
        
        </div><br></br>
        <div className="mb-3">
          <label for="password" className='labStyle'>PASSWORD:</label>
          <input type="text" id="password" className="form-control"  placeholder="Enter password" value={Givevaluepass} onChange={passhandler} />
          {passwordError&& <div className='alert alert-danger erralert'>{passwordError}</div>}
          <a href='http://localhost:3000/login' className='User-red'>Already Registered?</a>
        </div><br></br>
        <button type="button" className="btn btn-primary btnStyle" onClick={submithandler} >Submit</button>
      </form>
      </div>
    </main>
    <Footer/>
    
    </>
    
    
    )
}

export default Signup;
