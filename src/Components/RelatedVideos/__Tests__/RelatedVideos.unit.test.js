import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';
import RelatedVideos from '../RelatedVideos';

describe('RelatedVideos', () => {
    test('renders RelatedVideos', () => {
        const wrapper = shallow (
            <RelatedVideos />
        )
        expect(wrapper).toMatchSnapshot();
    })
})