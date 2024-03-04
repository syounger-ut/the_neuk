import * as React from 'react';

type Props = {
  register: (user: any) => void;
}

type State = {
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  password: string;
}

class Register extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      first_name: '',
      last_name: '',
      email: '',
      phone_number: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let key = event.target.name;
    let value = event.target.value;
    this.setState({
      ...this.state,
      [key]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.register(this.state);
  }

  render() {
    const { username, first_name, last_name, email, phone_number, password } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
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
            type="tel"
            name="phone_number"
            value={phone_number}
            onChange={this.handleChange}
            placeholder="Phone Number" /></span>
        </label>
        <label>
          Password:
          <span><input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            placeholder="Password" /></span>
        </label>
        <input className="button" type="submit" value="Submit" />
      </form>
    )
  }
}

export default Register;
