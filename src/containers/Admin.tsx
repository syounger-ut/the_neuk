import * as React from 'react';
import { Route } from 'react-router-dom'

import { connect } from 'react-redux';
import * as adminActions from '../actions/adminActions';

// Components
import AdminNav from '../components/Admin/Nav';
import Home from '../components/Admin/Home';
import Bookings from '../containers/Admin/Bookings';
import Images from '../containers/Admin/Images';

type Props = {
  getUsers: () => void;
  user: {
    id: number;
    username: string;
    email: string;
    role: string;
  };
}

class Admin extends React.Component<Props> {
  componentWillMount() {
    this.props.getUsers();
  }

  render() {
    const user = this.props.user;
    return (
      <div className='admin-template'>
        <AdminNav />
        <Route path='/admin' element={<Home />} />
        <Route path='/admin/images' element={<Images />} />
        <Route path='/admin/bookings' element={<Bookings />} />
      </div>
    );
  }
}

// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user,
  }
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: () => dispatch(adminActions.getUsers()),
    uploadImage: (imageDetails) => dispatch(adminActions.uploadImage(imageDetails))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
