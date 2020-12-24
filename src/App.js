import {
  BrowserRouter,
  HashRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import Header from './Header'
import Posts from './Posts'

function App() {
  const isGithub = window.location.hostname === 'cbcruk.github.io'
  const Router = isGithub ? HashRouter : BrowserRouter

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
