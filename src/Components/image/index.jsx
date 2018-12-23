import React from 'react';
import { Component, PropTypes } from '../framework';

export class Image extends Component {
  static propTypes = {
    src: PropTypes.any.isRequired,
    children: PropTypes.element,
    className: PropTypes.string
  };

  render() {
    return (
      <>
        <img { ...this.props } src={ this.props.src }>
          { this.props.children }
        </img>
      </>
    );
  }
}

