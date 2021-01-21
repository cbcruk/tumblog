import styles from './style.module.css'

function Text({ children }) {
  return <p className={styles.wrapper}>{children}</p>
}

export default Text
