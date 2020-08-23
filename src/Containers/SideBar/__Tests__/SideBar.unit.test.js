import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';
import SideBar from '../SideBar';

describe('SideBar', () => {
    test('renders SideBar', () => {
        const wrapper = shallow(
            <SideBar />
        );
        expect(wrapper).toMatchSnapshot();
    });
});

