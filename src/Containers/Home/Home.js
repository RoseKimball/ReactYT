import React, { Component } from 'react';
import VideoPreview from '../../Components/VideoPreview/VideoPreview';
import './Home.scss';

export class Home extends Component {
    render() {
        return (
            <div className='home'>
                <VideoPreview />
            </div>
        )
    }
}

export default Home;