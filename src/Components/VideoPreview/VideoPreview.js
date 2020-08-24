import React from 'react';
import './VideoPreview.scss';
import { Image } from 'semantic-ui-react';

export function VideoPreview(props) {
    return (
        <div className='video-preview'>
            <div className='image-container'>
                <Image src='http://via.placeholder.com/210x118'/>
                <div className='time-label'>
                    <span>07:45</span>
                </div>
            </div>
            <div className='video-info'>
                <div className='semi-bold two-lines-max'>Video Title</div>
                <div className='metadata-container'>
                    <div className='channel-title'>Channel Title</div>
                    <div><span>2.1M views &middot; 2 days ago</span></div>
                </div>
            </div>
        </div>
    );
};

export default VideoPreview;