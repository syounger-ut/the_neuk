import * as React from 'react';

// Redux
import { connect } from 'react-redux'
import * as authenticationActions from 'authenticationActions';

// Components
import Nav from 'Header/Nav';

class Header extends React.Component {
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
