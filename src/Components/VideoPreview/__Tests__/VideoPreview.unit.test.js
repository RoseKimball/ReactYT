import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';
import VideoPreview from '../VideoPreview';

describe('VideoPreview', () => {
    test('renders VideoPreview', () => {
        const wrapper = shallow (
            <VideoPreview />
        )
        expect(wrapper).toMatchSnapshot();
    })
    test('renders horizontal preview', () => {
        const wrapper = shallow (
            <VideoPreview horizontal={true}/>
        )
        expect(wrapper).toMatchSnapshot();
    })
})