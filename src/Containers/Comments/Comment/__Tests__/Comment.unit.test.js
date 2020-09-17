import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';
import Comment from '../Comment';

describe('Comment', () => {
    test('renders Comment', () => {
        const wrapper = shallow (
            <Comment />
        )
        expect(wrapper).toMatchSnapshot();
    })
})