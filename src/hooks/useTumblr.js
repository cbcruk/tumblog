import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useTumblrStore } from '../store'

function useTumblr() {
  const { page: pageNumber } = useParams()
  const { status, posts, getPosts } = useTumblrStore((state) => state)

  useEffect(() => {
    window.scrollTo(0, 0)

    getPosts(pageNumber)
  }, [getPosts, pageNumber])

  return { status, posts, pageNumber }
}

export default useTumblr
