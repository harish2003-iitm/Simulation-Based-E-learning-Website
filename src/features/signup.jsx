import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {NavLink,Link} from "react-router-dom";
import Footer from '../component/footer';



//css stuff
const mainStyle = {
  
  display: 'flex',
  
  
    
  }
const h1Style = {
  textAlign: 'center',
  color: 'white',
}
const imgStyle = {
  width: '648px',
  objectPosition: 'right'
}
const formStyle = {
  padding: '50px',
  border: '2px solid white',
  width: '500px',
  height: '500px',
  backgroundImage: "url('https://cdn1.vogel.de/q9OlbLDPYhYjjrG10U4jrBe9Bqg=/fit-in/1000x0/p7i.vogel.de/wcms/ee/55/ee555de95124d8ee007ab43118af46b4/0106019265.jpeg')",
}
const divStyle1 = {
  flex: '0 0 auto',
  width: '50%'
}
/*const divStylemain = {
  background: 'cyan',
  objectPosition: 'cover'
}*/
const labStyle = {
  color: 'white'
}
const btnStyle = {
  marginLeft: '38%',
  fontSize: '20px'
}




const Signup = () => {

  
  
  const[Givevalueuser,setGivevalueuser]=useState('');
  const[Givevaluepass,setGivevaluepass]=useState('');
  const[emailError,emailErrorHandler]=useState('');
  const[passwordError,passwordErrorHandler]=useState('');
  const navigateToHome = useNavigate();
  
  const postrequest= async ()=>{
    const post={email:Givevalueuser,password:Givevaluepass};

    return await axios.post('http://localhost:4000/api/user/signup/',
      post
  );
      
  }
 
  const submithandler=(event)=>{
  event.preventDefault();
  debugger
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
  // setGivevaluepass("");
  // setGivevalueuser("");
  console.log(Givevaluepass,Givevalueuser);
   let signUPDetails= postrequest();
   signUPDetails.then((response)=>{
   const {data}=response;
   const {token}=data;
   //console.log("durgesh error",error)
   if (token){
    navigateToHome('/');
   }
  //  if (token) {

     
  //    setErrorhandler("Please check the validity of your email and password");
  //    console.log("abcde",errorhandler);

  //  }
   

    
  
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
    //<div style={divStylemain}>
    <>
    
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <Link to="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
        <svg className="bi me-2" width="40" height="32" role="img"></svg>
      </Link>

      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><NavLink to="/" className="nav-link px-2 link-dark">Home</NavLink></li>
        <li><NavLink to="/about" className="nav-link px-2 link-dark">About</NavLink></li>
        <li><NavLink to="/contact" className="nav-link px-2 link-dark">Contact</NavLink></li>
        <li><NavLink to="/login" className="nav-link px-2 link-dark">Login</NavLink></li>
        
      </ul>

      
    </header>
    <main className="page" style={mainStyle}>
      <div style={divStyle1}>
      <form style={formStyle} onSubmit={submithandler} >
        <h1 style={h1Style}>SIGNUP</h1>
        <br></br>
        <div className="mb-3">
          <label for="username" style={labStyle}>USERNAME:</label>
          <input type="email" id="username" className="form-control" placeholder="Enter email" value={Givevalueuser}  onChange={Usernamehandler} />
          {emailError&& <div className='alert alert-danger'>{emailError}</div>}
        
        </div><br></br><br></br>
        <div className="mb-3">
          <label for="password" style={labStyle}>PASSWORD:</label>
          <input type="text" id="password" className="form-control"  placeholder="Enter password" value={Givevaluepass} onChange={passhandler} />
          {passwordError&& <div className='alert alert-danger'>{passwordError}</div>}
        </div><br></br><br></br>
        <button type="button" style={btnStyle} className="btn btn-primary" onClick={submithandler} >Submit</button>
      </form>
      </div>
      <img src='https://wallpaperaccess.com/full/5287561.jpg' style={imgStyle}></img>  
    </main>
    <Footer/>
    
    </>
    //</div>
    
    )
}

export default Signup;