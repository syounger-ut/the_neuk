import theNeukApi from 'theNeukApi';
import * as userActions from 'userActions';

export const authenticateToken = (token) => {
  return (dispatch) => {
    return theNeukApi.authenticateToken(token).then(response => {
      dispatch(userActions.setUser(response))
    });
  }
}

export const loginUser = (user) => {
  return (dispatch) => {
    return theNeukApi.loginUser(user).then(response => {
      localStorage.setItem('auth_token', response.token);
      dispatch(setUser(response))
    });
  }
}

export const logoutUser = (logoutOption) => {
  localStorage.removeItem('auth_token');
  return {
    type: "UNSET_USER",
    payload: logoutOption
  }
}
