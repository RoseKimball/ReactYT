import React, { Component } from 'react';
import VideoGrid from '../../Components/VideoGrid/VideoGrid';
import './Home.scss';

export class Home extends Component {
    render() {
        return (
            <div className='home'>
                <div className='video-grid-container'>
                    <VideoGrid title='Trending'/>
                    <VideoGrid title='Comedy' hideDivider={true}/>
                </div>
            </div>
        )
    }
}

export default Home;