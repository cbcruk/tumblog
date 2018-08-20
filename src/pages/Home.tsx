import Header from '@/components/Header'
import * as React from 'react'
import { Route, RouteComponentProps } from 'react-router-dom'
import Posts from '../components/Posts'

const Home: React.SFC<RouteComponentProps<{}>> = ({ match }) => (
  <React.Fragment>
    <Header />
    <Route path={`${match.url}/:page`} component={Posts} />
  </React.Fragment>
)

export default Home
