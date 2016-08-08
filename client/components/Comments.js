import React from 'react';
import CommentsForm from './CommentsForm';

const Comments = React.createClass({
    renderComment(comment, i) {
        console.log(comment);
        return (
            <div className="comment" key={i}>
            <p>
                <strong>
                    {comment.user}
                </strong>
                {comment.text}
                <button className="remove-comment" onClick={this.props.removeComment.bind(null, this.props.params.postId, i)}>×</button>
            </p>
            </div>
        )
    },

    render() {
        return (
            <div className="comments">
                {this.props.postComments.map(this.renderComment)}
                <CommentsForm {...this.props} />
            </div>
            );
    }
});

export default Comments;