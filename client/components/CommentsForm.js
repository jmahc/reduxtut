import React from 'react';

const CommentsForm = React.createClass({
    handleSubmit(e) {
        e.preventDefault();
        const {postId} = this.props.params;
        const author = this.refs.author.value;
        const comment = this.refs.author.value;
        console.log('Submitting form!');
        console.log(postId, author, comment);
        this.props.addComment(postId, author, comment);
        this.refs.commentForm.reset();
    },
    render() {
        return (
            <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
                    <input type="text" ref="author" placeholder="author" />
                    <input type="text" ref="comment" placeholder="comment" />
                    <input type="submit" hidden/>
                </form>
            );
    }
});

export default CommentsForm;