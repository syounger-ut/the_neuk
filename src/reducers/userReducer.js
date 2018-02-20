const userReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_USER':
      return action.payload.user
    case 'UNSET_USER':
      return state = action.payload;
    default:
      return state
  }
}

export default userReducer;
