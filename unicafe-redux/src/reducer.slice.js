const initialState = {
  average: 0,
  positive: 0,
}

const calculatedValueReducer = (state = initialState, action) => {

  if (action.type ==='CALCULATE') {
      const bad = action.data.bad
      const good = action.data.good
      const ok = action.data.ok      
      return {
        average: (bad + good)/(bad + good + ok),
        positive: 100 * (good) / (bad + good + ok)
      }
  }
    else{ return initialState}
  
}

export default calculatedValueReducer