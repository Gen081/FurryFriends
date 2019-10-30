import React from 'react'
import '../assets/stylesheets/ContactForm.css'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ContactForm = (props) => {

  return (
    <div className="contactWrapper">
      <div className="contactHeader">
        <h1>Adopt this pet...</h1>
        <h2>Get in Touch!</h2>
      </div>
      <Form>
        <Row>
          <Col>
            <Form.Control placeholder="Name" />
          </Col>
          <Col>
            <Form.Control type="email" placeholder="name@example.com" />
          </Col>
        </Row>
        <Row className="message">
          <Col>
            <Form.Control as="textarea" rows="3" placeholder="Message" />
          </Col>
        </Row>
      </Form>
    </div>
  )
}

export default ContactForm

