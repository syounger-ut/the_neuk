import React from 'react';

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name:   '',
      last_name:    '',
      email:        '',
      phone_number: ''
    };
  }

  componentWillReceiveProps(nextProp) {
    console.log(nextProp)
    var user = nextProp.user;
    this.setState({
      first_name:   user.full_name,
      last_name:    user.full_name,
      email:        user.email,
      phone_number: user.phone_number
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(event);
  }

  render() {
    var user = this.props.user;

    var first_name   = this.state.first_name;
    var last_name    = this.state.last_name;
    var email        = this.state.email;
    var phone_number = this.state.phone_number;

    return (
      <form className="loginForm" onSubmit={this.handleSubmit}>
          <label htmlFor="first_name">First Name:</label>
          <div className="input">
            <input
              name="first_name"
              value={first_name}
              onChange={this.handleChange}
              placeholder="First Name" />
          </div>
          <label htmlFor="last_name">Last Name:</label>
          <div className="input">
            <input
              name="last_name"
              value={last_name}
              onChange={this.handleChange}
              placeholder="Last Name" />
          </div>
          <label htmlFor="email">Email:</label>
          <div className="input">
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              placeholder="Email" />
          </div>
          <label htmlFor="phone_number">Phone Number:</label>
          <div className="input">
            <input
              name="phone_number"
              value={phone_number}
              onChange={this.handleChange}
              placeholder="Phone Number" />
          </div>
        <input className="button" type="submit" value="Submit"/>
      </form>
    )
  }
}

export default User;
