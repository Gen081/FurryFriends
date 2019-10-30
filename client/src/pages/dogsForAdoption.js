import React from 'react';
import { Link } from 'react-router-dom';

class dogsForAdoption extends React.Component {
  state = {
    animals: []
  };

  componentDidMount() {
    fetch('/api/animals')
      .then(response => response.json())
      .then(data => this.setState({ animals: data }));
  }
  render() {
    console.log(this.state.animals);
    return (
      <>
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
