const imageReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_IMAGES':
      let initialState = {}
      action.payload.forEach(function(image) {
        initialState[image.id] = image;
      })
      return Object.assign({}, state, initialState)
    case 'SET_IMAGE':
      let newState = state[action.payload.id] = action.payload
      return Object.assign({}, state, newState)
    default:
      return state
    case 'SET_UPDATED_IMAGE':
      let id = action.payload.id;
      return Object.assign({}, state, {
        [id]: Object.assign({}, state[id], action.payload)
      });
  }
}

export default imageReducer;
