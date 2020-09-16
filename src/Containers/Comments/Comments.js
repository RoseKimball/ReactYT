import React, { Component } from 'react';
import CommentsHeader from './CommentsHeader/CommentsHeader';
import AddComment from './AddComment/AddComment';
import Comment from './Comment/Comment';
import { Divider } from 'semantic-ui-react';

export class Comments extends Component {
    render() {
        return (
            <div>
                <Divider />
                <CommentsHeader amountComments={this.props.amountComments}/>
                <AddComment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
            </div>
        );
    };
};

export default Comments;