import axios from 'axios'

const API_URL = 'https://api.tumblr.com/v2/blog/cbcruk.tumblr.com'
const API_KEY = '9XQHE6avIyXZBtaiQw8sIG7eNE4Ejzk41cgY2THef9YZr4TuG7'

const instance = axios.create({
  baseURL: API_URL
})

instance.interceptors.request.use(config => config)

instance.interceptors.response.use(response => response)

export const GET = ({ endpoint, params }) =>
  instance.get(endpoint, {
    params: {
      ...params,
      api_key: API_KEY
    }
  })
