import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Slot extends Component {

  static propTypes = {
    sections: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    component: PropTypes.any, // eslint-disable-line
    wrapper: PropTypes.element,
    className: PropTypes.string,
    style: PropTypes.object, // eslint-disable-line
    children: PropTypes.node,
  };

  static defaultProps = {
    component: 'div',
    wrapper: undefined,
    className: undefined,
    style: {},
    children: false,
  };

  getSection(slot) {
    return this.props.sections[slot] || false;
  }

  render() {
    const { className, style, component, wrapper } = this.props;
    const section = this.getSection(this.props.name);
    const children = section ? section.props.children : this.props.children;
    const props = { className, style };

    if (!children) {
      return false;
    }

    if (wrapper) {
      return React.cloneElement(wrapper, props, children);
    }

    if (component !== '<>' && component !== '') {
      return React.createElement(component, props, children);
    }

    return children;
  }

}
