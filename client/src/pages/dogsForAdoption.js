import React from 'react';
import Results from '../components/Results'

class dogsForAdoption extends React.Component {
  state = {
    animals: [],
    breed: '',
    age: 'all',
    gender: 'all'
  };

  componentDidMount() {
    fetch('/api/animals')
      .then(response => response.json())
      .then(data => this.setState({ animals: data }));
  }

  handleBreed = (e) => {
    let breed = e.target.value
    this.setState({ breed })
  }

  handleAge = (e) => {
    let age = e.target.value
    this.setState({ age })
  }

  handleGender = (e) => {
    let gender = e.target.value
    this.setState({ gender })
  }

  render() {
    console.log(this.state.animals);
    const { animals, breed, age, gender } = this.state
    return (
      <>
        <div className="dogFilter">
          <label htmlFor="dogBreed">Type Dog Breed</label>
          <input type="text" id="dogBreed" placeholder="Breed" value={breed} onChange={this.handleBreed} />

          <label htmlFor="dogAge">Age</label>
          <select value={age} id="dogAge" onChange={this.handleAge}>
            <option value="Baby">Baby</option>
            <option value="Young">Young</option>
            <option value="Adult">Adult</option>
            <option value="all">All</option>
          </select>

          <label htmlFor="dogGender">Gender</label>
          <select value={gender} id="dogGender" onChange={this.handleGender}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="all">All</option>
          </select>
        </div>
        <Results {...this.state} />

      </>
    );
  }
}
export default dogsForAdoption;
