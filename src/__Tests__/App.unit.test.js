import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';
import App from '../App';

describe('App', () => {
    test('renders App', () => {
        const wrapper = shallow (
            <App />
        )
        expect(wrapper).toMatchSnapshot();
    })
})