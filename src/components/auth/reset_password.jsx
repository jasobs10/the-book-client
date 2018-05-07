import React from 'react';
import '../../styles/base/modal.css';
import '../../styles/splash/session_form.css';
import ReactModal from 'react-modal';
import { connect } from 'react-redux';
import { resetPassword } from '../../actions/session_actions.js';

const mapDispatchToProps = (dispatch) => {
  return {
    resetPassword: (email) => dispatch(resetPassword(email))
  }
};

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session
  }
}

class ResetPasswordForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: true,
      email: ''
    }
    this.handleClose = this.handleClose.bind(this);
    this.updateField = this.updateField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClose() {
    this.setState({
      isOpen: false
    })
    this.props.clearSessionErrors();
    this.props.hideModal();
  }

  updateField(e) {
    this.setState({email: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.resetPassword(this.state.email).then(() => {
      this.props.clearSessionErrors();
      this.switchToLoginModal();
    });
  }

  renderErrors() {
    return this.props.errors.base ? <div className={'login-error-message'} style={{ marginTop: '-10px' }}>{this.props.errors.base}</div> : '';
  }

  switchToLoginModal() {
    const SESSION_FORM = 'SESSION_FORM'
    const type = 'reset'
    const modal = {
      modalType: SESSION_FORM,
      modalProps: {
        type,
        inputs: ['username', 'password'],
        showModal: this.props.showModal,
        hideModal: this.props.hideModal,
        modalType: SESSION_FORM
      }
    };
    this.props.showModal(modal);
  }

  render() {
    return (
      <ReactModal
        isOpen={this.state.isOpen}
        onRequestClose={this.handleClose}
        shouldCloseOnOverlayClick={true}
        contentLabel="Modal Tyme"
        className="session-modal"
        overlayClassName="modal-overlay"
      >
      <div className="session-form-wrapper">
        <h3 className="session-header">Reset Password</h3>
        <span>
          Enter the email address you used to register and we'll send you a temporary password to reset your account.
        </span>
        <form className="session-inputs-wrapper">
          <div>
            <input type="text" className={this.props.errors.base ? 'input-error' : ''} placeholder="Email address" onChange={(e) => this.updateField(e)}/>
          </div>
          {this.renderErrors()}
          <input type="submit" className="session-button session-button-large" onClick={(e) => this.handleSubmit(e)} value="RESET PASSWORD"/>
        </form>
      </div>
      </ReactModal>
    )
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ResetPasswordForm);
