import * as React from 'react';

import { connect } from 'react-redux';

type Props = {
  message: {
    message: string;
    style: string;
  };
}

class MessageModal extends React.Component<Props> {
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

export default connect(mapStateToProps)(MessageModal);
