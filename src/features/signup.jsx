import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';




  






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
  passwordErrorHandler('password is required');
  
}else{
  passwordErrorHandler('');
}
if(Givevalueuser === ''){
  emailErrorHandler('email ID is required');
  
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
    <>
    <form onSubmit={submithandler} >
    <div className="mb-3 mt-3">
      <label >USERNAME</label>
      <input type="email" className="form-control"  placeholder="Enter email" value={Givevalueuser}  onChange={Usernamehandler} />
      {emailError&& <div className='alert alert-danger'>{emailError}</div>}
    </div>
    <div className="mb-3">
      <label >Password:</label>
      <input type="text" className="form-control"  placeholder="Enter password" value={Givevaluepass} onChange={passhandler} />
      {passwordError&& <div className='alert alert-danger'>{passwordError}</div>}
    </div>
   
    <button type="button" className="btn btn-primary" onClick={submithandler} >Submit</button>
    
  </form>
  

  </>
    
    
    )
}

export default Signup;