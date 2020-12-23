import React from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import usePagination from './hooks/usePagination'
import styles from './style.module.css'

function Pagination() {
  const { page, lastPage, prev, next } = usePagination()

  return (
    <div className={styles.wrapper}>
      {page} / {lastPage}
      <nav className={styles.nav}>
        <Link to={`/page/${prev}`} className={styles.link}>
          Prev
        </Link>
        <Link
          to={`/page/${next}`}
          className={classNames([styles.link, 'is-next'])}
        >
          Next
        </Link>
      </nav>
    </div>
  )
}

export default Pagination
