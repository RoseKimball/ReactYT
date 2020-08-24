import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';
import SideBarFooter from '../SideBarFooter';

describe('SideBarFooter', () => {
    test('renders SideBarFooter', () => {
        const wrapper = shallow (
            <SideBarFooter />
        )
        expect(wrapper).toMatchSnapshot();
    })
})