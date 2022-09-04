import React,{useState} from 'react';
import Header from '../Header/Header';
import './Hero.css';
import Pos from '../../assets/posture.png';
import Inf from '../../assets/info.jpeg';
import Swal from 'sweetalert2'
import Joyride from 'react-joyride';
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import heart from '../../assets/heart.png';
import calories from '../../assets/calories.png';

import {motion} from 'framer-motion';
// import NumberCounter from 'number-counter';

const Hero = () => {
  const ModalShow = {
    
    "display": "block",
    "zIndex": "999",
    "width": "90%",
    "height": "120%",
    "position": "absolute",
    "top": "120vh",
    "left": "70px",
    "borderRadius": "20px",
  "transform": "translateZ(0px)",
  "overflow": "hidden"
}

const ModalHide = {
  
  "display": "none",
  "zIndex": "999",
  "width": "90%",
  "height": "120%",
  "position": "absolute",
  "top": "120vh",
  "left": "70px",
  "borderRadius": "20px",
  "transform": "translateZ(0px)",
  "overflow": "hidden"
}

  const transition = {type: 'spring', duration : 10 }
  const mobile = window.innerWidth <= 768 ? true : false;
  const [display, setdisplay] = useState(ModalHide);

  const steps = [
    {
      target: '.btn.btn-j',
      content: `is a YOGA Posture correction Machine Learning based Web App\nthat helps to practice yoga\n click on that show projection to open modal`,
    },
    {
      target: '.btn.btn-learn',
      content: 'Click on this button to load ML Model \n ML model will take some time to load please wait...',
    },
    {
      target: '.mlmodel',
      content: <img src={Pos} alt="img" height="300px" width="330px"/>,
    },
    {
      target: '.btn.btn-started',
      content: 'Click This Button to close ML Model',
    }
  ]

  const fallback = () => {
    alert("Ml model in building progress...");
  }

  const mlstart = () =>{
    Swal.fire({
      icon: 'info',
      text: 'Click on Show Projection 😀',
      imageUrl: Inf,
      imageWidth: 500,
      imageHeight: 350,
      imageAlt: 'Custom image',
    })
  } 


  return (
  <div className='hero' id='home'>
  <Joyride
          steps={steps}
          showProgress={true}
         
        />
      <div className="blur blur-hero"></div>
    <div className="left-h">
      {/* Header */}
        <Header/>
      {/* The best ad */}
        <div className="the-best-ad">
          {/* Motion */}
          <motion.div
            initial={{left: mobile? '170px' : '238px' }}
            whileInView={{left: '8px'}}
            transition={{...transition, type: 'tween'}}>
          </motion.div>
          <span>Bend your mind, inspire yourself</span>
        </div>

      {/* Hero heading */}
        <div className="hero-text">
          <div>
            <span className='stroke-text'>Shape </span>
            <span>Your</span>
          </div>

          <div>
            <span>Ideal body</span>
          </div>
          
          <div>
            <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
          </div>
        </div>

      {/* Figures */}
        {/* <div className="figures">
          <div> 
            <span>
              <NumberCounter end={150} start={100} delay='3' 
              postFix="+"/>
            </span>
            <span>Expert coaches</span>
          </div>
          <div> 
            <span>
            <NumberCounter end={1050} start={750} delay='2' 
              postFix="+"/>
            </span>
            <span>members joined</span>
          </div>
          <div> 
            <span>
            <NumberCounter end={70} start={20} delay='2' 
              postFix="+"/>
            </span>
            <span>Fitness Programs</span>
          </div>
        </div> */}
      
      {/* HERO BUTTONS */}
        <div className="hero-buttons">
          <buttons className="btn btn-learn" onClick={() => setdisplay(ModalShow)}>Show Projection</buttons>
          <buttons className="btn btn-started" onClick={() => setdisplay(ModalHide)}>Close Model</buttons>
        </div>
        <center><div className="mlmodel" style={{"borderRadius":"30px"}}>
        <iframe src="https://srini-movenet.web.app/" scrolling="no" allow="camera;microphone" width="100%" height="100%" title='frame' style={display} onError={fallback}></iframe>
        </div></center>

    </div>
      <div className="right-h">
        {/* join now btn */}
        <button className="btn btn-j" onClick={() => mlstart()}>Start Journey</button>


        {/* Heart rate box */}
        <motion.div
        initial={{right: '-1rem'}}
        whileInView={{right: ' 4rem'}}
        transition={transition}
        className="heart-rate">
          <img src={heart} alt="" />
          <span>Heart Rate</span>
          <span>120 BPM</span>
        </motion.div>

        {/* Hero Imgs */}
        <img src={hero_image} alt="" className='hero-image' />
        <motion.img 
        initial={{ right: '11rem'}}
        whileInView={{right: '20rem' }}
        transition={transition}
        src={hero_image_back} alt="" className='hero-image-back' />

        {/* Calories Box */}

        <motion.div className="calories"
        initial={{right: '37rem'}}
        whileInView={{right: '28rem'}}
        transition={transition}
        >
          <img src={calories} alt="" />
          <div>
          <span>Calories Burned</span>
          <span>500 kcal</span>
          </div>
        </motion.div>

      </div>

  </div>



  )
}
 

export default Hero;

// 