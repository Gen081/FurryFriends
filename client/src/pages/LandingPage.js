import React from 'react';
import '../assets/stylesheets/landingpage.css';
import dog from '../assets/images/dog.jpg';
// import PageTwo from './PageTwo'

const LandingPage = () => {
  const handleClick = () => {
    window.location = '/dogsForAdoption';
  };
  return (
    <div className="img-wrapper">
      <div className="hero-content">
        <div className="about">
        <p>Connecting adoptable pets with families.</p>
        </div>
        <div className="center-btn-wrapper">
        <button onClick={handleClick} className="center-btn">
          Find your Companion!
        </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
