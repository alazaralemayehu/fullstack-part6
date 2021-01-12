import React from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { createNotification, clearNotficiation} from '../reducers/notificationReducer'
const NewAnecdote = (props) => {
  const dispatch = useDispatch()

  const addAncedotes = (event) => {
    event.preventDefault()
    const anecdote = event.target.anecdote.value
    event.target.anecdote.value = ''
    dispatch(createAnecdote(anecdote))
    dispatch(createNotification(`New Anecdote ${anecdote} created`))
    setTimeout(() => dispatch(clearNotficiation()), 5000)
  }
  return (
    <form onSubmit={addAncedotes}>
      <div><input name="anecdote"/></div>
      <button>create</button>
    </form>
  )
}
export default NewAnecdote