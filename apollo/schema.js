import { gql } from '@apollo/client'
import { makeExecutableSchema } from 'graphql-tools'
import { resolvers } from './resolvers'

export const typeDefs = gql`
  type Fields {
    blogs: String
  }

  type QueryParams {
    limit: String
    offset: String
    page_number: String
    fields: Fields
  }

  type Next {
    href: String
    method: String
    query_params: QueryParams
  }

  type Links {
    next: Next
  }

  type Colors {
    c0: String
    c1: String
  }

  type Media {
    media_key: String
    type: String
    width: Int
    height: Int
    url: String
    has_original_dimensions: Boolean
    colors: Colors
  }

  type Content {
    type: String
    colors: Colors
    media: [Media]
    picture: Media
    text: String
  }

  type Post {
    object_type: String
    type: String
    original_type: String
    blog_name: String
    is_nsfw: Boolean
    classification: String
    nsfw_score: Int
    id: String
    id_string: String
    post_url: String
    slug: String
    date: String
    timestamp: Int
    state: String
    reblog_key: String
    short_url: String
    summary: String
    should_open_in_legacy: Boolean
    recommended_source: String
    recommended_color: String
    note_count: Int
    source_url: String
    source_title: String
    source_url_raw: String
    can_edit: Boolean
    can_delete: Boolean
    can_reply: Boolean
    can_like: Boolean
    can_reblog: Boolean
    can_send_in_message: Boolean
    embed_url: String
    display_avatar: Boolean
    trail: [String]
    layout: [String]
    content: [Content]
    tags: [String]
    blog: Blog
  }

  type Posts {
    items: [Post]
  }

  type Blog {
    name: String
    description: String
    updated: Int
    is_optout_ads: Boolean
  }

  type Response {
    total_posts: Int
    _links: Links
    posts: [Post]
    blog: Blog
  }

  type Meta {
    status: Int
    msg: String
  }

  type PostsConnection {
    response: Response
    meta: Meta
  }

  type Query {
    posts(pageNumber: Int): PostsConnection
  }
`

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})
