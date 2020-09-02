import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';
import Watch from '../Watch';

describe('Watch', () => {
    test('renders Watch', () => {
        const wrapper = shallow (
            <Watch />
        )
    })
})