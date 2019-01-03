import React from 'react';
import { shallow } from 'enzyme';

import { LeftHeader } from './LeftHeader';

describe('<LogoHeader/>', () => {
  it('renders one div', () => {
    const wrapper = shallow(<LeftHeader/>);
    expect(wrapper.find('.flex').length).toStrictEqual(1);
  });
});
