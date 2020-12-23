import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import Header from './Header'
import Posts from './Posts'

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/page/:page">
          <Posts />
        </Route>
        <Redirect from="*" to="/page/1" />
      </Switch>
    </Router>
  )
}

export default App
