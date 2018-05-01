import React from 'react';
import '../../styles/splash/splash.css';

// should get state, and map dispatch to the modals, who are just presentational components
import { connect } from 'react-redux';

// import SESSION_FORM from '../shared/modal_root.jsx';
import { showModal, hideModal } from '../../actions/modal_actions.js';
import { SESSION_FORM } from '../shared/modal_root.jsx';

import createLeague from '../../assets/imgs/create_league.png';
import inviteFriends from '../../assets/imgs/invite_friends.png';
import winMoney from '../../assets/imgs/money.pmg';
import podium from '../../assets/ings/win.png';

const mapDispatchToProps = (dispatch) => {
  return {
    showModal: (modal) => dispatch(showModal(modal)),
    hideModal: () => dispatch(hideModal())
  }
};


const Splash = ({ showModal, hideModal }) => {

  const buildSessionType = (type) => {
    return {
      modalType: SESSION_FORM,
      modalProps: {
        type,
        inputs: type === 'signup' ? ['username', 'email', 'password', 'f_name', 'l_name', 'motto'] : ['username', 'password'],
        showModal,
        hideModal,
        modalType: SESSION_FORM
      }
    }
  }

  return (
    <div className="splash-wrapper">
      <section className="splash-header">
        <div className="login-bar">
          <div>
            <span>The Book</span>
          </div>
          <div className="login-buttons-container">
            <button onClick={() => showModal(buildSessionType('login'))}>Log In</button>
            <button onClick={() => showModal(buildSessionType('signup'))}>Sign Up</button>
          </div>
        </div>
        <div className="splash-header-body">
          body
        </div>
      </section>
      <section className="splash-body">
        <h2>pick against your friends family and co-workers</h2>
        <div className="splash-body-main">
          <div className="splash-features-container">
            <div>
              sdfsdf
            </div>

            <div>
              sdfsdf
            </div>

            <div>
              sdfsdf
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default connect(null, mapDispatchToProps)(Splash);
