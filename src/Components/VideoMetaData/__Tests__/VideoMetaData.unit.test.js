import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';
import VidoMetaData from '../VideoMetaData';

describe('VideoMetadata', () => {
    test('renders without props', () => {
      const wrapper = shallow(<VideoMetadata/>);
      expect(wrapper).toMatchSnapshot();
    });
    test('renders with view count', () => {
      const wrapper = shallow(<VideoMetadata viewCount={100234}/>);
      expect(wrapper).toMatchSnapshot();
    });
  });