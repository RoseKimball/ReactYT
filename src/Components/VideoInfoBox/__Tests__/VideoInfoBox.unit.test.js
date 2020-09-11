import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';
import VideoInfoBox from '../VideoInfoBox';

describe('VideoInfoBox', () => {
    test('renders VideoInfoBox', () => {
        const wrapper = shallow (
            <VideoInfoBox />
        )
        expect(wrapper).toMatchSnapshot();
    })
    test('renders expanded', () => {
        const wrapper = shallow (
            <VideoInfoBox />
        )
        wrapper.setState({collapsed: false});
        expect(wrapper).toMatchSnapshot();
    })
})