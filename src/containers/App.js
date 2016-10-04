import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectTumblr, fetchPostsIfNeeded } from '../actions';
import Aside from '../components/Aside';
import './App.css';

class App extends Component {
  componentDidMount() {
    const { dispatch, params } = this.props;
    const filter = params.filter || 'all';

    dispatch(selectTumblr(filter));
    dispatch(fetchPostsIfNeeded(filter));
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.params.filter !== this.props.params.filter) {
      const { dispatch, params } = nextProps;
      const filter = params.filter || 'all';

      dispatch(selectTumblr(filter));
      dispatch(fetchPostsIfNeeded(filter));
    }
  }

  render() {
    const { blog, isFetching } = this.props;

    return (
      <div className="App">
        <Aside blog={blog} />
        <p>
          {
            isFetching ? 'Loading...' : ''
          }
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { selectedTumblr, postsByTumblr } = state;
  const { blog } = postsByTumblr;
  const {
    isFetching,
    lastUpdated,
    items: posts
  } = postsByTumblr[selectedTumblr || ownProps.params.filter] || {
    isFetching: true,
    items: []
  };

  return {
    selectedTumblr,
    blog,
    posts,
    isFetching,
    lastUpdated
  };
};

export default connect(mapStateToProps)(App);
