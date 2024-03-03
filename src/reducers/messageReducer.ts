const messageReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_MESSAGE':
      return {
        message: action.payload.message,
        style:   action.payload.style
      }
    default:
      return state
  }
}

export default messageReducer;
