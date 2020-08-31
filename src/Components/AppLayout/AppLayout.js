import React from 'react';
import './AppLayout.scss';
import HeaderNav from '../../Containers/HeaderNav/HeaderNav';

export function AppLayout(props) {
    return (
        <div className='app-layout'>
            <HeaderNav />
            {props.children}
        </div>
    )
}

export default AppLayout;