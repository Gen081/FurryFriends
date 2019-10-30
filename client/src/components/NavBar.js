import React from 'react'
import '../assets/stylesheets/navbar.css'
import Paw from '../assets/images/paw.png'
import Peek from '../assets/images/peek.jpg'

const Navbar = () => {

      const handleClickAdopt = () => {
      window.location = '/dogsForAdoption';
    };

      const handleClickContact =() => {
        window.location = '/dogs';
      }

  return (
  <nav>
    <ul>
      <li><a href="/"><img className="paw" src={Paw} alt={"paw"}/></a></li>
      <li className="web-name"><h1>FurryFriendFinder</h1></li>
      <li className="slogan">Adopt a Friendly Companion</li>
    </ul>
    <div className="btn" style= {{ backgroundImage: `url(${Peek})`, 
    backgroundSize: `cover`, borderRadius: `5px`, 
    backgroundRepeat: `no-repeat`}}>
    
      <button onClick={handleClickAdopt} className="nav-btn">Adopt</button>
      <button onClick={handleClickContact} className="nav-btn">Contact</button>
      <button className="nav-btn">LogIn</button>
    </div>
  </nav>
  )}

export default Navbar
