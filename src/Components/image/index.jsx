import React from "react";
import { PropTypes, PureComponent } from "../framework";

export class Image extends PureComponent {
  static propTypes = {
    src: PropTypes.any.isRequired,
    children: PropTypes.element,
    className: PropTypes.string
  };

  render() {
    return (
      <>
        <img {...this.props} src={this.props.src}>
          {this.props.children}
        </img>
      </>
    );
  }
}

