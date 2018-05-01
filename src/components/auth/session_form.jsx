import React from 'react';
import ReactModal from 'react-modal';
import { connect } from 'react-redux';
import { login, signup, receiveSessionErrors } from '../../actions/session_actions.js';
import '../../styles/base/modal.css';
import '../../styles/splash/session_form.css';

const mapDispatchToProps = (dispatch) => (
  {
    login: (user) => dispatch(login(user)),
    signup: (user) => dispatch(signup(user)),
    clearSessionErrors: () => dispatch(receiveSessionErrors([]))
  }
)

const mapStateToProps = ({ errors, session }) => {
  return { errors, session }
}

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
    this.clearInputs();
  }

  handleSubmit(e) {
    e.preventDefault();
    const submissionMapper = {
      'signup': this.props.signup,
      'login': this.props.login
    }

    const state = {};
    this.props.inputs.forEach((input) => {
      state[input] = this.state[input];
    });

    submissionMapper[this.props.type](state).then(() => {
      if (this.props.session.currentUser) {
        this.props.hideModal();
      } else {
        // render errors
      }
    });

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
  }

  clearInputs() {
    this.props.inputs.forEach((input) => {
      this.setState({
        [input]: ''
      });
    })
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
    this.props.clearSessionErrors();
    this.props.showModal(modal);
  }

  // add email password retrival
  // make button a submit button so we can press enter

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
          <form className="session-inputs-wrapper">
            {this.renderInputs()}
            <input type="submit" className="session-button session-button-large" onClick={this.handleSubmit} value={this.props.type === 'signup' ? 'REGISTER' : 'SIGN IN'}/>
          </form>
          <div className="session-footer">
            {this.props.type === 'signup' && (<span>Already have an account? <span className="link-to" onClick={this.switchSessionModal}>Log in instead</span></span>)}
            {this.props.type !== 'signup' && (<span>Don't have an account? <span className="link-to" onClick={this.switchSessionModal}>Register now</span></span>)}
          </div>
        </div>
      </ReactModal>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
