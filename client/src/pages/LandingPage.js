import React from 'react'
import '../assets/stylesheets/landingpage.css'
// import PageTwo from './PageTwo'


const LandingPage = () => {
  return (
    <div className="img-wrapper">
      <img className="dog-image" src={"images/dog.jpg"} alt={"Dog"} />
      <div className="hero-content">
        <a href="/animals"
          className="btn center-btn"

        >Find your Companion!</a>
        <p className="about">Connecting adoptable pets with families.</p>
      </div>
    </div>
  )


}


export default LandingPage
