var Greeter = React.createClass({
  getDefaultProps: function() {
    return {
      name: "React",
      message: "This is from a component"
    }
  },
  render: function() {
    var name = this.props.name;
    var message = this.props.message;
    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{message}</p>
      </div>
    );
  }
});

var firstName = "Sam"

ReactDOM.render(
  <Greeter name={firstName} message="This is a different message"/>,
  document.getElementById("app")
);
