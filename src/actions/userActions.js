import theNeukApi from 'theNeukApi';
import * as messageActions from 'messageActions';

export const setCurrentUser = (user) => {
  return {
    type: "SET_USER",
    payload: user
  };
};

export const setUsers = (users) => {
  return {
    type: "SET_USERS",
    payload: users
  };
};

export const unsetUser = () => {
  return {
    type: "UNSET_USER",
    payload: null
  }
}

export const currentUser = () => {
  return (dispatch) => {
    return theNeukApi.currentUser().then(response => {
      dispatch(setCurrentUser(response))
    });
  }
}

export const updateUser = (user) => {
  return (dispatch) => {
    return theNeukApi.updateUser(user).then(response => {
      dispatch(messageActions.setMessage({
        message: "Your details have been updated",
        style: "update"
      }))
      dispatch(setUser(response))
    })
    .catch(error => {
      throw(error);
    });
  }
}
