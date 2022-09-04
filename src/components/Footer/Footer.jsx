import React from 'react';
import './Footer.css';
import GH from '../../assets/github.png';
import IG from '../../assets/instagram.png';
import LI from '../../assets/linkedin.png';
import Logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <div className="Footer-container">
        <hr />
        <div className="footer">
            <div className="socials">
                <a href='https://github.com/curious04/YOG'>
                <img src={GH} alt="" />
                </a>
                <img src={IG} alt="" />
                <img src={LI} alt="" />
            </div>
            
            <div className="logo-f">
                <img src={Logo} alt="" />
            </div>
        </div>

          <div className="blur blur-footer1"></div>
          <div className="blur blur-footer2"></div>
    </div>
  );
}

export default Footer

// 