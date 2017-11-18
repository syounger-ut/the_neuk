const userReducer = (state = [], action) => {
  console.log(action)
  switch (action.type) {
    case 'LOGIN_USER':
      return [
        ...state,
        {
          user: {
            first_name:   action.user.first_name,
            last_name:    action.user.last_name,
            email:        action.user.email,
            phone_number: action.user.phone_number
          },
          updateMessage: "Your details have been updated"
        }
      ]

    // Add a new case here for a new state action
    default:
      return state
  }
}

export default userReducer
