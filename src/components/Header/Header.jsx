import React, { useState } from 'react'
import './Header.css'
import Logo from '../../assets/logo.png';
import bars from '../../assets/bars.png';
import { Link } from 'react-scroll';

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [MenuOpen, setMenuOpen] = useState(false);
  return (
    <div className='header'>
    
        <img src={Logo} alt="logo" className='logo' />
          {(MenuOpen === false && mobile === true ) ? (

          <div style={{backgroundColor: 'var(--appColor)',
           padding: '0.5rem', borderRadius:'5px', }}
           onClick={()=> setMenuOpen(true) } >

            <img src={bars} alt="" 
            style={{width: '1.5rem', height: '1.5rem' }}/>

          </div>

          ) : (  
          <ul className='header-menu'>
            <li> 
              <Link 
              onClick={()=> setMenuOpen (false)}
              activeClass="active"
              to='home'  spy={true} smooth={true}>
              Home
              </Link>
            </li>

            <li> 
              <Link 
              onClick={()=> setMenuOpen (false)}
              to='programs'  spy={true} smooth={true}>
              Programs
              </Link>
            </li>
            
            <li> 
              
              About Us
              
            </li>

            <li> 
              <Link 
              onClick={()=> setMenuOpen (false)}
              to='reasons'  spy={true} smooth={true}>
              Why us
              </Link>
            </li>

          </ul>
        )}
    </div>
  )
}

export default Header
// 