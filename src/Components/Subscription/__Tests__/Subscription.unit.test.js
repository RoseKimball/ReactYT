import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';
import Subscription from '../Subscription';

describe('Subscription', () => {
    test('renders Subscription', () => {
        const wrapper = shallow (
            <Subscription />
        )
        expect(wrapper).toMatchSnapshot();
    })
    test('renders Subscription with broadcasting', () => {
        const wrapper = shallow (
            <Subscription label='blah' broadcasting/>
        )
        expect(wrapper).toMatchSnapshot();
    })
    test('renders Subscription with amount of new subs', () => {
        const wrapper = shallow (
            <Subscription label='blah' amountNewvideos={3}/>
        )
        expect(wrapper).toMatchSnapshot();
    })
})