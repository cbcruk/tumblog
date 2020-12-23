import { IconClose, IconSearch } from '../../Icons'
import useSearch from './hooks/useSearch'
import styles from './style.module.css'

function Search() {
  const { state, handleSubmit, updateForm, toggleForm } = useSearch()
  const isShow = state.show

  return (
    <div className={styles.wrapper}>
      <form
        hidden={!isShow}
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault()

          handleSubmit()

          e.target.reset()
        }}
      >
        <input
          type="search"
          className={styles.input}
          placeholder="Search"
          onChange={(e) => {
            updateForm(e.target.value)
          }}
        />
      </form>

      <button
        type="button"
        className={styles.button}
        onClick={() => {
          toggleForm()
        }}
      >
        <IconClose hidden={!isShow} />
        <IconSearch hidden={isShow} />
      </button>
    </div>
  )
}

export default Search
