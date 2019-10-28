import React from 'react'
import Navbar from './LandingPage'


class dogsForAdoption extends React.Component {
    state = {
        id: "",
        species: "",
        breed: "",
        age: "",
        gender: "",
        spayed_neutered: "",
        house_trained: "",
        name: "",
        email: "",
        phone: "",
        street_address: "",
        city: "",
        state: "",
        zip_code: "",
        photos: ""

    }

    componentDidMount() {
        fetch('/api/animals')
            .then(response => response.json())
            .then(data => this.setState({
                id: data.id,
                species: data.species,
                breed: data.breed,
                age: data.age,
                gender: data.gender,
                spayed_neutered: data.spayed_neutered,
                house_trained: data.house_trained,
                name: data.name,
                email: data.email,
                phone: data.phone,
                street_address: data.street_address,
                city: data.city,
                state: data.state,
                zip_code: data.zip_code,
                // photos: data.photos[0]
            }))
    }
    render() {
        // let dogs = this.state.animals.filter(animal => {
        //     return animal.species === 'Dog' && animal.photo
        // })
        // console.log(dogs)
        // let animals = dogs.map((animals, key) =>
        //     <div key={animals.name}>
        //         <img src={this.state.photos} alt="dogs" />
        //         {animals.name}
        //     </div>
        // )

        return (
            <div className="pets">
                {this.animals}
            </div >
        )
    }
}
export default dogsForAdoption