import React from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'

const NewAncedote = (props) => {
  const dispatch = useDispatch()

  const addAncedotes = (event) => {
    event.preventDefault()
    const ancedote = event.target.ancedote.value
    event.target.ancedote.value = ''
    dispatch(createAnecdote(ancedote))
  }
  return (
    <form onSubmit={addAncedotes}>
      <div><input name="ancedote"/></div>
      <button>create</button>
    </form>
  )
}
export default NewAncedote