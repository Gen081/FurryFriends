import React from 'react'


const Navbar = () => (
  <nav>
    <ul>
      <li> <img className="paw" src={"images/paw.png"} alt={"paw"} /></li>
      <li><h1>FurryFriendFinder</h1></li>
      <li className="slogan">Adopt a Friendly Companion</li>
    </ul>
    <div className="btn">
      <img className="peek" src={"images/peek.jpg"} alt={"peek"} />
      <button>Services</button>
      <button>Resouces</button>
      <button>LogIn</button>
    </div>
  </nav>
)

export default Navbar
