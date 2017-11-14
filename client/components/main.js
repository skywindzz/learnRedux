import React, { Component } from 'react';
import { Link } from 'react-router';
import PhotoGrid from './photoGrid';
import Single from './single';

class Main extends Component {
    render() {
        return (
            <div>
                <h1>
                    <Link to="/">ReduxInstagram</Link>
                </h1>
                {React.cloneElement(this.props.children, this.props)}
            </div>
        )
    }
}

export default Main;