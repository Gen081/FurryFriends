import React from 'react'
import { Link } from 'react-router-dom';

const Results = props => {
    let { animals, breed, age, gender } = props
    console.log(animals, gender)

    if (breed) {
        animals = animals.filter(animal => {
            return animal.breed.toLowerCase().includes(breed.toLowerCase())
        })
    }

    if (age !== "all") {
        animals = animals.filter(animal => {
            return animal.age.toLowerCase().includes(age.toLowerCase())
        })
    }

    if (gender !== "all") {
        animals = animals.filter(animal => {
            return animal.gender.toLowerCase().includes(gender.toLowerCase())
        })
    }

    console.log(animals)
    return (
        <div className="dogs">
            {animals.map(dog => {
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
    )
}



export default Results