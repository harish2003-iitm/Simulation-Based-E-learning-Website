import React from 'react'





const Para = (props) => {
  return (
    <a href='http://localhost:3000/login'>
    <p className='p4css'>
        <iframe width="300" height="300" allow="fullscreen" src={props.src} title={props.title}></iframe><br></br>
        <b className='txt'>{props.title}</b>
    </p></a>
  )
}

export default Para;