import React from 'react';
import ContactForm from '../components/ContactForm';
import '../assets/stylesheets/showanimal.css'

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
        <div className="dogPicture">
          <img
            src={this.state.photo}
            alt=""
          >
          </img>
        </div>

        <div className="dogInfoWrapper">
          <ul>
            <li>{this.state.name}</li>
            <li>{this.state.age}</li>
            <li>{this.state.breed}</li>
            <li>{this.state.color}</li>
            <li>{this.state.size}</li>
            <li>{this.state.gender}</li>
            <li>{this.state.street_address}</li>
            <li>{this.state.city}</li>
            <li>{this.state.state}</li>
            <li>{this.state.zip}</li>
            <li>{this.state.email}</li>
            <li>{this.state.phone}</li>
          </ul>
          <ContactForm />
        </div>
      </>
    )
  }
}

export default ShowAnimal;
