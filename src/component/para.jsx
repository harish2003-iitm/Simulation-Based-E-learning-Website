import React from 'react'





const Para = (props) => {
  return (

    <p className='p4css'>
       {localStorage.getItem('token')? <iframe width="300" height="300" allow="fullscreen" src={props.src} title={props.title}></iframe>:    <a href='http://localhost:3000/login'><img src={props.image} alt="image not loaded" width="300" height="300" allow="fullscreen" /></a>}<br></br>
        <b className='txt'>{props.title}</b>
    </p>
  )
}

export default Para;