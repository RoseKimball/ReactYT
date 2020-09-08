import React, { Component } from 'react';
import './Watch.scss';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import RelatedVideos from '../RelatedVideos/RelatedVideos';
import VideoMetaData from '../VideoMetaData/VideoMetaData'
;
export class Watch extends Component {
    render() {
        return (
            <div className='watch-grid'>
               <VideoPlayer className='video' id='bXqZllqGWGQ'/> 
               <VideoMetaData className='metadata' viewCount={1000}/>
               <div className='video-info-box' style={{width: '100%', height: '100px', background: '#BD10E0'}}>Video Info box</div>
               <div className='comments' style={{width: '100%', height: '100px', background: '#9013FE'}}>comments</div>
               <RelatedVideos className='relatedVideos'/>
            </div>
        )
    }
}

export default Watch;