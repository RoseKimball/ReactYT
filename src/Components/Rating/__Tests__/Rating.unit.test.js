import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';
import Rating from '../Rating';

describe('Rating', () => {
    test('renders', () => {
      const wrapper = shallow(<Rating/>);
      expect(wrapper).toMatchSnapshot();
    });
  });