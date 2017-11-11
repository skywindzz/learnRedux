import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreator';

import Main from './Main';

const mapStateToProps = state => {
    return {
        posts: state.posts,
        comments: state.comments
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators(actionCreators, dispatch); 
}
const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;