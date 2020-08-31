import React, { Component } from 'react';
import './Watch.scss';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import RelatedVideos from '../RelatedVideos/RelatedVideos';

export class Watch extends Component {
    render() {
        return (
            <div>
                <RelatedVideos />
            </div>
        )
    }
}

export default Watch;