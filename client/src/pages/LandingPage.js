import React from 'react'
import '../assets/stylesheets/landingpage.css'

const LandingPage = () => (
  <div>
    <div>
      <img className="dog-image" src={"images/dog.jpg"} alt={"Dog"} />
      <button className="center-btn">Find your Companion!</button>
    </div>
    <p className="about">Connecting adoptable pets with families.</p>
  </div>
)

export default LandingPage
