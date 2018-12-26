import React from "react";
import { PureComponent } from "../framework";
import { Link } from "../link";

export class LeftFooter extends PureComponent {
  render() {
    return (
      <>
        <div className="w-full md:w-5/6 inline-block align-top md:mt-5 text-left md:text-right">
          <div className='spd-x-30'>
            <div className='inline-block'>
              <Link route='about-us'>About Us</Link>
            </div>
            <div className='inline-block'>
              <Link route='contact-us'>Contact Us</Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}

