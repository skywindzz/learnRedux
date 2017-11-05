import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory} from 'react-router';

import css from './styles/style.styl';

//components

import Main from './components/main'
import PhotoGrid from './components/photoGrid';
import Single from './components/single';

const router = (
    <Router history={browserHistory}>
        <Route path='/'  component={Main}>
            <IndexRoute component={PhotoGrid}></IndexRoute>
            <Route path='/view/:postId' component={Single}></Route>
        </Route>
    </Router>
)

render(router, document.getElementById('root'));