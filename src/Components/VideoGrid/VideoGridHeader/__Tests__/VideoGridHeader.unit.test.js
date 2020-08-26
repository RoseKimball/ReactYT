import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';
import VideoGridHeader from '../VideoGridHeader';

describe('VideoGridHeader', () => {
    test('renders VideoGridHeader', () => {
        const wrapper = shallow (
            <VideoGridHeader />
        )
        expect(wrapper).toMatchSnapshot();
    })
})