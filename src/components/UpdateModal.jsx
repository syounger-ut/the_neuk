var React = require("react");

class UpdateModal extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      updateMessage: ''
    };
  }

  componentDidMount() {
    this.setState({
      updateMessage: this.props.message
    })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      updateMessage: nextProps.message
    });
    setTimeout(function() {
      this.setState({ updateMessage: '' });
      console.log("HERE")
    }.bind(this), 1000);
  }

  render() {
    const updateMessage = this.state.updateMessage;

    var update;
    if(updateMessage) {
      update = <h4 className='updateMessage'>{updateMessage}</h4>;
    }

    return (
      <div>
        {update}
      </div>
    );
  }
}

module.exports = UpdateModal;
