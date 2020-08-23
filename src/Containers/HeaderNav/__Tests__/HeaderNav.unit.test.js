import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';
import HeaderNav from '../HeaderNav';

describe('HeaderNav', () => {
    test('renders HeaderNav', () => {
        const wrapper = shallow(
            <HeaderNav />
        );
        expect(wrapper).toMatchSnapshot();
    });

})
