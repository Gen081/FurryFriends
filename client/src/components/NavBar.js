import React from 'react'
import '../assets/stylesheets/navbar.css'
import Paw from '../assets/images/paw.png'
import Peek from '../assets/images/peek.jpg'

const Navbar = () => (
  <nav>
    <ul>
      <li><img className="paw" src={Paw} alt={"paw"}/></li>
      <li><h1>FurryFriendFinder</h1></li>
      <li className="slogan">Adopt a Friendly Companion</li>
    </ul>
    <div className="btn">
      <img className="peek" src={Peek} alt={"peek"}/>
      <button>Services</button>
      <button>Resouces</button>
      <button>LogIn</button>
    </div>
  </nav>
)

export default Navbar
