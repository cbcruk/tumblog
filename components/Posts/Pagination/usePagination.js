import { useRouter } from 'next/router'
import { useContext, useMemo } from 'react'
import { getPageNumber } from '../../../lib/posts/helpers'
import { PostsContext } from '../../../pages/posts'

function usePagination() {
  const { total_posts } = useContext(PostsContext)
  const { query } = useRouter()
  const page = getPageNumber(query)
  const [prev, next] = useMemo(
    () => [parseInt(page, 10) - 1, parseInt(page, 10) + 1],
    [page]
  )
  const lastPage = useMemo(() => Math.ceil(total_posts / 15), [total_posts])

  return {
    page,
    lastPage,
    prev,
    next
  }
}

export default usePagination
