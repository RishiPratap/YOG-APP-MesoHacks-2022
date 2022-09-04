import React from 'react';
import './Reason.css';
import image1 from '../../assets/image1.jpg';
import image2 from '../../assets/image2.jpg';
import image3 from '../../assets/image3.jpg';
import image4 from '../../assets/image4.jpg';
import nb from '../../assets/nb.png';
import adidas from '../../assets/adidas.png';
import nike from '../../assets/nike.png';
import tick from '../../assets/tick.png';

const Reasons = () => {
  return (
    <div className="Reasons" id="reasons">

        {/* Left section */}
        <div className="left-r">
            <img src={image1} alt="reason image1" />
            <img src={image2} alt="reason image2" />
            <img src={image3} alt="reason image3" />
            <img src={image4} alt="reason image4" />
        </div>
        {/* Right section */}
        <div className="right-r">
            <span>some reasons</span>
            
            <div>
                <span className="stroke-text">why</span>
                <span> choose us ?</span>
            </div>

            <div className='details-r'>
                <div className='details-img-text'>
                    <img src={tick} alt="" />
                    <span>easy option for procrastinators</span>
                </div>
                <div className='details-img-text'>
                    <img src={tick} alt="" />
                    <span>multiple options to explore</span>
                </div>
                <div className='details-img-text'>
                    <img src={tick} alt="" />
                    <span>cost-effective</span>
                </div>
                <div className='details-img-text'>
                    <img src={tick} alt="" />
                    <span>offers comfortable space</span>
                </div>

                <div className="our-partners">
                    <span>Our partners</span>
                </div>

                <div className='partner-img'>
                <img src={nb} alt="" />
                <img src={adidas} alt="" />
                <img src={nike} alt="" />
                </div>

            </div>


        </div>

    </div>
  )
}

export default Reasons
// 