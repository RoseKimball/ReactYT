import React, { Component } from 'react';
import Logo from '../../Assets/Images/Logo.png';
import { Image, Menu, Input, Form, Icon } from 'semantic-ui-react';
import './HeaderNav.scss';

export class HeaderNav extends Component {
    render() {
        return (
            <Menu borderless className='top-menu' fixed='top'>
                <Menu.Item header className='logo'>
                    <Image src={Logo} size='tiny'/>
                </Menu.Item>
                <Menu.Menu className='nav-container'>
                    <Menu.Item className='search-input'>
                        <Form>
                            <Form.Field>
                                <Input 
                                placeholder='Search...'
                                size='small'
                                action='Go'
                                />
                            </Form.Field>
                        </Form>
                    </Menu.Item>
                    <Menu.Menu position='right'>
                        <Menu.Item>
                            <Icon className='header-icon' name='video camera' size='large'></Icon>
                        </Menu.Item>
                        <Menu.Item>
                            <Icon className='header-icon' name='grid layout' size='large'></Icon>
                        </Menu.Item>
                        <Menu.Item>
                            <Icon className='header-icon' name='chat' size='large'></Icon>
                        </Menu.Item>
                        <Menu.Item>
                            <Icon className='header-icon' name='alarm' size='large'></Icon>
                        </Menu.Item>
                        <Menu.Item name='avatar'>
                            <Image src='http://via.placeholder.com/80x80'/>
                        </Menu.Item>
                    </Menu.Menu>
                </Menu.Menu>
            </Menu>
        );
    };
};

export default HeaderNav;