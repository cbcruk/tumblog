import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { injectGlobal } from 'styled-components'
import ScrollToTop from './components/ScrollToTop'
import { Home } from './pages'
import rootSaga from './sagas'
import configureStore from './store/configureStore'

const store = configureStore()
store.runSaga(rootSaga)

// tslint:disable-next-line
injectGlobal`
  *,
  *::before,
  *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #eee;
  }

  a {
    text-decoration: none;
    color: inherit;

    &:hover,
    &:foucs {
      text-decoration: underline;
    }
  }

  img {
    vertical-align: top;
  }
`

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <ScrollToTop>
        <Switch>
          <Route path="/page" component={Home} />
          <Redirect to="/page/1" />
        </Switch>
      </ScrollToTop>
    </Router>
  </Provider>,
  document.getElementById('root') as HTMLElement
)
