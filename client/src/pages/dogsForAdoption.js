import React from 'react';
import { Link } from 'react-router-dom';

class dogsForAdoption extends React.Component {
  state = {
    animals: []
  };

  //     componentDidMount() {
  //         fetch('/api/animals')
  //             .then(response => response.json())
  //             .then(data => console.log(data))
  //         //for (let i = 0; i < data.length; i++) {
  //         // console.log(data[i])
  //         this.setState({
  //             id: data[i].id,
  //             age: data[i].age,
  //             gender: data[i].gender,
  //             name: data[i].name
  //         })
  //     }
  // }

  componentDidMount() {
    fetch('/api/animals')
      .then(response => response.json())
      .then(data => this.setState({ animals: data }));
  }
  render() {
    console.log(this.state.animals);
    return (
      <>
        <div className="dogFilter">
          <label htmlFor="dogBreed">Type Dog Breed</label>
          <input type="text" id="dogBreed" placeholder="Breed" />

          <label htmlFor="dogAge">Age</label>
          <select id="dogAge">
            <option value="Baby">Baby</option>
            <option value="Young">Young</option>
            <option value="Adult">Adult</option>
          </select>

          <label htmlFor="dogGender">Gender</label>
          <select id="dogGender">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>

        </div>
        <div className="dogs">
          {this.state.animals.map(dog => {
            if (dog.photo) {
              return (
                <div key={dog.id} className="card" id={dog.id}>
                  <img
                    src={dog.photo && dog.photo.medium}
                    width="300px"
                    alt="Dog"
                    className="dog-pics"
                  />
                  <div class="container">
                    <h5>{dog.name}</h5>
                    <h6>{dog.breed}</h6>
                    <p>{dog.city.mia}</p>
                    <Link to={`/dogs/${dog.id}`}>More Info</Link>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </>
    );
  }
}
export default dogsForAdoption;
