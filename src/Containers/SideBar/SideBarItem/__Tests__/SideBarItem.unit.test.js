import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';
import SideBarItem from '../SideBarItem';

describe('SideBarItem', () => {
    test('renders SideBarItem', () => {
        const wrapper = shallow (
            <SideBarItem />
        );
        expect(wrapper).toMatchSnapshot();
    });

    test('renders SideBarItem with highlight and navigation', () => {
        const wrapper = shallow (
            <SideBarItem highlight icon='history' label='History'/>
        );
        expect(wrapper).toMatchSnapshot();
    })

    test('renders SideBarItem with no highlight and navigation', () => {
        const wrapper = shallow (
            <SideBarItem icon='history' label='History'/>
        )
        expect(wrapper).toMatchSnapshot();
    })
});