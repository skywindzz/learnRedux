import React from 'react';
import { Link } from 'react-router';
import PhotoGrid from './photoGrid';
import Single from './single';

const Main = React.createClass({
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
})

export default Main;