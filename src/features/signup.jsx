import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';




  






const Signup = () => {
  
  useEffect(()=>{

  },[])
  const[Givevalueuser,setGivevalueuser]=useState('')
  const[Givevaluepass,setGivevaluepass]=useState('')
  const postrequest= async ()=>{
    const post={username:Givevalueuser,password:Givevaluepass}

    return await axios.post('http://localhost:4000/api/user/signup/',
      post
  )
      
  }
 
  const submithandler=(event)=>{
  event.preventDefault();
// let a= postrequest();
//  a.then((response)=>{
//   const {data}=response
//   console.log(data)
//})
  setGivevaluepass("")
  setGivevalueuser("")
  console.log(Givevaluepass,Givevalueuser)
  postrequest()

  
  
}
  
  
  

  
  const Usernamehandler=(e)=>{
   setGivevalueuser(e.target.value) 
  }
  const passhandler=(event)=>{
    setGivevaluepass(event.target.value)
    
  }
  

  
  
 


  return (
    <form onSubmit={submithandler} >
    <div class="mb-3 mt-3">
      <label >USERNAME</label>
      <input type="email" className="form-control"  placeholder="Enter email" value={Givevalueuser}  onChange={Usernamehandler} />
    </div>
    <div className="mb-3">
      <label >Password:</label>
      <input type="password" className="form-control"  placeholder="Enter password" value={Givevaluepass} onChange={passhandler} />
    </div>
   
    <button type="submit" className="btn btn-primary" onClick={submithandler} >Submit</button>
  </form>
    
    
    )
}

export default Signup