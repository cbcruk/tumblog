import classNames from 'classnames'
import styles from './style.module.css'

function List({ children, isRequest }) {
  return (
    <div
      className={classNames([
        styles.wrapper,
        {
          'is-request': isRequest
        }
      ])}
    >
      {children}
    </div>
  )
}

export default List
