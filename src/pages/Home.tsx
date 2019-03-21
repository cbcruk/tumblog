import Header from '../components/Header'
import * as React from 'react'
import { Route, RouteComponentProps } from 'react-router-dom'
import Posts from '../components/Posts'

class Home extends React.Component<RouteComponentProps<{}>> {
  render() {
    const { match } = this.props

    return (
      <React.Fragment>
        <Header />
        <Route path={`${match.url}/:page`} component={Posts} />
      </React.Fragment>
    )
  }
}

export default Home
