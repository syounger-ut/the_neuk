import theNeukApi from 'theNeukApi';
import * as userActions from 'userActions';

export const setImages = (images) => {
  return {
    type: 'SET_IMAGES',
    payload: images
  }
}

export const setImage = (image) => {
  return {
    type: 'SET_IMAGE',
    payload: image
  }
}

export const uploadImage = (image) => {
  return (dispatch) => {
    return theNeukApi.uploadImage(image).then(response => {
      dispatch(setImage(response.image))
      return true
    });
  }
}

export const getImages = () => {
  return (dispatch) => {
    return theNeukApi.getImages().then(response => {
      dispatch(setImages(response))
      return true
    })
  }
}

export const getUsers = () => {
  return (dispatch) => {
    return theNeukApi.getUsers().then(response => {
      dispatch(userActions.setUsers(response))
      return true
    });
  }
}
