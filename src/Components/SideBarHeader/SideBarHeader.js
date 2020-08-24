import React from 'react';
import { Menu } from 'semantic-ui-react';
import './SideBarHeader.scss';

export function SideBarHeader(props) {
    const heading = props.title ? props.title.toUpperCase() : '';

    return (
        <Menu.Item>
            <Menu.Header className='sidebar-header'>{heading}</Menu.Header>
        </Menu.Item>
    );
};

export default SideBarHeader;