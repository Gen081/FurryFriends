import React from 'react'
import ContactForm from '../components/ContactForm'


class ShowAnimal extends React.Component {
    state ={

    }
    
    fetchAnimals = () => {
        fetch(`/api/Animals/`)
          .then(response => response.json())
          .then(data => this.setState(data))
      } 

    render(){
        return(
            <ContactForm />
        )
    }
}

export default ShowAnimal


   
        // this.props.j
    
     