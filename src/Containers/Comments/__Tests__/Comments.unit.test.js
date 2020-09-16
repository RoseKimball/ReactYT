import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';
import Comments from '../Comments';

describe('Comments', () => {
    test('renders Comments', () => {
        const wrapper = shallow (
            <Comments />
        )
        expect(wrapper).toMatchSnapshot();
    })
    test('renders Comments with amountComments prop', () => {
        const wrapper = shallow (
            <Comments amountComments={1}/>
        )
        expect(wrapper).toMatchSnapshot();
    }) 
}