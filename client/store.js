import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux'; /* this hooks up react router with redux */
import { browserHistory } from 'react-router';

//import the root reducer and data
import rootReducer from './reducers/index';
import comments from './data/comments';
import posts from './data/posts';

//create an object for the default data

const defaultState = {
    posts, 
    comments
}

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
