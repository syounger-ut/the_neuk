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
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    var user = this.props.user;
    this.setState({
      first_name:   user.full_name,
      last_name:    user.full_name,
      email:        user.email,
      phone_number: user.phone_number
    });
  }

  componentWillReceiveProps(nextProps) {
    var user = nextProps.user;
    this.setState({
      first_name:   user.full_name,
      last_name:    user.full_name,
      email:        user.email,
      phone_number: user.phone_number
    });
    this.render()
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.updateUser(this.state)
  }

  handleChange(event) {
    var target = event.target;
    var name   = target.name;
    this.setState({
      [name]: target.value
    });
    console.log(this.context.router);
    <Redirect to="/" />
  }

  render() {
    const {full_name, first_name, last_name, email, phone_number} = this.state;
    // const {full_name, first_name, last_name, email, phone_number} = this.props.user;
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
