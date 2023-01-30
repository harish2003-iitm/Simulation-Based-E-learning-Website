import React from 'react';
import Header from '../component/header';
import Footer from '../component/footer';
import './about.css';
import about1 from './about1.png';
import about2 from './about2.png';


const About = () => {
  return (
<>
    <Header/>
    <div className='divStyleX'>
    <main className="page">
    <h1 className='h1styleX'>About Us</h1>
    <h2 className='h2StyleX'>"Our aim is to to offer the best learning outcomes in various educational and workplace settings, providing learners with a realistic & immersive experience."</h2>
    <img className='imgStyleX' src={about1}></img>
    <div className='divstyleX1'>Simulation-based training is among the most personalized training techniques that aim to boost employee learning. It offers individualized learning experiences, providing different types of employee training.</div>
    <img className='imgStyleY' src={about2}></img>
    <div className='divstyleX2'>Benefits of working on our website:
    <ul>
      <li>Safer Environment</li>
      <li>Inexpensive</li>
      <li>Continuous Learning</li>
      <li>Personalised Learning</li>
    </ul>
    </div>
    </main>
    </div>
    <Footer/>
</>
  )
}


export default About;