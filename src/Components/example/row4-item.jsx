import React, { Component } from "react";
import { PropTypes } from "../framework";

export class Row4Item extends Component {
  static propTypes = {
    heading: PropTypes.string,
    desc1: PropTypes.string,
    desc2: PropTypes.string,
    faIcon: PropTypes.string
  };

  static defaultProps = {
    desc1: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    desc2: "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
  };

  render() {
    return (
      <div className="card rounded-lg">
        <div className="px-6 p-6 leading-tight text-center">
          <div className="text-2xl tracking-wide mb-2 font-bold"><i className={"fa text-green" + ` ${this.props.faIcon}`} /> {this.props.heading}</div>
        </div>
        <div className="px-6 flex-grow">
          <p className='mb-3'>{this.props.desc1}</p>
        </div>
        <div className="px-6 pb-6 flex-grow">
          <p className=''>{this.props.desc2}</p>
        </div>
      </div>

    );
  }
}
