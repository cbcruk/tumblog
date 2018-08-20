import { Action } from 'redux'

export interface IBlog {
  ask: boolean
  ask_anon: boolean
  ask_page_title: string
  can_subscribe: boolean
  description: string
  is_nsfw: boolean
  likes: number
  name: string
  posts: number
  share_likes: boolean
  subscribed: boolean
  title: string
  total_posts: number
  updated: number
  url: string
  is_optout_ads: boolean
}

export interface IPost {
  id?: number
  type: string
  photos: Array<{
    caption: string
    original_size: {
      url: string
      width: number
      height: number
    }
    alt_sizes: Array<{
      url: string
      width: number
      height: number
    }>
  }>
  summary?: string
  title: string
  publisher: string
  excerpt: string
  url: string
  tags: string[]
  source_title: string
  source_url: string
}

export interface IPostsState {
  blog: {}
  posts: IPost[]
  total_posts: number
  last: number
  isFetching: boolean
}

export interface IFetchRequestAction extends Action {
  type: 'POSTS_FETCH_REQUESTED'
  payload: {
    endpoint: string
    params: {
      offset: number
      limit: number
    }
  }
}

export interface IFetchSuccessAction extends Action {
  type: 'POSTS_FETCH_SUCCEEDED'
  blog: {}
  posts: IPost[]
  total_posts: number
}

export type FetchActions = IFetchRequestAction | IFetchSuccessAction
