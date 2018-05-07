import React from 'react';
import '../../styles/base/modal.css';
import '../../styles/splash/session_form.css';
import ReactModal from 'react-modal';
import { connect } from 'react-redux';
import { updatePasswordAndLogin } from '../../actions/session_actions.js';

const mapDispatchToProps = (dispatch) => {
  return {
    updatePassword: (user) => dispatch(updatePasswordAndLogin(user))
  }
};

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session
  }
}

class UpdatePasswordForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: true,
      username: props.username,
      password: '',
      password2: '',
      temp_password: props.tempPassword
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

  updateField(field) {
    return (e) => {
      this.setState({
        [field]: e.currentTarget.value
      })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updatePassword({
      username: this.state.username,
      password: this.state.password,
      temp_password: this.state.temp_password
    }).then(() => {
      this.props.clearSessionErrors();
      this.props.hideModal();
    });
  }

  renderErrors() {
    return this.props.errors.base ? <div className={'login-error-message'} style={{ marginTop: '-10px' }}>{this.props.errors.base}</div> : '';
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
        <h3 className="session-header">Update Password</h3>
        <span>
          Update to New Password
        </span>
        <form className="session-inputs-wrapper">
          <div>
            <input type="text" className={this.props.errors.base ? 'input-error' : ''} placeholder="New Password" onChange={this.updateField('password')}/>
          </div>
          <div>
            <input type="text" className={this.props.errors.base ? 'input-error' : ''} placeholder="New Password" onChange={this.updateField('password2')}/>
          </div>
          {this.renderErrors()}
          <input type="submit" className="session-button session-button-large" onClick={(e) => this.handleSubmit(e)} value="UPDATE PASSWORD"/>
        </form>
      </div>
      </ReactModal>
    )
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdatePasswordForm);
