import { useReducer } from 'react'

const SUBMIT_FORM = 'SUBMIT_FORM'
const UPDATE_FORM = 'UPDATE_FORM'
const TOGGLE_FORM = 'TOGGLE_FORM'

function useSearch() {
  const [state, dispatch] = useReducer(
    (state, action) => {
      return {
        ...state,
        ...action.payload
      }
    },
    {
      show: false,
      search: ''
    }
  )

  function handleSubmit() {
    dispatch({
      type: SUBMIT_FORM,
      payload: {
        show: false
      }
    })

    window.open(
      `https://cbcruk.tumblr.com/archive/tagged/${decodeURIComponent(
        state.search
      )}`
    )
  }

  function updateForm(search) {
    dispatch({
      type: UPDATE_FORM,
      payload: {
        search
      }
    })
  }

  function toggleForm() {
    dispatch({
      type: TOGGLE_FORM,
      payload: {
        show: !state.show
      }
    })
  }

  return { state, handleSubmit, updateForm, toggleForm }
}

export default useSearch
