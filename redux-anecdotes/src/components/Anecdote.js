import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { voteFor } from '../reducers/anecdoteReducer'
import { voteNotification , clearNotficiation} from '../reducers/notificationReducer'
import Notification from './Notification'
const Anecdote = ({ anecdote }) => {
  const dispatch = useDispatch()

  const vote = (id) => {
    const message = `You have voted for '${anecdote.content}'`
    dispatch(voteFor(id))

    dispatch(voteNotification(message))
    setTimeout(() => dispatch(clearNotficiation()), 5000)
  }

  return (
    <div>
      <div>
        {anecdote.content}
      </div>
      <div>
        has {anecdote.votes}
        <button onClick= {() => vote(anecdote.id)} >vote</button>
      </div>
    </div>
  )
}

const Ancedotes = () => {
  
  const states = useSelector(state => {
    if (state.filter && state.filter !== '') {
      return {...state, anecdotes: state.anecdotes.filter(a => a.content.includes(state.filter))}
    }
    return state
  })

  
  const getNotification = () => {
    const notification = states.notification
    if (notification) {
      console.log("Something happened")
      return  (
        <div>
          <Notification Notification= {notification}/>
        </div>)
    } else {
      console.log("cleared")
      return (<div> </div>)
    }
  }
  
  return (
    <div>
      {getNotification()}
      {states.anecdotes.map(anecdote =>
        <Anecdote
          key={anecdote.id}
          anecdote ={anecdote} 
          />
      )}
    </div>
    )
}

export default Ancedotes