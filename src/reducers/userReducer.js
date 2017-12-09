const userReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_USER':
      return action.payload.user
    // Add a new case here for a new state action
    case 'UNSET_USER':
      return Object.assign({}, state, null)
    default:
      return state
  }
}

export default userReducer;
