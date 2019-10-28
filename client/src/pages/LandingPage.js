import React from 'react'
import '../assets/stylesheets/landingpage.css'

const LandingPage = () => (
  <div className="img-wrapper">
    <img className="dog-image" src={"images/dog.jpg"} alt={"Dog"} />
    <div className="hero-content">
      <button className="center-btn">Find your Companion!</button>
      <p className="about">Connecting adoptable pets with families.</p>
    </div>
  </div>


)

export default LandingPage
