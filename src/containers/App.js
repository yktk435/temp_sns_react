// src/containers/Ranking.js
import { connect } from 'react-redux';
import App from '../App';
import * as fetch from '../actions/fetch';



const mapStateToProps = (state, ownProps) => ({
  ...state,

});

const mapDispatchToProps = dispatch => {
  return ({
    // getUserInfo () {
    // dispatch(fetch.getUserInfo());
    // },
    startLoginWithToken(token) {
      dispatch(fetch.startLoginWithToken(token));
    },
    saveChanges(data) {
      dispatch(fetch.saveChanges(data))
    },
    inputUserName(userName) {
      dispatch(fetch.inputUserName(userName))
    },
    menuToggle() {
      dispatch(fetch.menuToggle())
    }
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
