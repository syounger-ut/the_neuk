const user = (state = [], action) => {
  switch (action.type) {
    case 'ADD_USER':
      return [
        ...state,
        {
          user: {
            first_name:   action.first_name,
            last_name:    action.last_name,
            email:        action.email,
            phone_number: action.phone_number
          },
          updateMessage: "Your details have been updated"
        }
      ]

    // Add a new case here for a new state action
    default:
      return state
  }
}

export default user
