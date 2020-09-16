import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';
import AddComment from '../AddComment';

describe('AddComment', () => {
    test('renders AddComment', () => {
        const wrapper = shallow (
            <AddComment />
        )
        expect(wrapper).toMatchSnapshot();
    })
}