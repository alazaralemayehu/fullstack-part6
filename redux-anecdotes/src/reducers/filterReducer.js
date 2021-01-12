

const initialState = null


export const filterChange = (filterValue) => {
  return {
    type: 'FILTER',
    data : filterValue
  }
}

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FILTER':
      return action.data
    default :
      return state
  }
}



export default filterReducer