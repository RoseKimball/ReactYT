import React, { Component } from 'react';
import Subscription from './Subscription';
import sideBarHeader from '../SideBarHeader/SideBarHeader';

export class Subscriptions extends Component {
    render() {
        return(
            <React.Fragment>
                <sideBarHeader title='Subscriptions'/>
                <Subscription label='ColleenBallinger' broadcasting/>
                <Subscription label='AwesomeScience' amountNewVideos={10}/>
                <Subscription label='Cut' amountNewVideos={3}/>
                <Subscription label='Jubilee' amountNewVideos={1}/>
            </React.Fragment>
        );
    };
};

export default Subscriptions;