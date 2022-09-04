import React from 'react';
import { useRef } from 'react';
import './Join.css';
import emailjs from '@emailjs/browser';

const Join = () => {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_moy19cd', 'template_9rl9l7o', form.current, 'fUD5cY7DMMDVS4BDr')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

  return (
    <div className="Join" id="join-us">

        <div className="left-j">
            <hr />
            <div>
                <span className='stroke-text'>READY TO</span>
                {" "}<span>LEVEL UP</span>
            </div>
            <div>
                <span>YOUR BODY</span>{" "}
                <span className='stroke-text'>WITH US?</span>
            </div>
        </div>


        <div className="right-j">

            <form ref={form} className='email-container'
            onSubmit={sendEmail}>
            
                <input type="email" name='user_email'
                placeholder='Enter Your Email Here'/>
                
                <button className='btn btn-join'>Join Now</button>
            </form>

        </div>

    </div>
  )
}

export default Join
// 