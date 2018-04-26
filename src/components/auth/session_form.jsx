import React from 'react';
import ReactModal from 'react-modal';
import { connect } from 'react-redux';
import { login, signup } from '../../actions/session_actions.js';
import '../../styles/base/modal.css';
import '../../styles/splash/session_form.css';

const mapDispatchToProps = (dispatch) => (
  {
    login: (user) => dispatch(login(user)),
    signup: (user) => dispatch(signup(user))
  }
)

ReactModal.setAppElement('#root');
class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: Boolean(props.type),
    }
    this.handleClose = this.handleClose.bind(this);
    this.inputMapper = {
      f_name: 'First Name',
      l_name: 'Last Name',
      motto: 'Quote',
      email: 'Email',
      username: 'Username',
      password: 'Password'
    }
    this.renderInputs = this.renderInputs.bind(this);
    this.updateField = this.updateField.bind(this);
    this.switchSessionModal = this.switchSessionModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.inputs.forEach((input) => {
      this.setState({
        [input]: ''
      });
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    const state = {};
    this.props.inputs.forEach((input) => {
      state[input] = this.state[input];
    });
    if (this.props.type === 'signup') {
      this.props.signup(state);
    } else {
      this.props.login(state);
    }
  }

  updateField(field) {
    return (e) => {
      this.setState({
        [field]: e.currentTarget.value
      })
    }
  }

  renderInputs() {
    return this.props.inputs.map((input, i) => {
      const type = input === 'password' ? 'password' : 'text';
      const placeholder = this.inputMapper[input];
      return (
        <input type={type} placeholder={placeholder} onChange={this.updateField(input)} key={i} />
      )

    });
  }

  handleClose() {
    this.setState({
      isOpen: false
    })
    this.props.hideModal();
    // in here, dispatch the action that hides the modal dawg
  }

  switchSessionModal() {
    const SESSION_FORM = this.props.modalType;
    const type = this.props.type === 'signup' ? 'login' : 'signup';
    const modal = {
      modalType: SESSION_FORM,
      modalProps: {
        type,
        inputs: type === 'signup' ? ['username', 'email', 'password', 'f_name', 'l_name', 'motto'] : ['username', 'password'],
        showModal: this.props.showModal,
        hideModal: this.props.hideModal,
        modalType: SESSION_FORM
      }
    };

    this.props.showModal(modal);
  }

  // allow email or username to be inputted for log in nikka

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
          <h3 className="session-header">The Book</h3>
          <span>the antithesis of the casual office league</span>
          <section className="session-inputs-wrapper">
            {this.renderInputs()}
            <button className="session-button session-button-large" onClick={this.handleSubmit}>{this.props.signup ? 'REGISTER' : 'SIGN IN'}</button>
          </section>
          <div className="session-footer">
            {this.props.type === 'signup' && (<span>Already have an account? <span className="link-to" onClick={this.switchSessionModal}>Log in instead</span></span>)}
            {this.props.type !== 'signup' && (<span>Don't have an account? <span className="link-to" onClick={this.switchSessionModal}>Register now</span></span>)}
          </div>
        </div>
      </ReactModal>
    );
  }
}

export default connect(null, mapDispatchToProps)(SessionForm);
