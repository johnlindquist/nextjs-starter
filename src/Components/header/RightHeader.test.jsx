import React from 'react';
import { shallow } from 'enzyme';

import { Link } from '../link';
import { RightHeader } from './RightHeader';

describe('<RightHeader/>', () => {
  it('renders three <Link/> component', () => {
    const wrapper = shallow(<RightHeader/>);
    expect(wrapper.find(Link).length).toStrictEqual(3);
  });

  it('renders an `.fa-institution`', () => {
    const wrapper = shallow(<RightHeader/>);
    expect(wrapper.find('.fa-institution').length).toStrictEqual(1);
  });

  it('renders an `.fa-link`', () => {
    const wrapper = shallow(<RightHeader/>);
    expect(wrapper.find('.fa-link').length).toStrictEqual(1);
  });

  it('renders an `.fa-phone`', () => {
    const wrapper = shallow(<RightHeader/>);
    expect(wrapper.find('.fa-phone').length).toStrictEqual(1);
  });
});
