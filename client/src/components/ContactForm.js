import React from 'react'
import '../assets/stylesheets/ContactForm.css'


const ContactForm = (props) => {

  return (
    <div className="contactWrapper">
      <h1 className="form-field header">Contact Me!</h1>
      <form id='ContactForm' action="https://formspree.io/pierrelouisgenny@gmail.com" method="POST">
        <div className="form-input">
          <label htmlFor="your-name">Your Name</label>
          <input
            id="your-name"
            type="text"
            name="your-name"
            maxLength="60"
            autoComplete="off"
            className="form-field name-input"
          />
        </div>

        <div className="form-input">
          <label htmlFor="your-email">Your email</label>
          <input
            id="your-email"
            type="text"
            name="your-email"
            maxLength="60"
            autoComplete="off"
            className="form-field email-input"
          />
        </div>
        <div className="form-input">
          <label htmlFor="your-message">Your Message</label>
          <textarea id="your-message"
            name="your-message"
            cols="40"
            rows="10"
            className="form-field message-text-area"
          />
        </div>
        <div className="form-input">
          <button type="submit">Send</button>
          <button type="reset">Reset</button>
          {/* <input type="reset"/> */}
        </div>
      </form >
    </div>
  )
}

export default ContactForm

