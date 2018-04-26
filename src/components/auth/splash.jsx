import React from 'react';
import '../../styles/splash/splash.css';

// import { connect } from 'react-redux';
// import { login,  signup } from '../../actions/session_actions.js';

export const Splash = () => {
  return (
    <div className="splash-wrapper">
      <section className="splash-header">
        <div className="login-bar">
          <div>
            <span>The Book</span>
          </div>
          <div className="login-buttons-container">
            <button>Log In</button>
            <button>Sign Up</button>
          </div>
        </div>
        <div>
          body
        </div>
      </section>
      <section className="splash-body">
        sdfdsf
      </section>
    </div>
  );
}















// const mapStateToProps = (state) => {
//   return {
//     errors: state.errors,
//     session: state.session
//   }
// };
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//     signup: (user) => dispatch(signup(user)),
//     login: (user) => dispatch(login(user))
//   }
// };
//
// class Splash extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       username: '',
//       password: '',
//       f_name: '',
//       l_name: '',
//       motto: '',
//       email: ''
//     }
//
//     this.submit = this.submit.bind(this);
//
//   }
//
//   updateField(field) {
//
//     return (e) => {
//       this.setState({
//         // short for this.state[field]
//         [field]: e.currentTarget.value
//       });
//     }
//   }
//
//   submit(e) {
//     e.preventDefault();
//     // console.log('hello');
//     const user = Object.assign({}, this.state);
//     this.props.signup(user);
//   }
//
//   render() {
//     return (
//       <div>
//         <h1>Da login page</h1>
//         <h2>create user</h2>
//         <form>
//           <input type="text"
//             placeholder = "username"
//             value={this.state.username}
//             onChange={this.updateField('username')}
//           />
//
//           <input type="text"
//             placeholder = "Email"
//             value={this.state.email}
//             onChange={this.updateField('email')}
//           />
//
//           <input type="text"
//             placeholder = "f_name"
//             value={this.state.f_name}
//             onChange={this.updateField('f_name')}
//           />
//
//           <input type="text"
//             placeholder = "l_name"
//             value={this.state.l_name}
//             onChange={this.updateField('l_name')}
//           />
//
//           <input type="text"
//             placeholder = "motto"
//             value={this.state.motto}
//             onChange={this.updateField('motto')}
//           />
//
//           <input type="password"
//             placeholder = "password"
//             value={this.state.password}
//             onChange={this.updateField('password')}
//           />
//
//           <button onClick={(e) => this.submit(e)}>Sign up</button>
//
//
//         </form>
//       </div>
//
//
//     );
//   }
//
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(Splash);

// logout needs to clear local storage
