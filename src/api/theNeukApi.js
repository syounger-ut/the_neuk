// Make API Calls here

import axios from 'axios';

const THE_NEUK_API_URL = 'http://localhost:3000/api'
let TOKEN = localStorage.getItem("auth_token");

module.exports = {
  currentUser: function() {
    var requestUrl = `${THE_NEUK_API_URL}/users/me`;

    return axios({
      method: 'get',
      url: requestUrl,
      headers: { 'Authorization': TOKEN }
    }).then(function(response) {
      return response.data;
    }).catch(function(error) {
      if(error.response.status === 401) {
        throw new Error("Your logged in session expired. Please try logging in again");

      } else {
        throw new Error(error.message);
      }
    });
  },

  loginUser: function(user) {
    var requestUrl = `${THE_NEUK_API_URL}/login`;

    return axios({
      method: 'post',
      url: requestUrl,
      data: {
        email:    user.username,
        password: user.password
      }
    }).then(function(response) {
      TOKEN = response.data.token;
      return response.data;
    }).catch(function(error) {
      if(error.response.status === 401) {
        throw new Error("Login failed. Please try again");
      } else {
        throw new Error(error.message);
      }
    });
  },

  registerUser: function(user) {
    var requestUrl = `${THE_NEUK_API_URL}/register`;

    return axios({
      method: 'post',
      url: requestUrl,
      data: {
        first_name:   user.first_name,
        last_name:    user.last_name,
        email:        user.email,
        phone_number: user.phone_number,
        password:     user.password
      }
    }).then(function(response) {
      TOKEN = response.data.token;
      return response.data;
    }).catch(function(error) {
      if(error.response.status === 401) {
        throw new Error("Register failed. Please try again");
      } else {
        throw new Error(error.message);
      }
    });
  },

  updateUser: function(user) {
    var requestUrl = `${THE_NEUK_API_URL}/users/${user.id}`;

    return axios({
      method: 'put',
      url: requestUrl,
      headers: { 'Authorization': TOKEN },
      data: { 'user': user }
    }).then(function(response) {
      return response.data;
    }).catch(function(error) {
      if(error.response.status === 401) {
        throw new Error("Your details were not updated. Please try again");
      } else {
        throw new Error(error.message);
      }
    });
  },

  getAllBookings: function() {
    var requestUrl = `${THE_NEUK_API_URL}/admin/bookings`;

    return axios({
      method: "get",
      url: requestUrl,
      headers: { "Authorization": TOKEN }
    }).then(function(response) {
      return response.data;
    }).catch(function(error) {
      throw new Error(error.message);
    })
  },

  submitBooking: function(booking, stripeToken) {
    var requestUrl = `${THE_NEUK_API_URL}/bookings`;

    return axios({
      method: 'post',
      url: requestUrl,
      headers: { 'Authorization': TOKEN },
      data: { 'booking': booking, 'stripe_token': stripeToken }
    }).then(function(response) {
      return response.data;
    }).catch(function(error) {
      if(error.response.status === 401) {
        throw new Error("Your booking failed. Please try again");
      } else {
        throw new Error(error.message);
      }
    });
  },

  updateAdminBooking: function(booking) {
    var requestUrl = `${THE_NEUK_API_URL}/admin/bookings/${booking.id}`;

    return axios(
      {
        method: 'put',
        url: requestUrl,
        headers: {
          Authorization: TOKEN,
          'Content-Type': 'application/json'
        },
        data: { booking }
      }
    ).then(function(response) {
      return response.data;
    }).catch(function(error) {
      console.log(error)
    })
  },

  submitAdminBooking: function(booking) {
    var requestUrl = `${THE_NEUK_API_URL}/admin/bookings`;

    return axios(
      {
        method: 'post',
        url: requestUrl,
        headers: {
          Authorization: TOKEN,
          'Content-Type': 'application/json'
        },
        data: { booking }
      }
    ).then(function(response) {
      return response.data;
    }).catch(function(error) {
      console.log(error)
    })
  },

  getEvents: function() {
    var requestUrl = `${THE_NEUK_API_URL}/events`;

    return axios({
      method: 'get',
      url: requestUrl,
      headers: { 'Authorization': TOKEN }
    }).then(function(response) {
      return response.data;
    }).catch(function(error) {
      if(error.response.status === 401) {
        throw new Error("Your booking failed. Please try again");
      } else {
        throw new Error(error.message);
      }
    });
  },

  getUsers: function() {
    var requestUrl = `${THE_NEUK_API_URL}/admin/users`;

    return axios({
      method: 'get',
      url: requestUrl,
      headers: { 'Authorization': TOKEN }
    }).then(function(response) {
      return response.data;
    }).catch(function(error) {
      if(error.response.status === 401) {
        throw new Error("Failed to get admin users");
      } else {
        throw new Error(error.message);
      }
    });
  },

  getImages: function() {
    var requestUrl = `${THE_NEUK_API_URL}/admin/images`

    return axios({
      method: 'get',
      url: requestUrl,
      headers: { 'Authorization': TOKEN }
    }).then(function(response) {
      return response.data;
    }).catch(function(error) {
      if (error.response.status === 401) {
        throw new Error("Failed to get images");
      } else {
        throw new Error(error.message);
      }
    });
  },

  uploadImage: function(image) {
    var requestUrl = `${THE_NEUK_API_URL}/admin/images`;

    // Requered to send an image to the Back End
    var formData = new FormData();
    formData.append('photo', image.file);
    formData.append('name', image.name);
    formData.append('description', image.description);

    return axios({
      method: 'post',
      url: requestUrl,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
        'Authorization': TOKEN
      },
      data: formData
    }).then(function(response) {
      return response.data;
    }).catch(function(error) {
      if(error.response.status === 401) {
        throw new Error("Failed to upload image");
      } else {
        throw new Error(error.message);
      }
    });
  },

  deleteImage: function(imageId) {
    var requestUrl = `${THE_NEUK_API_URL}/admin/images/${imageId}`;

    return axios.delete(
      requestUrl,
      {
        headers: {
          'Authorization': TOKEN,
          'Content-Type': 'application/json'
      }
    }).then(function(response) {
      return response.data;
    }).catch(function(error) {
      if(error.response.status === 401) {
        throw new Error("Your image failed to delete. Please try again");
      } else {
        throw new Error(error.message);
      }
    })
  },

  updateImage: function(image) {
    var requestUrl = `${THE_NEUK_API_URL}/admin/images/${image.id}`;

    return axios(
      {
        method: 'put',
        url: requestUrl,
        headers: {
          Authorization: TOKEN,
          'Content-Type': 'application/json'
        },
        data: { image }
      }
    ).then(function(response) {
      return response.data;
    }).catch(function(error) {
      console.log(error)
    })
  },

  getLocations: function() {
    var requestUrl = `${THE_NEUK_API_URL}/locations`;

    return axios({
      method: 'get',
      url: requestUrl,
      headers: { 'Authorization': TOKEN }
    }).then(function(response) {
      return response.data;
    }).catch(function(error) {
      if (error.response.status === 401) {
        throw new Error("Failed to get locations");
      } else {
        throw new Error(error.message);
      }
    });
  },

  getThingsToDo: function() {
    var requestUrl = `${THE_NEUK_API_URL}/things_to_dos`;

    return axios({
      method: 'get',
      url: requestUrl,
      headers: { 'Authorization': TOKEN }
    }).then(function(response) {
      return response.data;
    }).catch(function(error) {
      if (error.response.status === 401) {
        throw new Error("Failed to get things to do");
      } else {
        throw new Error(error.message);
      }
    });
  }
}
