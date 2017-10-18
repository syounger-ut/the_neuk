// Make API Calls here

import axios from 'axios';

const THE_NEUK_API_URL = 'http://localhost:3000/api'

module.exports = {
  authenticateToken: function(token) {
    var requestUrl = `${THE_NEUK_API_URL}/users/me`;

    return axios({
      method: 'get',
      url: requestUrl,
      headers: { 'Authorization': token }
    }).then(function(response) {
      return response.data;
    }).catch(function(error) {
      if(error.response.status === 401) {
        throw new Error("Your logged in session expired. Please try logging in again");

      } else {
        throw new Error(error.message);
      }
    });
  }
}
