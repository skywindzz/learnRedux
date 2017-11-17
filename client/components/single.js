import React, { Component } from 'react';
import Photo from './photo';
import Comments from './comments';

class Single extends Component {
    render() {
        //need index of post
        const { postId } = this.props.params;
        const i = this.props.posts.findIndex(post => post.code === postId)
        const post = this.props.posts[i];

        //the || [] is for when a single photo page has no comments this way if you add one 
        //you can add into that empty array also when need to map over it it won't show error if there is no comment
        const postComments = this.props.comments[postId] || [];
        console.log(postComments, "this is from single.js");
        //get the post  
        return (
            <div className="single-photo">
                <Photo i={i} post={post} {...this.props} />        
                <Comments postComments={postComments} {...this.props} />
            </div>
        )
    }
}

export default Single;