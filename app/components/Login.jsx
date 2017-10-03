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
  },
  handleSubmit: function(event) {
    event.preventDefault();
    var email = this.state.email.value;
    var password = this.state.password.value;
    console.log(email, password);
  },
  render: function() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="email" placeholder="Email" onChange={this.handleLogin}/>
          <input type="password" ref="password" placeholder="Password" onChange={this.handleLogin}/>
          <input className="button" type="submit"/>
        </form>
      </div>
    )
  }
});

module.exports = Login;
