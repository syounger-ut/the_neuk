import * as React from 'react';

class UpdateUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      phone_number: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const user = this.props.user;
    if (user) { this.setUserState(user) }
  }

  componentWillReceiveProps(nextProps) {
    const user = nextProps.user;
    if (user) { this.setUserState(user) }
  }

  setUserState(user) {
    this.setState({
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      phone_number: user.phone_number
    })
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    this.setState({
      [name]: target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.updateUser(this.state);
  }

  render() {
    const { first_name, last_name, email, phone_number } = this.state;

    return (
      <form className="loginForm" onSubmit={this.handleSubmit}>
        <label>
          First Name:
          <span><input
            name="first_name"
            value={first_name}
            onChange={this.handleChange}
            placeholder="First Name" /></span>
        </label>
        <label>
          Last Name:
          <span><input
            name="last_name"
            value={last_name}
            onChange={this.handleChange}
            placeholder="Last Name" /></span>
        </label>
        <label>
          Email:
          <span><input
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            placeholder="Email" /></span>
        </label>
        <label>
          Phone Number:
          <span><input
            name="phone_number"
            value={phone_number}
            onChange={this.handleChange}
            placeholder="Phone Number" /></span>
        </label>
        <input className="button" type="submit" value="Submit" />
      </form>
    )
  }
}

export default UpdateUser;
