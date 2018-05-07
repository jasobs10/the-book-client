import React from 'react';
import '../../styles/splash/splash.css';
// should get state, and map dispatch to the modals, who are just presentational components
import { connect } from 'react-redux';

// import SESSION_FORM from '../shared/modal_root.jsx';
import { showModal, hideModal } from '../../actions/modal_actions.js';
import { SESSION_FORM } from '../shared/modal_root.jsx';
import Carousel from '../shared/carousel.jsx';

import createLeague from '../../assets/imgs/create_league.png';
import inviteFriends from '../../assets/imgs/invite_friends.png';
import winMoney from '../../assets/imgs/money.png';
import podium from '../../assets/imgs/podium.png';
import saridSpecial from '../../assets/imgs/sarid_special.png';
import linkstromLocks from '../../assets/imgs/linkstrom_locks.JPG';

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
        inputs: type === 'signup' ? ['username', 'email', 'password', 'f_name', 'l_name'] : ['username', 'password'],
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
          <div className="login-buttons-container">
            <button onClick={() => showModal(buildSessionType('login'))}>Log In</button>
            <button onClick={() => showModal(buildSessionType('signup'))}>Sign Up</button>
          </div>
        </div>
        <div className="splash-body">
          <h2>welcome to the book</h2>
          <h3>the antithesis of the casual office league</h3>
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
          <button className="session-button session-button-large" onClick={() => showModal(buildSessionType('signup'))}>SIGN UP TODAY</button>
        </div>
      </section>
      <section className="splash-center">
        <h1>PLAY WATCH AND WIN</h1>
      </section>
      <section className="splash-center">
        <div>
          <h2>About</h2>
          <p>
            Welcome to the most competitive, sophisticated, and intensive NFL ATS pick'em league you will ever join.
            The antithesis of the casual office league, this is a group of elite handicappers who take pride, each and every week of the
            season, in their ability to distinguish winners from losers. For those of you who are into making picks by throwing darts an
            hour before the games kickoff, you would do well to look elsewhere. Put a little more bluntly: if you are the type of person
            who suffers from mild forms of depression after a bad week (and yes, they will happen),
            then this league is probably for you - otherwise, you're just throwing your money away to the sharks
            (which, of course, they will gladly take).
          </p>
          <p>
            All jokes aside, if you enjoy picking NFL games against the spread,
            you should strongly consider joining this pick'em league.
            It makes literally every game interesting - including when the Browns play
            the Raiders in a Week 17 game more worthless than Enron stock, your eyes will
            remain glued to the TV while Oakland drives down the field to attempt an otherwise
            meaningless back-door cover. It's also a great subject for smack talk, of which there will be plenty.
            It's a lot of fun and, arguably, takes more skill than most fantasy sports games,
            including the ever popular fantasy football. Still need convincing? Talk to the person who
            referred you to the site - they should be able to tell you everything you need to know.
          </p>
        </div>

        <div>
          <div>
            <h2>Our Sponsors</h2>
            <div className="sponsor-container">
              <Carousel
                displayLength={1}
                carouselItems={[
                  <img src={saridSpecial} alt="sarid"/>,
                  <img src={linkstromLocks} alt="locks"/>
                ]}
                isAutoScroll={true}
              />
            </div>
          </div>
        </div>


      </section>

    </div>
  );
}

export default connect(null, mapDispatchToProps)(Splash);
