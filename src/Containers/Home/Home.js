import React, { Component } from 'react';
import VideoGrid from '../../Components/VideoGrid/VideoGrid';
import SideBar from '../SideBar/SideBar';
import './Home.scss';

export class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <SideBar />
                <div className='home'>
                    <div className='video-grid-container'>
                        <VideoGrid title='Trending'/>
                        <VideoGrid title='Comedy' hideDivider={true}/>
                    </div>
                </div>     
            </React.Fragment>
        )
    }
}

export default Home;