import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectTumblr, fetchPostsIfNeeded } from '../actions';
import Aside from '../components/Aside';
import './App.css';

class App extends Component {
  componentDidMount() {
    const { dispatch, params } = this.props;
    const type = params.type || 'all';

    dispatch(selectTumblr(type));
    dispatch(fetchPostsIfNeeded(type));
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.params.type !== this.props.params.type) {
      const { dispatch, params } = nextProps;
      dispatch(selectTumblr(params.type || 'all'));
    }

    if (nextProps.selectedTumblr !== this.props.selectedTumblr) {
      const { dispatch, params } = nextProps;
      dispatch(fetchPostsIfNeeded(params.type));
    }
  }

  render() {
    const { blog } = this.props;

    return (
      <div className="App">
        <Aside blog={blog} />
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
  } = postsByTumblr[selectedTumblr || ownProps.params.type] || {
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
