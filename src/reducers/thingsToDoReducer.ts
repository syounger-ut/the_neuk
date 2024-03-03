const thingsToDoReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_TO_DOS':
      return Object.assign({}, state, action.payload)
    default:
      return state
  }
}

export default thingsToDoReducer;
