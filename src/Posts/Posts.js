import classNames from 'classnames'
import useTumblr from '../hooks/useTumblr'
import Post from './Post'
import Pagination from './Pagination'
import styles from './style.module.css'

function Posts() {
  const { status, posts } = useTumblr()
  const isRequest = status === 'request'

  return (
    <div
      className={classNames([
        styles.wrapper,
        {
          'is-request': isRequest
        }
      ])}
    >
      {posts.map((post) => {
        const isPhotoType = post.originalType === 'photo'

        if (!isPhotoType) {
          return null
        }

        return <Post key={post.id} {...post} />
      })}
      {posts.length > 0 && <Pagination />}
    </div>
  )
}

export default Posts
