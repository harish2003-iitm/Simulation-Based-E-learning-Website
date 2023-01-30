import React from 'react';
import Header from '../component/header';
import Footer from '../component/footer';
import { FaTelegramPlane, FaLinkedin, FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import './contact.css';

//css stuff

const Contact = () => {
  return (
    <>
    
    <Header/>
    <div className='divStyleA'>
    <main className="page">
      <h1 className='h1styleA'>Contact Details</h1>
      <div className='divStyleB'>
      <h2 className='h2styleA'>Project Executive:</h2>
        <ul>
          <li className='listyle'>G. K. Harish Balaji - <a className='aStyle'>random1.smail.iitm.ac.in</a></li> 
        </ul>
      
      <h2 className='h2styleA'>Project Trainees:</h2>
      <p className='pstyle1'>
        <ul>
          <li>Apratim Mahapatra - <a className='aStyle'>random2.smail.iitm.ac.in</a></li>
          <li>Rudra Pratap Singh - <a className='aStyle'>random3.smail.iitm.ac.in</a></li>
          <li>Durga Nair - <a className='aStyle'>random4.smail.iitm.ac.in</a></li>
          <li>Akshita Ananda - <a className='aStyle'>random5.smail.iitm.ac.in</a></li>
          <li>Pranav B. - <a className='aStyle'>random6.smail.iitm.ac.in</a></li>
        </ul>
      </p>
      </div>
      <div className='divStyleC'>
      <h2 className='h2styleB'>Find us at:</h2><br></br>
      <div><label><FaTelegramPlane className='socialsStyle'/></label><a href='https://telegram.org' target={'/blank'} className='aStyle2'>Telegram</a></div><br></br>
      <div><label><FaTwitter className='socialsStyle'/></label><a href='https://twitter.com' target={'/blank'} className='aStyle2'>Twitter</a></div><br></br>
      <div><label><FaLinkedin className='socialsStyle'/></label><a href='https://linkedin.com' target={'/blank'} className='aStyle2'>LinkedIn</a></div><br></br>
      <div><label><FaFacebookF className='socialsStyle'/></label><a href='https://facebook.com' target={'/blank'} className='aStyle2'>Facebook</a></div><br></br>
      <div><label><FaInstagram className='socialsStyle'/></label><a href='https://instagram.com' target={'/blank'} className='aStyle2'>Instagram</a></div><br></br>
      </div> 
    </main>
    </div>
    <Footer/>
    </>
  )
}

export default Contact;