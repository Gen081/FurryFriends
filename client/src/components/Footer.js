import React from 'react'
import '../assets/stylesheets/footer.css';

const Footer = () => (
<footer>
    <ul>
        <li><span src="img">&#9990;</span> Contact us: 1-800-FRIEND</li>
        <li>furryfriend@finder.com</li>
        <div className="icons">
        <a
        href="https://www.facebook.com"
        target="_blank"
        className="facebook social"
        >
        <i class="fab fa-facebook-square"></i>  
        </a>
        <a
        href="https://www.instagram.com"
        target="_blank"
        className="instagram social"
        > 
         <i class="fab fa-instagram"></i>
        </a> 
        <a
        href="https://www.twitter.com"
        target="_blank"
        className="twitter social"
        > 
         <i class="fab fa-twitter"></i>
        </a> 
        
        </div>
    </ul>
</footer>
)

export default Footer