import { fetchRequestPosts } from '@/actions'
import { IFetchRequestAction } from '@/actions/types'
import { IApplicationState } from '@/reducers'
import _ from 'lodash'
import lozad from 'lozad'
import * as React from 'react'
import { connect } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'
import Post from '../Post'
import Nav from './Nav'
import Wrapper from './styled'

type Props = IApplicationState['posts'] &
  RouteComponentProps<{ page: string }> & {
    fetchRequestPosts(payload: IFetchRequestAction['payload']): void
  }

class Posts extends React.Component<Props> {
  public observer = lozad()

  public componentDidMount() {
    this.fetchItems()
  }

  public componentDidUpdate(prevProps: Props) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.fetchItems()
    }

    if (!_.isEqual(prevProps.posts, this.props.posts)) {
      this.observer.observe()
    }
  }

  public fetchItems() {
    const { page = '1' } = this.props.match.params
    const limit = 5
    const offset = (parseInt(page, 10) - 1) * limit

    this.props.fetchRequestPosts({
      endpoint: 'posts',
      params: {
        offset,
        limit
      }
    })
  }

  public render() {
    return (
      <Wrapper>
        {this.props.posts.map(({ id, ...rest }) => (
          <Post key={id} {...rest} />
        ))}
        <Nav />
      </Wrapper>
    )
  }
}

const mapStateToProps = (state: IApplicationState) => ({
  posts: state.posts.posts,
  isFetching: state.posts.isFetching
})

const mapDispatchToProps = { fetchRequestPosts }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts)
