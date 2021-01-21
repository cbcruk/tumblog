import { gql } from '@apollo/client'

export const GetPostsQuery = gql`
  query GetPostsQuery($pageNumber: Int) {
    posts(pageNumber: $pageNumber) {
      response {
        posts {
          id
          content {
            type
            colors {
              c0
              c1
            }
            picture {
              url
              width
              height
            }
            text
          }
          date
          timestamp
          source_url
          post_url
          note_count
        }
        total_posts
      }
    }
  }
`
