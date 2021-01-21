import Search from './Search'
import styles from './style.module.css'

function Header() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <Search />
      </div>
    </div>
  )
}

export default Header
