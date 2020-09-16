import React, { Component } from 'react';
import './Watch.scss';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import RelatedVideos from '../RelatedVideos/RelatedVideos';
import VideoMetaData from '../VideoMetaData/VideoMetaData';
import VideoInfoBox from '../VideoInfoBox/VideoInfoBox';
import Comments from '../../Containers/Comments/Comments';

export class Watch extends Component {
    render() {
        return (
            <div className='watch-grid'>
               <VideoPlayer className='video' id='bXqZllqGWGQ'/> 
               <VideoMetaData className='metadata' viewCount={1000}/>
               <VideoInfoBox className='video-info-box'/>
               <Comments  className='comments'/>
               <RelatedVideos className='relatedVideos'/>
            </div>
        )
    }
}

export default Watch;