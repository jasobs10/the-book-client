import React from 'react';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');
class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    //set state conditionally and render conditionally
  }

  render() {
    return (
      <ReactModal>
        <h1>muddah foxin modal nikka</h1>
      </ReactModal>
    );
  }
}

export default SessionForm;
