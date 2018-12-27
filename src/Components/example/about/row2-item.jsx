import React, { Component } from "react";
import { PropTypes } from "../../framework";
import { Link } from "../../link";

export class Row2Item extends Component {
  static propTypes = {
    Image: PropTypes.element,
    heading: PropTypes.string,
    desc1: PropTypes.string,
    faIcon: PropTypes.string
  };

  static defaultProps = {
    desc1: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
  };

  render() {
    return (
      <div className="card rounded-lg h-full">
        {this.props.Image}
        <div className="py-6 leading-tight">
          <div className="text-2xl tracking-wide mb-1 font-bold">{this.props.heading}</div>
        </div>
        <div className="flex-grow">
          <p className='mb-3'>{this.props.desc1}</p>
        </div>
        <div className="pb-6 flex-grow">
          <Link route={"https://google.com"} className='btn btn-sm btn-green font-bold' target={"_blank"} rel="noopener">
            View Details
          </Link>
        </div>
      </div>
    );
  }
}
