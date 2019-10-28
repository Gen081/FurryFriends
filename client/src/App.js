import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import LandingPage from './pages/LandingPage'
<<<<<<< HEAD
import dogsForAdoption from './pages/dogsForAdoption'
=======
import PageTwo from './pages/PageTwo'
import ShowAnimal from './pages/ShowAnimal'
>>>>>>> c255908d20eb609fe279390808b2af3ded432f60

class App extends React.Component {
  state = {}

  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/animals" component={dogsForAdoption} />
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/pages/animal" component={ShowAnimal} />
        </Switch>
      </BrowserRouter>
    )

  }
}

export default App
