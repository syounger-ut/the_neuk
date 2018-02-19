const adminReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_USERS':
      return Object.assign({}, state, action.payload)
    default:
      return state
  }
}

export default adminReducer;
