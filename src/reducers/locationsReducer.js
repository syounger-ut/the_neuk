const locationsReducer = (state = null, action) => {
  let initialState = {}

  switch (action.type) {
    case 'SET_LOCATIONS':
      action.payload.forEach(function(location) {
        initialState[location.name] = location;
      })
      return Object.assign({}, state, initialState)
    case 'SET_DEFAULT_LOCATION':
      return Object.assign(state, { defaultLocation: action.payload })
    default:
      return state
  }
}

export default locationsReducer;
