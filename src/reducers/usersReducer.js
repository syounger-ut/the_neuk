const usersReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_USER':
      return Object.assign({}, state, action.payload)
    case 'SET_USERS':
      return Object.assign({}, state, action.payload)
    case 'UNSET_USER':
      return state = action.payload;
    default:
      return state
  }
}

export default usersReducer;
