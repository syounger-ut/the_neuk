const authenticationReducer = (state = false, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return Object.assign({}, state, action.payload)
    case 'UNSET_CURRENT_USER':
      return state = action.payload;
    default:
      return state
  }
}

export default authenticationReducer;
