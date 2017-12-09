import theNeukApi from 'theNeukApi';

export const setUser = (user) => {
  return {
    type: "SET_USER",
    payload: user
  };
};

export const unsetUser = () => {
  return {
    type: "UNSET_USER",
    payload: null
  }
}

export const getUser = () => {
  return (dispatch) => {
    return theNeukApi.getUser().then(response => {
      dispatch(setUser(response))
    });
  }
}

export const updateUser = (user) => {
  return (dispatch) => {
    return theNeukApi.updateUser(user).then(response => {
      dispatch(setUser(response))
    })
    .catch(error => {
      throw(error);
    });
  }
}
