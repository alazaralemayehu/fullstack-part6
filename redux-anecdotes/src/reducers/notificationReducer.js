const initialState = null

const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'VOTE_NOTIFICATION':
            return action.data
        case 'CREATE_NOTIFICATION':
            return action.data
        case 'CLEAR_NOTIFICATION':
            return null
        default:
            return state
    }
}

export const clearNotficiation = () => {
    return {
        type: 'CLEAR_NOTIFICATION',
        data: null
    }
}
export const createNotification = (notificationMessage) => {
  return {
    type : 'CREATE_NOTIFICATION',
    data : notificationMessage
  }
}
export const voteNotification = (notificationMessage) => {
    return {
        type: 'VOTE_NOTIFICATION',
        data: notificationMessage
    }
}

export default notificationReducer