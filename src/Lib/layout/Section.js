/* eslint no-unreachable: off, react/require-render-return: off */
import { PureComponent } from 'react';
import PropTypes from 'prop-types';

export class Section extends PureComponent {

  static displayName = 'Section';

  static propTypes = {
    slot: PropTypes.string.isRequired,
    children: PropTypes.node,
  };

  render() {
    // return (this.props.children);
    throw new Error('You must only use <Section> inside a <Page>');
  }

}

