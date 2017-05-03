var GreeterMessage = React.createClass({
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

var GreeterForm = React.createClass({
  onFormSubmit: function(e) {
    e.preventDefault();

    var name = this.refs.name.value;
    var message = this.refs.message.value;
    var changes = {};

    if (name.length > 0) {
      this.refs.name.value = "";
      changes.name = name;
    }

    if (message.length > 0) {
      this.refs.message.value = "";
      changes.message = message;
    }

    this.props.onChange(changes);

  },
  render: function() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type="text" ref="name" placeholder="Name"/>
        <br/>
        <textarea type="text" ref="message" placeholder="Message"/>
        <br/>
        <button>Submit</button>
      </form>
    );
  }
});

var Greeter = React.createClass({
  getDefaultProps: function() {
    return {
      name: "React",
      message: "This is the default message"
    }
  },
  getInitialState: function() {
    return {
      name: this.props.name,
      message: this.props.message
    };
  },
  handleChange: function(changes) {
    this.setState(changes);
  },
  render: function() {
    var name = this.state.name;
    var message = this.state.message;
    return (
      <div>
        <GreeterMessage name={name} message={message}/>
        <GreeterForm onChange={this.handleChange}/>
      </div>
    );
  }
});

var firstName = "Sam"

ReactDOM.render(
  <Greeter/>,
  document.getElementById("app")
);
