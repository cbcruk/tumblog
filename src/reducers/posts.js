const initialState = {
  blog: {},
  posts: [],
  total_posts: 0,
  last: 0
}

const posts = (state = initialState, action) => {
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

export default posts
