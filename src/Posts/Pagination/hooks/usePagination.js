import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { useTumblrStore } from '../../../store'

function usePagination() {
  const { page } = useParams()
  const totalPosts = useTumblrStore((state) => state.totalPosts)
  const [prev, next] = useMemo(
    () => [parseInt(page, 10) - 1, parseInt(page, 10) + 1],
    [page]
  )
  const lastPage = useMemo(() => Math.ceil(totalPosts / 15), [totalPosts])

  return {
    page,
    lastPage,
    prev,
    next
  }
}

export default usePagination
