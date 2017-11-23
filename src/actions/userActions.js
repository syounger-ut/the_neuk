import theNeukApi from 'theNeukApi';

export const setUser = (user) => {
  return {
    type: "SET_USER",
    payload: user
  };
};

export const updateUser = (user, token) => {
  return (dispatch) => {
    return theNeukApi.updateUser(user, token).then(response => {
      dispatch(setUser(response))
    })
    .catch(error => {
      throw(error);
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
