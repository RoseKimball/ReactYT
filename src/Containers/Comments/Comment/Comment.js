import React from 'react';
import './Comment.scss';
import { Button, Image } from 'semantic-ui-react';
import Rating from '../../../Components/Rating/Rating';


export function Comment(props) {
    return (
        <div className='comment'>
            <Image className='user-image' src='http://via.placeholder.com/48x48' circular/>
            <div>
                <div className='user-name'>User name</div>
                <span>comment text</span>
                <div className='comment-actions'>
                    <Rating likeCount={1}/> 
                    <Button size='mini' compact>reply</Button>
                </div>
            </div>
        </div>
    )
}

export default Comment;
