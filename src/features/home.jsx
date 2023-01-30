import React from "react";
import Header from '../component/header';
import Footer from '../component/footer';
import './home.css';
import logoprime from './edusim-high-resolution-color-logo (2).png';




 const Home = () => {
  return (
    <>
    <Header/>
    <div className="homes">
    <main className="page">
      <h1 className="h1StyleH">Home</h1>
      <div className="divstyleH1">
        <img src={logoprime} className='logoprime'></img>
      </div>
      <div className="divstyleH2">
        <p className='PstyleH'>Let your imagination guide reality.</p>
      </div>
      <div className="btnstuff">
      <a href='http://localhost:3000/courses'>
      <button className='btnH'>Let's Begin!</button>
      </a>
      </div>
    
    
    </main>
    </div>
    <Footer/>
    </>
  )
}
export default Home;
