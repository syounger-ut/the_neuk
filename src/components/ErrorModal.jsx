var React = require("react");

class ErrorModal extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: ''
    };
  }

  componentDidMount() {
    this.setState({
      errorMessage: this.props.message
    })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      errorMessage: nextProps.message
    });
  }

  render() {
    const errorMessage = this.state.errorMessage;

    var error;
    if(errorMessage) {
      error = <h4 className='errorMessage'>{errorMessage}</h4>;
    }

    return (
      <div>
        {error}
      </div>
    );
  }
}

module.exports = ErrorModal;
