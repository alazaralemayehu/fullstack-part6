import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { voteFor } from '../reducers/anecdoteReducer'
const Anecdote = ({ anecdote , handleClick }) => {
  return (
    <div>
      <div>
        {anecdote.content}
      </div>
      <div>
        has {anecdote.votes}
        <button onClick={() => handleClick(anecdote.id)}>vote</button>
      </div>
    </div>
  )
}

const Ancedotes = () => {
  const dispatch = useDispatch()
  const ancedotes = useSelector(state => state)

  return (
    <div>
      <h2>Anecdotes</h2>
      {ancedotes.map(anecdote =>
        <Anecdote
          key={anecdote.id}
          anecdote ={anecdote} 
          handleClick = {() => dispatch(voteFor(anecdote.id))}
          />
      )}
    </div>
    )
}

export default Ancedotes