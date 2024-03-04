import theNeukApi from '../api/theNeukApi';
import * as userActions from './userActions';
import * as bookingActions from './bookingActions';

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

export const setUpdatedImage = (image) => {
  return {
    type: "SET_UPDATED_IMAGE",
    payload: image
  }
}

export const setUpdatedBooking = (booking) => {
  return {
    type: "SET_UPDATED_BOOKING",
    payload: booking
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

export const deleteImage = (imageId) => {
  return (dispatch) => {
    return theNeukApi.deleteImage(imageId).then(response => {
      dispatch(deleteImage(imageId))
    })
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

export const getBookings = () => {
  return (dispatch) => {
    return theNeukApi.getAllBookings().then(response => {
      dispatch(bookingActions.setBookings(response))
      return true
    });
  }
}

export const updateImage = (image) => {
  return (dispatch) => {
    return theNeukApi.updateImage(image).then(response => {
      dispatch(setUpdatedImage(response.image))
      return response.image
    });
  }
}

export const updateBooking = (booking) => {
  return (dispatch) => {
    return theNeukApi.updateAdminBooking(booking).then(response => {
      dispatch(setUpdatedBooking(response.booking))
      return response.booking
    });
  }
}

export const submitBooking = (booking) => {
  return (dispatch) => {
    return theNeukApi.submitAdminBooking(booking).then(response => {
      dispatch(setUpdatedBooking(response))
      return response
    });
  }
}
