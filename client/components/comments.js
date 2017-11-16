import React, { Component } from 'react';

const renderComment = (comment, i) => {
    return (
        <div key={i} className="comment">
            <p>
                <strong>{comment.user}</strong>
                {comment.text}
                <button className="remove-comment">&times;</button>
            </p>
        </div>
    )
}

class Comments extends Component {
    render() {
        return (
            <div className="comments">
                {this.props.postComments.map(renderComment)}
                <form ref="commentForm" className="comment-form">
                <input type="text" ref="author" placeholder="author" />
                <input type="text" ref="comment" placeholder="comment" />
                </form>
            </div>

        )    
    }
}
export default Comments;