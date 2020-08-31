import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';
import AppLayout from '../AppLayout';

describe('AppLayout', () => {
    test('renders layout without children', () => {
        const wrapper = shallow (
            <AppLayout />
        )
        expect(wrapper).toMatchSnapshot();
    })

    test('renders layout with one child', () => {
        const wrapper = shallow (
            <AppLayout>
                <div>Child</div>
            </AppLayout>
        );
        expect(wrapper).toMatchSnapshot();
    })

    test('renders layout with multiple children', () => {
        const wrapper = shallow (
            <AppLayout>
                <div>
                    1st child
                    <div>2nd child</div>
                </div>
            </AppLayout>
        )
    })
})