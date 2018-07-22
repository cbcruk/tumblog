import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'
import Header from '../components/Header'
import Posts from '../components/Posts'

const Home = ({ match }) => (
  <Fragment>
    <Header />
    <Route path={`${match.url}/:page`} component={Posts} />
  </Fragment>
)

export default Home
