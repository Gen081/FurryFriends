import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import LandingPage from './pages/LandingPage'
import dogsForAdoption from './pages/dogsForAdoption'
import Footer from './components/Footer'



import ShowAnimal from './pages/ShowAnimal'

class App extends React.Component {
  state = {}

  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Switch>
<<<<<<< HEAD
          <Route exact path="/dogsForAdoption" component={dogsForAdoption} />
=======

          <Route exact path="/animals" component={dogsForAdoption} />

>>>>>>> bad44d0f2447b9608aaf10e7003c38e3c98d7425
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/pages/animal" component={ShowAnimal} />
        </Switch>
        <Footer/>
      </BrowserRouter>
    )

  }
}

export default App
