import Link from 'next/link'
import classNames from 'classnames'
import usePagination from './usePagination'
import styles from './style.module.css'

function Pagination() {
  const { page, lastPage, prev, next } = usePagination()

  return (
    <div className={styles.wrapper}>
      {page} / {lastPage}
      <nav className={styles.nav}>
        {page > 1 && (
          <Link
            href={{
              pathname: '/posts',
              query: {
                page: prev
              }
            }}
            shallow
          >
            <a className={styles.link}>Prev</a>
          </Link>
        )}

        {lastPage !== page && (
          <Link
            href={{
              pathname: '/posts',
              query: {
                page: next
              }
            }}
            shallow
          >
            <a className={classNames([styles.link, 'is-next'])}>Next</a>
          </Link>
        )}
      </nav>
    </div>
  )
}

export default Pagination
