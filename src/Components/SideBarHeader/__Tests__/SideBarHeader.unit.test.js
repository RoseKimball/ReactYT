import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';
import SideBarHeader from '../SideBarHeader';

describe('SideBarHeader', () => {
    test('renders SideBarHeader', () => {
        const wrapper = shallow (
            <SideBarHeader />
        );
        expect(wrapper).toMatchSnapshot();
    });

    test('renders SideBarHeader with example title', () => {
        const wrapper = shallow (
            <SideBarHeader title='Profile'/>
        )
        expect(wrapper).toMatchSnapshot();
    })
})