import axios from 'axios'

const tumblr = axios.create({
  baseURL: 'https://api.tumblr.com',
  params: {
    api_key: process.env.TUMBLR_TOKEN
  }
})
tumblr.interceptors.request.use((config) => {
  return {
    ...config,
    params: {
      ...config.params
    }
  }
})

export const resolvers = {
  Query: {
    async posts(_, { pageNumber }) {
      const offset = (pageNumber - 1) * 15
      const { data } = await tumblr.get(`/v2/blog/cbcruk/posts`, {
        params: {
          limit: 15,
          npf: true,
          offset
        }
      })

      return data
    }
  },
  Content: {
    picture(content) {
      if (content.type === 'image') {
        return content.media[0]
      } else {
        return null
      }
    }
  }
}
