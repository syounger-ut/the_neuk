var React = require("react");
var Login = require("Login");

var Main = React.createClass({
  render: function() {
    return (
      <div>
        <div>The Neuk</div>
        <Login/>
      </div>
    )
  }
});

module.exports = Main;
