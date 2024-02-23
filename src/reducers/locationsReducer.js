const locationsReducer = (state = null, action) => {
  let initialState = {}

  switch (action.type) {
    case 'SET_LOCATIONS':

      // Assign the locations to a new object
      action.payload.forEach(function(location) {
        initialState[location.name] = location;
      })

      // Assign a default Location
      initialState["defaultLocation"] = Object.values(initialState)[0].images[0]

      return Object.assign({}, state, initialState)
    case 'SET_DEFAULT_LOCATION':
      return Object.assign({}, state, { "defaultLocation": action.payload })
    default:
      return state
  }
}

export default locationsReducer;
