import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
//import * as actionCreators from '../redux/actions/actionCreators';
import Main from './Main.jsx';


function mapStateToProps(state) {
  return {
    isLoggedIn: state.isLoggedIn,
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)

}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
