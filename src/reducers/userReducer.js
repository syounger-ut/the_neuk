const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_USER':
      return action.payload.user
    case 'UNSET_USER':
      return Object.assign({}, state, {})
    default:
      return state
  }
}

export default userReducer;
