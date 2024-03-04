import theNeukApi from '../api/theNeukApi';

export const setCurrentUser = (user) => {
  return {
    type: "SET_CURRENT_USER",
    payload: user.current_user
  }
}

export const unsetCurrentUser = () => {
  return {
    type: "UNSET_CURRENT_USER",
    payload: null
  }
}

export const authenticateToken = () => {
  return (dispatch) => {
    return theNeukApi.currentUser().then(response => {
      dispatch(setCurrentUser(response));
    });
  }
}

export const login = (user) => {
  return (dispatch) => {
    return theNeukApi.loginUser(user).then(response => {
      localStorage.setItem('auth_token', response.token);
      theNeukApi.currentUser().then(response => {
        dispatch(setCurrentUser(response));
      })
    });
  }
}

export const register = (user) => {
  return (dispatch) => {
    return theNeukApi.registerUser(user).then(response => {
      localStorage.setItem('auth_token', response.token);
      theNeukApi.currentUser().then(response => {
        dispatch(setCurrentUser(response));
      })
    });
  }
}

export const logout = () => {
  return (dispatch) => {
    localStorage.removeItem('auth_token');
    dispatch(unsetCurrentUser());
  }
}
