import React from 'react'
import { connect } from 'react-redux'
import isEqual from 'lodash/isEqual'
import lozad from 'lozad'
import { fetchPosts } from '../../actions'
import Post from '../Post'
import Nav from './Nav'
import Wrapper from './styled'

class Posts extends React.Component {
  constructor() {
    super()

    this.observer = lozad()
  }

  componentDidMount() {
    this.fetchItems()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.fetchItems()
    }

    if (!isEqual(prevProps.posts, this.props.posts)) {
      this.observer.observe()
    }
  }

  fetchItems() {
    const { page } = this.props.match.params
    const limit = 5
    const offset = (page - 1) * limit

    this.props.fetchPosts({
      endpoint: 'posts',
      params: {
        offset,
        limit
      }
    })
  }

  render() {
    return (
      <Wrapper>
        {this.props.posts.map(({ id, ...rest }) => <Post key={id} {...rest} />)}
        <Nav />
      </Wrapper>
    )
  }
}

const mapStateToProps = ({ posts: { posts, isFetching } }) => ({
  posts,
  isFetching
})

const mapDispatchToProps = { fetchPosts }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts)
