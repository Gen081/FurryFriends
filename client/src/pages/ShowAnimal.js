import React from 'react';
import ContactForm from '../components/ContactForm';

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
    console.log(this.props.match.params);
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
      <div>
        <div>{this.state.name}</div>
        <div>{this.state.age}</div>
        <div>{this.state.breed}</div>
        <div>{this.state.color}</div>
        <div>{this.state.size}</div>
        <div>{this.state.gender}</div>
        <div>{this.state.street_address}</div>
        <div>{this.state.city}</div>
        <div>{this.state.state}</div>
        <div>{this.state.zip}</div>
        <div>{this.state.email}</div>
        <div>{this.state.phone}</div>
        <div>{this.state.photo}</div>

        <ContactForm />
      </div>
    );
  }
}

export default ShowAnimal;

// this.props.j
