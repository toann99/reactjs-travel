import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <h1>BEST DESTINATIONS AROUND THE WORLD</h1>
      <p>Travel, enjoy <br></br> and live a new <br></br> and full life</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Find out more
        </Button>
        <Button
          className='btns'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          <i className='far fa-play-circle' /> Play Demo
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
