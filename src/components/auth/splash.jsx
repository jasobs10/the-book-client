import React from 'react';
import '../../styles/splash/splash.css';

// should get state, and map dispatch to the modals, who are just presentational components
import { connect } from 'react-redux';

// import SESSION_FORM from '../shared/modal_root.jsx';
import { showModal, hideModal } from '../../actions/modal_actions.js';
import { SESSION_FORM } from '../shared/modal_root.jsx';

import createLeague from '../../assets/imgs/create_league.png';
import inviteFriends from '../../assets/imgs/invite_friends.png';
import winMoney from '../../assets/imgs/money.png';
import podium from '../../assets/imgs/podium.png';

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
              <img src={createLeague} alt="create"/>
              <div>
                create private leagues and invite your friends
              </div>
            </div>
            <div>
              <img src={winMoney} alt="money"/>
              <div>
                set buy in amount and payout rules
              </div>
            </div>

            <div>
              <img src={inviteFriends} alt="invite"/>
              <div>
                join or request access to your friends' private leagues
              </div>
            </div>

            <div>
              <img src={podium} alt="podium"/>
              <div>
                Set custom rankings and scores for your league
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default connect(null, mapDispatchToProps)(Splash);
