import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
    <h6>Top selling</h6>
      <h1>Top Destinations</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img2.png'
              text='Rome, Italia'
            />
            <CardItem
              src='images/img3.png'
              text='London, UK'
            />
            <CardItem
              src='images/img4.png'
              text='Full Europe'
            />
          </ul> 
            <ul className='cards__items'>
            <h1>What People Say <br></br> About Us.</h1>
            <CardItem
              src='images/img8.png'
              text='On the Windows talking painted pasture yet its express parties use.'
            />
            </ul>
           
          <ul className='cards__items'>
            <CardItem
              src='images/img5.png'
            />
            <CardItem
              src='images/img6.png'
            />
            <CardItem
              src='images/img7.png'
            />
          </ul>
        </div>
        
      </div>
      
    </div>
  );
}

export default Cards;
