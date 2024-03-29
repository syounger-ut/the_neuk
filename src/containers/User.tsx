import * as React from 'react';

// Redux
import { connect } from 'react-redux'
import * as userActions from '../actions/userActions';

// Components
import UpdateUser from '../components/User/UpdateUser';
import MessageModal from './MessageModal';

type Props = {
  user: {
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
  };
  updateUser: () => void;
  message: {
    text: string;
    style: string;
  };
};

class User extends React.Component<Props> {
  render() {
    const user = this.props.user;
    const updateUser = this.props.updateUser;

    const message = this.props.message;
    let updateMessage;
    if (message) {
      updateMessage = <MessageModal message={message.text} style={message.style} />;
    }

    return (
      <div>
        {updateMessage}
        <UpdateUser user={user} updateUser={updateUser} />
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
    updateUser: (user, token) => dispatch(userActions.updateUser(user))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
