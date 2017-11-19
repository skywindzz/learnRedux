import React from 'react';
import { render } from 'react-dom';


import css from './styles/style.styl';

//components

import App from './components/App'
import PhotoGrid from './components/photoGrid';
import Single from './components/single';

//import react router dependency
import { Router, Route, IndexRoute, browserHistory} from 'react-router';
import { Provider } from 'react-redux';

//import data
import store, { history } from './store';

//using sentry tests
import Raven from 'raven-js';
import { sentry_url } from './data/config';

Raven.config('https://8bd6a53debfd41d88aebb338b4e3d099@sentry.io/247374').install()

const router = (
    <Provider store={ store }r>
        <Router history={history}>
            <Route path='/'  component={App}>
                <IndexRoute component={PhotoGrid}></IndexRoute>
                <Route path='/view/:postId' component={Single}></Route>
            </Route>
        </Router>
    </Provider>
)

render(router, document.getElementById('root'));

/* why use cloneElement on this.props.children */
