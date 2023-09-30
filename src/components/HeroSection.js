import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';


function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>LINE DEJGAARD</h1>
      <p>Master's Student in Computer Science</p>
      <div className='hero-btns'>
        
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          page={"/experience"}
        >
          EXPERIENCE
        </Button>

        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          page={"/education"}
        >
          EDUCATION
        </Button>

        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          page={"/contact"}
        >
          CONTACT
        </Button>

      </div>
    </div>
  );
}

export default HeroSection;


