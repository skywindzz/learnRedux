import React, { Component } from 'react';

var renderComment = (comment, i) => {
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

var handleSubmit = function(e) {
    e.preventDefault();
    const { postId } = this.props.params;
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;
    this.props.addComment(postId, author, comment);
}
class Comments extends Component {    
    render() {
        return (
            <div className="comments">
                {this.props.postComments.map(renderComment)}
                {/* use ref to pass the information on the form */}
                { /* without the bind(this) you won't be able to pass the ref to outside funciton */}
                <form ref="commentForm" className="comment-form" onSubmit={handleSubmit.bind(this)}>
                <input type="text" ref="author" placeholder="author" />
                <input type="text" ref="comment" placeholder="comment" />
                <input type="submit" hidden />
                </form>
            </div>

        )    
    }
}
export default Comments;