import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';
import CommentsHeader from '../CommentsHeader';

describe('CommentsHeader', () => {
    test('renders CommentsHeader', () => {
        const wrapper = shallow (
            <CommentsHeader />
        )
        expect(wrapper).toMatchSnapshot();
    })
    test('renders CommentsHeader with amountComments prop', () => {
        const wrapper = shallow (
            <CommentsHeader amountComments={1}/>
        )
        expect(wrapper).toMatchSnapshot();
    }) 
})