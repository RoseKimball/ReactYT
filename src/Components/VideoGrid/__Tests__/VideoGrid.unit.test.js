import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';
import VideoGrid from '../VideoGrid';

describe('VideoGrid', () => {
    test('renders VideoGrid', () => {
        const wrapper = shallow (
            <VideoGrid />
        )
        expect(wrapper).toMatchSnapshot();
    })

    test('renders without divider', () => {
        const wrapper = shallow (
            <VideoGrid hideDivider={true}/>
        )
        expect(wrapper).toMatchSnapshot();
    })
    test('renders with title', () => {
        const wrapper = shallow (
            <VideoGrid title='example title'/>
        )
    })
})