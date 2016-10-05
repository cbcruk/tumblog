import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPostsIfNeeded } from '../actions';

import Aside from '../components/Aside';
import Page from './Page';

import './App.css';

class App extends Component {
  componentDidMount() {
    const { dispatch, params } = this.props;
    const filter = params.filter;

    dispatch(fetchPostsIfNeeded(filter));
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.params.filter !== this.props.params.filter) {
      const { dispatch, params } = nextProps;
      const filter = params.filter;

      dispatch(fetchPostsIfNeeded(filter));
    }
  }

  render() {
    const { blog, posts, isFetching } = this.props;

    return (
      <div className="App">
        <Aside blog={blog} />
        <Page posts={posts} />
        <p>{isFetching ? 'Loading...' : ''}</p>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { postsByTumblr } = state;
  const { blog } = postsByTumblr;
  const {
    isFetching,
    lastUpdated,
    items: posts
  } = postsByTumblr[ownProps.params.filter || 'all'] || {
    isFetching: true,
    items: {
      entities: {},
      result: []
    },
  };

  return {
    blog,
    posts,
    isFetching,
    lastUpdated
  };
};

export default connect(mapStateToProps)(App);
