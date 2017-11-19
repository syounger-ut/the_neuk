const userReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_USER':
      if (action.payload.token) {
        localStorage.setItem('auth_token', action.payload.token);
      }
      return {
        id:           action.payload.user.id,
        first_name:   action.payload.user.first_name,
        last_name:    action.payload.user.last_name,
        full_name:    action.payload.user.full_name,
        email:        action.payload.user.email,
        phone_number: action.payload.user.phone_number,
        loggedIn: true
      }
    case 'UNSET_USER':
      localStorage.removeItem('auth_token');
      return {
        loggedIn: false
      }

    // Add a new case here for a new state action
    default:
      return state
  }
}

export default userReducer;
