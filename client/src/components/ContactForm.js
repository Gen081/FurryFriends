import React from 'react'
import '../assets/stylesheets/ContactForm.css'


const ContactForm = (props) => {

    return(
      <>
        <h1>Contact Me!</h1>
        <form id='ContactForm'action="https://formspree.io/pierrelouisgenny@gmail.com" method="POST">
          <div className="form-input">
            <label for="your-name">Your Name</label><br></br>
            <input
              id="your-name"
              type="text"
              name="your-name"
              autocomplete="off"
              className="form-field name-input"
            />
          </div>
          <div className="form-input">
            <label for="your-email">Your Email</label><br></br>
            <input 
              id="your-email" 
              type="text"
              name="your-email"
              autocomplete="off"
              className="form-field email-input"
            />
          </div>
          <div className="form-input">
            <label for="your-message">Your Message</label><br></br>
            <textarea id="your-message"
              name="your-message"
              className="form-field message-text-area"
              />
          </div>
          <div className="form-input">
            <button type="submit">Send</button>
            <input type="reset"/>
          </div>
        </form >
      </>        
    )
  }



          
          
          

export default ContactForm

