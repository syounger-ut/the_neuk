import React, { Component } from 'react';

// Redux
import { connect }      from 'react-redux'
import * as userActions from 'userActions';

// Components
import UpdateUser  from 'User/UpdateUser';
import MessageModal from 'MessageModal';

class User extends Component {
  render() {
    const user       = this.props.user;
    const updateUser = this.props.updateUser;

    const message = this.props.message;
    let updateMessage;
    if(message) {
      updateMessage = <MessageModal message={message.text} style={message.style}/>;
    }

    return (
      <div>
        {updateMessage}
        <UpdateUser user={user} updateUser={updateUser}/>
      </div>
    )
  }
}

// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user,
    message: state.message
  }
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (user, token) => dispatch(userActions.updateUser(user, token))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
