import React from 'react'
import Navbar from './LandingPage'


class dogsForAdoption extends React.Component {

    state = {
        animals: []

    }

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
            .then(data => this.setState({ animals: data }))
    }
    render() {
        console.log(this.state.animals)
        return (
            <div className="dogs">
                {
                    this.state.animals.map(dog => {
                        return (
                            <div key={dog.id} className="card">
                                <img src={dog.photo && dog.photo.large} />
                                <div class="container">
                                    <h4><b>{dog.name}</b></h4>
                                    <p>{dog.state}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }


}
export default dogsForAdoption

