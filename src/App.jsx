import { useState } from "react";
import reactLogo from "./assets/react.svg";

import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Article from "./components/Article";
import About from "./components/About";
//import all the images
import drone1 from "./assets/images/drone1.jpg";
import drone2 from "./assets/images/drone2.jpg";
import drone4 from "./assets/images/drone4.jpg";
import drone5 from "./assets/images/drone6.jpg";
import drone6 from "./assets/images/drone8.jpg";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";

function App() {
  const imageInfo = [
    { text: "How to automate survillian drones", path: drone1 },
    { text: "Robotics and Artificial Intellligence", path: drone2 },
    { text: "Improve lives theough Robotic Prosthetics", path: drone4 },
    { text: "Power of Robotics in Agriculture", path: drone5 },
  ];


  //for scrilling to the section
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
  
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
  
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 20, 
                behavior: 'smooth'
            });
        }
    });
  });

  return (
    <>
      <div className="section1">
        <Header />
        <div className="hero">
          <h1>DRONOTICZ</h1>
          <h3>THE ERA OF DRONES</h3>
          <hr className="horizontal_line" />
        </div>
      </div>
      <Article images={imageInfo} />
      <About drone6={drone6} />
      <Subscribe/>
      <Footer/>



      
    </>
  );
}

export default App;
