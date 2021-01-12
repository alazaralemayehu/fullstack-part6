import React from 'react'
import NewAncedote from './components/ NewAnecdote'
import Ancedotes from './components/Anecdote'
import { useSelector, useDispatch } from 'react-redux'
import Filter from './components/Filter'

const App = () => {

  const notification = useSelector (state => state.notification)

 
  return (
    <div>
      <Filter />
      <h2>Anecdotes</h2>
      <Ancedotes />
      <h2>create new</h2>
      <NewAncedote />
      
    </div>
  )
}

export default App