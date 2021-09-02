import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Jadoo
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Destinations
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Hotels
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Flights
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Bookings
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Login
              </Link>
            </li>           
          </ul>
          {button  && <Button>Sign up</Button>}
              
          <p className='nav-item'>
              <Link
                className='nav-links'
                onClick={closeMobileMenu}
              >
                EN
              </Link>
            </p>          
        </div>
      </nav>
    </>
  );
}

export default Navbar;
