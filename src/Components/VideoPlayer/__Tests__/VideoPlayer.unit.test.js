import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';
import VideoPlayer from '../VideoPlayer';

describe('VidePlayer', () => {
    test('renders VideoPlayer', () => {
        const wrapper = shallow (
            <VideoPlayer id='GPJDXcGYkqU'/>
        )
        expect(wrapper).toMatchSnapshot();
    })
    test('renders null without id prop', () => {
        const wrapper = shallow (
            <VideoPlayer/>
        )
        expect(wrapper).toMatchSnapshot();
    })
})