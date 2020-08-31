import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';
import NextUpVideo from '../NextUpVideo';

describe('NextUpVideo', () => {
    test('renders NextUpVideo', () => {
        const wrapper = shallow (
            <NextUpVideo />
        )
        expect(wrapper).toMatchSnapshot();
    })
})