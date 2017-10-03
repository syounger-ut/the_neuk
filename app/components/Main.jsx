var React     = require("react");
var LoginForm = require("LoginForm");

var Main = React.createClass({
  render: function() {
    return (
      <div>
        <div>The Neuk</div>
        <LoginForm/>
      </div>
    )
  }
});

module.exports = Main;
