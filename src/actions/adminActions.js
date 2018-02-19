import theNeukApi from 'theNeukApi';

export const setUsers = (users) => {
  return {
    type: "SET_USERS",
    payload: users
  };
};

export const getUsers = () => {
  return (dispatch) => {
    return theNeukApi.getUsers().then(response => {
      dispatch(setUsers(response))
      return true
    });
  }
}
