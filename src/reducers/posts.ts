import { Reducer } from 'redux'
import { FetchActions, IPostsState } from '../actions/types'

const initialState: IPostsState = {
  blog: {},
  posts: [],
  total_posts: 0,
  last: 0,
  isFetching: false
}

const postsReduce: Reducer<IPostsState, FetchActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case 'POSTS_FETCH_REQUESTED':
      return {
        ...state,
        isFetching: true
      }
    case 'POSTS_FETCH_SUCCEEDED':
      const { blog, posts, total_posts } = action

      return {
        ...state,
        blog,
        posts,
        total_posts,
        isFetching: false
      }
    default:
      return state
  }
}

export default postsReduce
