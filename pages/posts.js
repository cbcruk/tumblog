import { createContext } from 'react'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'
import { initializeApollo } from '../apollo/client'
import { GetPostsQuery } from '../lib/posts/query'
import { getPageNumber } from '../lib/posts/helpers'
import { List, Pagination, Post } from '../components/Posts'

export const PostsContext = createContext({})

function Posts() {
  const { query } = useRouter()
  const { loading, data, previousData } = useQuery(GetPostsQuery, {
    variables: {
      pageNumber: getPageNumber(query)
    },
    ssr: true
  })

  if (data || previousData) {
    const { posts, total_posts } = (loading
      ? previousData
      : data
    ).posts.response

    return (
      <PostsContext.Provider value={{ total_posts }}>
        <List isRequest={loading}>
          {posts.map((post) => (
            <Post key={post.id} {...post} />
          ))}
          <Pagination />
        </List>
      </PostsContext.Provider>
    )
  }
}

export async function getServerSideProps({ query }) {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: GetPostsQuery,
    variables: {
      pageNumber: getPageNumber(query)
    }
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract()
    }
  }
}

export default Posts
