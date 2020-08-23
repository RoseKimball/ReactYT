import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';
import Subscriptions from '../Subscriptions';

describe('Subscriptions', () => {
    test('renders Subscriptions', () => {
        const wrapper = shallow (
            <Subscriptions />
        )
        expect(wrapper).toMatchSnapshot();
    })
})