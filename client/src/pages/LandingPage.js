import React from 'react'
import '../assets/stylesheets/landingpage.css'
import dog from '../assets/images/dog.jpg'
// import PageTwo from './PageTwo'


const LandingPage = () => {

  const handleClick = () => {
    window.location = "/dogsForAdoption"
  }
  return (
    <div className="img-wrapper">
      <img className="dog-image" src={dog} alt={"dog"} />
      <div className="hero-content">
        <button onClick={handleClick}
          className="center-btn"
        >Find your Companion!</button>
        <p className="about">Connecting adoptable pets with families</p>
      </div>
    </div>
  )


}


export default LandingPage
