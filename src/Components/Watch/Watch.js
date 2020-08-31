import React, { Component } from 'react';
import './Watch.scss';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import VideoPreview from '../VideoPreview/VideoPreview'

export class Watch extends Component {
    render() {
        return (
            <div>
                <VideoPreview horizontal={true}/>
                <VideoPreview />
            </div>
        )
    }
}

export default Watch;