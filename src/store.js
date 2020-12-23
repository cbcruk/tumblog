import create from 'zustand'

const API_URL = 'https://api.tumblr.com/v2/blog/cbcruk/posts'
const BEARER_TOKEN = 'aIcXSOoTtqrzR8L8YEIOmBeW94c3FmbSNSWAUbxsny9KKx5VFh'
const FILEDS_BLOGS = 'name,description,updated'
const OFFSET_SIZE = 15

const init = {
  headers: {
    accept: 'application/json;format=camelcase',
    authorization: `Bearer ${BEARER_TOKEN}`
  }
}

export const useTumblrStore = create((set, get) => ({
  get,
  set,
  status: 'idle',
  blog: {},
  posts: [],
  links: {},
  pageNumber: 1,
  getPosts: async (nextPageNumber = 1) => {
    const offset = (nextPageNumber - 1) * OFFSET_SIZE
    const input = `${API_URL}?fields[blogs]=${FILEDS_BLOGS}&pageNumber=${nextPageNumber}&offset=${offset}&limit=15`

    set({ status: 'request' })

    try {
      const response = await fetch(input, init)
      const data = await response.json()

      set((state) => ({
        ...state,
        ...data.response,
        status: 'success'
      }))
    } catch (error) {
      set({ status: 'failure' })
    }
  }
}))
