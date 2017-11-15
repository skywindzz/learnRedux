import React, { Component } from 'react';
import Photo from './photo';
import Comments from './comments';

class Single extends Component { 
    render() {
        //need index of post
        const i = this.props.posts.findIndex(post => post.code === this.props.params.postId)
        const post = this.props.posts[i];

        //get the post  
        return (
            <div className="single-photo">
                <Photo i={i} post={post} {...this.props} />        
                <Comments />
            </div>
        )
    }
}

export default Single;