const imageReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_IMAGES':
      return Object.assign({}, state, action.payload)
    default:
      return state
  }
}

export default imageReducer;
