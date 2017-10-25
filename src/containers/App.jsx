import React, { Component } from 'react';
import { withRouter }       from 'react-router-dom';

import theNeukApi from 'theNeukApi';

// Components
import Header      from 'Header';
import Main        from 'Main';
import ErrorModal  from 'ErrorModal';
import UpdateModal from 'UpdateModal';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        id:      '',
        full_name:    '',
        first_name:    '',
        last_name:    '',
        email:        '',
        phone_number: '',
        bookings:     [],
      },
      loggedIn: false
    };
    this.handleUserLogin = this.handleUserLogin.bind(this);
    this.updateUser      = this.updateUser.bind(this);
  }

  componentDidMount(){
    this.authenticateUserToken.bind(this).call();
  }

  updateUser(user) {
    var self = this;
    var token       = localStorage.getItem('auth_token');

    theNeukApi.updateUser(user, token).then(function(user_update) {
      self.setState({
        user: {
          first_name:   user_update.first_name,
          last_name:    user_update.last_name,
          email:        user_update.email,
          phone_number: user_update.phone_number
        },
        updateMessage: 'Your details have been updated'
      });
      setTimeout(function() {
        self.setState({
          updateMessage: ''
        })
      }.bind(this), 2000);
    });
  }

  authenticateUserToken() {
    var token = localStorage.getItem('auth_token');
    var self  = this;
    if(token) {
      theNeukApi.authenticateToken(token).then(function(user) {
        self.setState({
          user: {
            id:           user.id,
            full_name:    user.full_name,
            first_name:   user.first_name,
            last_name:    user.last_name,
            email:        user.email,
            phone_number: user.phone_number,
            bookings:     user.bookings,
          },
          loggedIn:   true
        });
      }).catch(function(error) {
        localStorage.removeItem('auth_token');
        self.setState({
          errorMessage: error.message
        });
        self.props.history.push("/login");
      });
    }
  }

  handleUserLogin(action, response = null) {
    if (action === "login") {
      localStorage.setItem('auth_token', response.token);
      this.setState({
        user: {
          full_name:    response.user.full_name,
          first_name:   response.user.first_name,
          last_name:    response.user.last_name,
          email:        response.user.email,
          phone_number: response.user.phone_number,
          bookings:     response.user.bookings,
        },
        loggedIn:   true,
        errorMessage: ''
      });
      this.props.history.push("/");
    } else {
      localStorage.removeItem('auth_token');
      this.setState({
        user: {
          full_name:    '',
          email:        '',
          phone_number: '',
          bookings:     '',
        },
        loggedIn: false
      });
      this.props.history.push("/");
    }
  }

  render() {
    const { user, loggedIn, errorMessage, updateMessage } = this.state;

    function renderError() {
      if(typeof errorMessage === "string") {
        return (
          <ErrorModal message={errorMessage}/>
        );
      }
    }

    function renderUpdate() {
      if(typeof updateMessage === "string") {
        return (
          <UpdateModal message={updateMessage}/>
        );
      }
    }

    return (
      <div>
        <Header user={user} loggedIn={loggedIn} handleUserLogin={this.handleUserLogin}/>
        {renderError()}
        {renderUpdate()}
        <Main handleUserLogin={this.handleUserLogin} user={user} updateUser={this.updateUser}/>
      </div>
    );
  }
}

export default withRouter(App);
