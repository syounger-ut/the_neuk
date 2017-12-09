import theNeukApi from 'theNeukApi';
import * as userActions from 'userActions';

export const loggedIn = (status) => {
  return {
    type: "LOGGED_IN",
    payload: status
  }
}

export const authenticateToken = () => {
  return (dispatch) => {
    return theNeukApi.getUser().then(response => {
      dispatch(loggedIn(true));
      dispatch(userActions.setUser(response));
    });
  }
}

export const login = (user) => {
  return (dispatch) => {
    return theNeukApi.loginUser(user).then(response => {
      localStorage.setItem('auth_token', response.token);
      dispatch(loggedIn(true));
      theNeukApi.getUser(response).then(response => {
        dispatch(userActions.setUser(response));
      })
    });
  }
}

export const register = (user) => {
  return (dispatch) => {
    return theNeukApi.registerUser(user).then(response => {
      localStorage.setItem('auth_token', response.token);
      dispatch(loggedIn(true));
      theNeukApi.getUser(response).then(response => {
        dispatch(userActions.setUser(response));
      })
    });
  }
}

export const logout = () => {
  return (dispatch) => {
    localStorage.removeItem('auth_token');
    dispatch(loggedIn(false));
    dispatch(userActions.unsetUser());
  }
}
