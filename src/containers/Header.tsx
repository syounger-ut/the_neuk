import * as React from 'react';

// Redux
import { connect } from 'react-redux'
import * as authenticationActions from '../actions/authenticationActions';

// Components
import Nav from '../components/Header/Nav';

type Props = {
  user: {
    id: number;
    name: string;
    email: string;
    role: string;
  };
  logout: () => void;
}

class Header extends React.Component<Props> {
  render() {
    const user = this.props.user;
    const logout = this.props.logout;
    return (
      <header>
        <Nav logout={logout} user={user} />
      </header>
    );
  }
}

// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    // You can now say this.props.user
    user: state.currentUser
  }
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    // You can now say this.props.logoutUser
    logout: () => dispatch(authenticationActions.logout())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
