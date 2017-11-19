import React, { Component } from 'react';

class UpdateModal extends Component{
  constructor(props) {
    super(props);
    this.state = {
      updateMessage: '',
      closeMessage: false,
      updateClass: [ 'updateMessage' ]
    };
  }

  componentDidMount() {
    this.setState({
      updateMessage: this.props.message
    });
    setTimeout(function() {
      this.setState({
        closeMessage: true,
        updateClass: [ 'updateMessage', 'closeMessage' ]
      });
    }.bind(this), 1000);
    setTimeout(function() {
      this.setState({
        updateMessage: '',
        updateClass: [ 'updateMessage' ]
      });
    }.bind(this), 2000);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      updateMessage: nextProps.message
    });
    setTimeout(function() {
      this.setState({
        closeMessage: true,
        updateClass: [ 'updateMessage', 'closeMessage' ]
      });
    }.bind(this), 1000);
    setTimeout(function() {
      this.setState({
        updateMessage: '',
        updateClass: [ 'updateMessage' ]
      });
    }.bind(this), 2000);
  }

  render() {
    const updateMessage = this.state.updateMessage;
    const updateClass   = this.state.updateClass;

    var update;
    if(updateMessage) {
      update = <h4 className={updateClass.join(' ')}>{updateMessage}</h4>;
    }

    return (
      <div>
        {update}
      </div>
    );
  }
}

module.exports = UpdateModal;
