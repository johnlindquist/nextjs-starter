import React from 'react';
import { shallow } from 'enzyme';

import { Link } from '../link';
import { Image } from '../image';
import { LogoHeader } from './LogoHeader';

describe('<LogoHeader/>', () => {
  it('renders one <Link/> component', () => {
    const wrapper = shallow(<LogoHeader/>);
    expect(wrapper.find(Link).length).toStrictEqual(1);
  });

  it('renders one <Image/> component', () => {
    const wrapper = shallow(<LogoHeader/>);
    expect(wrapper.find(Image).length).toStrictEqual(1);
  });
});
