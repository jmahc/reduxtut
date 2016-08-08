import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

function mapStateToProps(state) {
    return {
        posts: state.posts,
        comments: state.comments
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

// We say connect...
// It takes two things (the parameters)
// Two functions that take 
// - the state (posts, comments)
// - the dispatch (the action creators)
// It will surface those (data and functions) via props


//Main has access to all of these properties because of CONNECT!!
const App = connect(mapStateToProps,
    mapDispatchToProps)(Main);

export default App;