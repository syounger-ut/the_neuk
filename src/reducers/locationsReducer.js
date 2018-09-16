const locationsReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_LOCATIONS':
      let initialState = {}
      action.payload.forEach(function(location) {
        initialState[location.name] = location;
      })
      return Object.assign({}, state, initialState)
    default:
      return state
  }
}

export default locationsReducer;
