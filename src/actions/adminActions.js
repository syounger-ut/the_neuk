import theNeukApi from 'theNeukApi';

export const setUsers = (users) => {
  return {
    type: "SET_USERS",
    payload: users
  };
};

export const setImage = (images) => {
  return {
    type: 'SET_IMAGE',
    payload: image
  }
}

export const uploadImage = (image) => {
  return (dispatch) => {
    return theNeukApi.uploadImage(image).then(response => {
      dispatch(setImage(response))
      return true
    });
  }
}

export const getUsers = () => {
  return (dispatch) => {
    return theNeukApi.getUsers().then(response => {
      dispatch(setUsers(response))
      return true
    });
  }
}
