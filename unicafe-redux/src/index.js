import React from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import reducer from './reducer'
import calculatedValueReducer from './reducer.slice'
const store = createStore(reducer)
const statisticsStore = createStore(calculatedValueReducer)
const App = () => {
  const good = () => {
    store.dispatch({
      type: 'GOOD'
    })

    statisticsStore.dispatch({
      type: 'CALCULATE',
      data : store.getState()
    })
  }

  const bad = () => {
    store.dispatch({
      type: 'BAD'
    })
    statisticsStore.dispatch({
      type: 'CALCULATE',
      data : store.getState()
    })
  }

  const ok = () => {
    store.dispatch({
      type: 'OK'
    })
    statisticsStore.dispatch({
      type: 'CALCULATE',
      data : store.getState()
    })
  }

  const resetStatus = () => {
    store.dispatch( {
      type: 'ZERO'
    })
    statisticsStore.dispatch({
      type: 'RESET',
      data : store.getState()
    })
    
}

  return (
    <div>
      
      <button onClick={good}>good</button> 
      <button onClick={ok}>neutral</button> 
      <button onClick={bad}>bad</button>
      <button onClick={resetStatus}>reset stats</button>
      <div>good {store.getState().good}</div>
      <div>neutral {store.getState().ok}</div>
      <div>bad {store.getState().bad}</div>
      <div>Average {statisticsStore.getState().average}</div>
      <div>positive {statisticsStore.getState().positive}</div>
    </div>
  )
}

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp()
store.subscribe(renderApp)
