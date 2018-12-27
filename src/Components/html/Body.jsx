import React from "react";
import { PureComponent } from "../framework";

export class Body extends PureComponent {

  render() {
    return (
      <body>
      <div className="bg-green-dark h-2" />
      <div className='bg-grey-lighter text-base text-primary-darkest font-normal relative'>
        {this.props.children}
      </div>
      </body>
    );
  }
}

