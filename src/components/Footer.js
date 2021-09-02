import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Subscribe to get information, latest news and other
        </p>
        <p className='footer-subscription-heading'>
          interesting offers about Cobham
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Company</h2>
            <Link to='/'>About</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Mobile</Link>     
          </div>
          <div class='footer-link-items'>
            <h2>Contact</h2>
            <Link to='/'>Help/FAQ</Link>
            <Link to='/'>Press</Link>
            <Link to='/'>Affillate</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>More</h2>
            <Link to='/'>Airlinefees</Link>
            <Link to='/'>Airline</Link>
            <Link to='/'>Low fare tips</Link>
          </div> 
        </div>
        <div className='footer-link-items'>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            </div>
            <div class='social-media'>
            <Link to='/'>Discover our app</Link>
            </div>
          </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <small class='website-rights'>All Rights Reserved</small>
          </div>
      </section>
    </div>
  );
}

export default Footer;
