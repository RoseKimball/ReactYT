import React, { Component } from 'react';
import './Watch.scss';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import RelatedVideos from '../RelatedVideos/RelatedVideos';
import VideoMetaData from '../VideoMetaData/VideoMetaData';
import VideoInfoBox from '../VideoInfoBox/VideoInfoBox';
;
export class Watch extends Component {
    render() {
        return (
            <div className='watch-grid'>
               <VideoPlayer className='video' id='bXqZllqGWGQ'/> 
               <VideoMetaData className='metadata' viewCount={1000}/>
               <VideoInfoBox className='video-info-box'/>
               <div className='comments' style={{width: '100%', height: '100px', background: '#9013FE'}}>comments</div>
               <RelatedVideos className='relatedVideos'/>
            </div>
        )
    }
}

export default Watch;