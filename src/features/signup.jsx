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
  const[emailError,emailErrorHandler]=useState('');
  const[passwordError,passwordErrorHandler]=useState('');
  const navigateToHome = useNavigate();
  
  const postrequest= async ()=>{
    const post={email:Givevalueuser,password:Givevaluepass};

    return await 
   axios.post('http://localhost:4000/api/user/signup/',post)
 
 
  

      
  }
 
  const submithandler=(event)=>{
  event.preventDefault();
  
if(Givevaluepass === ''){
  passwordErrorHandler('Password is required');
  
}else{
  passwordErrorHandler('');
}
if(Givevalueuser === ''){
  emailErrorHandler('Email ID is required');
  
}else{
  emailErrorHandler('');
}
   setGivevaluepass("");
   setGivevalueuser("");
  console.log(Givevaluepass,Givevalueuser);
   let signUPDetails= postrequest();
   signUPDetails.then((response)=>{
   const {data}=response;
   const {token}=data;
   
   
   if (token){
    navigateToHome('/');
    }
  
   

    
  
})

  

   console.log("abc",signUPDetails);
  

  
  
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
        <svg className="bi me-2" width="40" height="32" role="img"></svg>
      </Link>
      <img src={logo} alt='logo lessgo' className= 'logo1'></img>
      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><NavLink to="/" className="nav-link px-2 link-light">Home</NavLink></li>
        <li><NavLink to="/about" className="nav-link px-2 link-light">About</NavLink></li>
        <li><NavLink to="/contact" className="nav-link px-2 link-light">Contact</NavLink></li>
        <li><NavLink to="/login" className="nav-link px-2 link-light">Login</NavLink></li>
        
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