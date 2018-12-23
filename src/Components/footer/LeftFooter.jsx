import React from 'react';
import { Component } from '../framework';
import { Link } from '../link';

export class LeftFooter extends Component {
  render() {
    return (
      <>
        <div className="w-full md:w-5/6 inline-block align-top md:mt-5 text-left md:text-right">
          <div className='spaced-x-30'>
            <div className='inline-block'>
              <Link route='about-us'>About Us</Link>
            </div>
            <div className='inline-block'>
              <Link route='contact-us'>Contact Us</Link>
            </div>
            <div className='inline-block'>
              <Link route='faq'>FAQ's</Link>
            </div>
            <div className='inline-block'>
              <Link route='privacy-policy'>Privacy Policy</Link>
            </div>
            <div className='inline-block'>
              <Link route='terms-of-service'>Terms of service</Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}

