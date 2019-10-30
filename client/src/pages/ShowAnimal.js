import React from 'react';
import ContactForm from '../components/ContactForm';
import '../assets/stylesheets/showanimal.css'
import Table from 'react-bootstrap/Table'

class ShowAnimal extends React.Component {
  state = {
    name: '',
    age: '',
    breed: '',
    color: '',
    size: '',
    gender: '',
    street_address: '',
    city: '',
    zip: '',
    state: '',
    email: '',
    phone: ''
  };

  componentDidMount() {
    console.log(this.props);
    fetch(`/api/animals/${this.props.match.params.id}`)
      .then(response => response.json())
      //   .then(data => console.log(data));
      .then(data =>
        this.setState({
          name: data.name,
          age: data.age,
          breed: data.breeds.primary,
          color: data.colors.primary,
          size: data.size,
          gender: data.gender,
          street_address: data.contact.address.address1,
          city: data.contact.address.city,
          state: data.contact.address.state,
          zip: data.contact.address.postcode,
          email: data.contact.email,
          phone: data.contact.phone,
          photo: data.image
        })
      );
  }

  render() {
    return (
      <>
        <div>
          <h1 className="dogName">{this.state.name}</h1>
        </div>
        <div className="dogPicture">
          <img
            className="imgDog"
            src={this.state.photo}
            alt=""
          >
          </img>
        </div>

        <div className="dogInfoWrapper">
          <Table striped bordered hover className="table">
            <tbody>
              <tr>
                <td>Name</td>
                <td>{this.state.name}</td>
              </tr>
              <tr>
                <td>Breed</td>
                <td>{this.state.breed}</td>
              </tr>
              <tr>
                <td>Color</td>
                <td>{this.state.color}</td>
              </tr>
              <tr>
                <td>Gender</td>
                <td>{this.state.gender}</td>
              </tr>
              <tr>
                <td>State</td>
                <td>{this.state.city}</td>
              </tr>
              <tr>
                <td>City</td>
                <td>{this.state.city}</td>
              </tr>
              <tr>
                <td>Zip</td>
                <td>{this.state.zip}</td>
              </tr>
              <tr>
                <td>Street</td>
                <td>{this.state.street_address}</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <ContactForm />
      </>
    )
  }
}

export default ShowAnimal;
