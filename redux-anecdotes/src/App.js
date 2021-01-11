import React from 'react'
import NewAncedote from './components/ NewAnecdote'
import Ancedotes from './components/Anecdote'

const App = () => {

  
  return (
    <div>
      <h2>Anecdotes</h2>
      <Ancedotes />
      <h2>create new</h2>
      <NewAncedote />
    </div>
  )
}

export default App