import React, { Component } from 'react';

class Comments extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderComment = this.renderComment.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const { postId } = this.props.params;
        console.log(postId);
        const author = this.refs.author.value;
        const comment = this.refs.comment.value;
        this.props.addComment(postId, author, comment);
        this.refs.commentForm.reset();
    }

       renderComment(comment, i) {
        return (
            <div key={i} className="comment">
                <p>
                    <strong>{comment.user}</strong>
                    {comment.text}
                    <button className="remove-comment" onClick={this.props.removeComment.bind(null, this.props.params.postId, i)}>&times;</button>
                </p>
            </div>
        )
    } 
    
    render() {
        return (
            <div className="comments">
                {this.props.postComments.map(this.renderComment)}
                {/* use ref to pass the information on the form */}
                { /* without the bind(this) you won't be able to pass the ref to outside funciton */}
                <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
                <input type="text" ref="author" placeholder="author" />
                <input type="text" ref="comment" placeholder="comment" />
                <input type="submit" hidden />
                </form>
            </div>

        )    
    }
}

export default Comments;

