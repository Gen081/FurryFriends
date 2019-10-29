import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import LandingPage from './pages/LandingPage'
import dogsForAdoption from './pages/dogsForAdoption'
import ShowAnimal from './pages/ShowAnimal'

class App extends React.Component {
  state = {}

  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/dogsForAdoption" component={dogsForAdoption} />
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/pages/animal" component={ShowAnimal} />
        </Switch>
      </BrowserRouter>
    )

  }
}

export default App
