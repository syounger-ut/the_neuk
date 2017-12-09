import React, { Component } from 'react';

import { connect } from 'react-redux';

class MessageModal extends Component{
  render() {
    const message = this.props.message;
    const className = `message ${message.style}`;

    return (
      <h4 className={className}>{message.message}</h4>
    );
  }
}

// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    message: state.message,
  }
};

module.exports = connect(mapStateToProps)(MessageModal);
