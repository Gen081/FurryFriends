import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import LandingPage from './pages/LandingPage'
import PageTwo from './pages/PageTwo'

class App extends React.Component {
  state = {}

  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/animals" component={PageTwo} />
          <Route exact path="/" component={LandingPage} />
        </Switch>
      </BrowserRouter>
    )

  }
}

export default App
