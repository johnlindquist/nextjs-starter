import React from "react";
import { PureComponent } from "../framework";
import { Link } from "../link";

export class RightHeader extends PureComponent {

  render() {
    return (
      <div className="flex justify-end">
        <div className='spd-x-30 md:block hidden'>
          <Link route='home' className='text-red hover:underline hover:text-red'>
            <i className='fa fa-institution mr-2' /> Home
          </Link>
          <Link route='https://github.com/me-io/community' className='text-black hover:underline' target='_blank' rel="noopener">
            <i className='fa fa-link mr-2' /> About
          </Link>
          <Link route='https://github.com/me-io/community' className='text-black hover:underline' target='_blank' rel="noopener">
            <i className='fa fa-phone mr-2' /> Contact
          </Link>
        </div>
      </div>
    );
  }
}

