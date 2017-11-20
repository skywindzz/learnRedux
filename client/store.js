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

const enchancers = compose(
    window.devToolsExtension ? window.devToolsExtension():f => f
);

const store = createStore(rootReducer, defaultState, enchancers);

export const history = syncHistoryWithStore(browserHistory, store);

//reducer hot reload (means that when you update your reducer functions you don't have to refresh to make it work it will just work!)
//first you accept hot reload, then you re aquire the root reducer
//you can't use import inside a function so you need to do require
if(module.hot) {
    module.hot.accept('./reducers/', ()=> {
        const nextRootReducer = require('./reducers').default;
        store.replaceReducer(nextRootReducer);
    })
}
export default store;
