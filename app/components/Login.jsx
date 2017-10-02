var React = require("react");

var Login = React.createClass({
  getInitialState: function(){
    return {
      email: "",
      password: ""
    }
  },
  handleLogin: function() {
    this.setState({
      email: this.refs.email,
      password: this.refs.password
    });
    console.log(this.state.email.value, this.state.password.value);
  },
  render: function() {
    return (
      <div>
        <form>
          <input type="text" ref="email" placeholder="Email" onChange={this.handleLogin}/>
          <input type="text" ref="password" placeholder="Password" onChange={this.handleLogin}/>
        </form>
      </div>
    )
  }
});

module.exports = Login;
