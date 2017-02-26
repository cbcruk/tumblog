import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { fetchPosts, fetchPostsIfNeeded, fetchPageCount } from '../actions';

import Page from './Page';
import Aside from '../components/Aside';
import Pagination from '../components/Pagination';

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
`;

class App extends Component {
  componentDidMount() {
    const { search, page } = this.props.params;

    if (page) {
      this.fetchPageCount(page);
    } else {
      this.fetchPostsIfNeeded(search);
    }
  }

  componentWillReceiveProps(nextProps) {
    const { search, page } = nextProps.params;

    if (nextProps.params.search !== this.props.params.search) {
      this.fetchPostsIfNeeded(search);
    }

    if (nextProps.params.page !== this.props.params.page) {
      this.fetchPageCount(page || 0);
    }
  }

  fetchPostsIfNeeded(search) {
    const { dispatch } = this.props;

    dispatch(fetchPostsIfNeeded(search));
  }

  fetchPageCount(page) {
    const { dispatch } = this.props;

    dispatch(fetchPageCount(page));
    dispatch(fetchPosts(null, page * 3));
  }

  render() {
    const { blog, posts, total, isFetching, params } = this.props;

    return (
      <StyledApp>
        <Aside blog={blog} />
        <Page posts={posts} />
        {
          params.search
          ? null
          : <Pagination total={total} />
        }
        {
          isFetching
          ? <p style={{ margin: 12, fontSize: 24, textAlign: 'center' }}>🐶🐶🐶</p>
          : null
        }
      </StyledApp>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { postsByTumblr } = state;
  const { blog, total } = postsByTumblr;
  const {
    isFetching,
    lastUpdated,
    items: posts
  } = postsByTumblr[ownProps.params.search || 'all'] || {
    isFetching: true,
    items: {
      entities: {},
      result: []
    },
  };

  return {
    blog,
    posts,
    total,
    isFetching,
    lastUpdated
  };
};

export default connect(mapStateToProps)(App);
