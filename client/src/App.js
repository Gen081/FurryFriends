import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import LandingPage from './pages/LandingPage'



class App extends React.Component {
  state = { serverMessage: '' }

  componentDidMount() {
    fetch('/api/demo')
      .then(response => response.json())
      .then(data => this.setState({ serverMessage: data.message }))
  }

  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={LandingPage} />
        </Switch>
      </BrowserRouter>
    )

  }
}

export default App
