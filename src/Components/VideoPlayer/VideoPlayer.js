import React from 'react';
import './VideoPlayer.scss'

const BASE_EMBED_URL = 'https://www.youtube.com/embed/';

export function VideoPlayer(props) {
    if(!props.id) {
        return null;
    }
    const embedUrl = `${BASE_EMBED_URL}${props.id}?autoplay=1`

    return (
        <div className='video-container'>
            <div className='video'>
                <iframe className='video-player' src={embedUrl} frameBorder='0'
                allow='encrypted-media' allowFullScreen title='video'/>
            </div>
        </div>
    )
}

export default VideoPlayer;