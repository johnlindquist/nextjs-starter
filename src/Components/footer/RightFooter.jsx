import React from 'react';
import { Component } from '../framework';

export class RightFooter extends Component {
  render() {
    return (
      <>
        <div className="hidden w-full inline-block align-top mt-5 text-left md:text-right">
          <div className='spaced-x-30'>
            <div className='inline-block'>
              <a target='_blank' href='/twitter'><i className='fa fa-twitter'/> Twitter</a>
            </div>
            <div className='inline-block'>
              <a target='_blank' href='/join-telegram'><i className='fa fa-telegram'/> Telegram</a>
            </div>
            <div className='inline-block'>
              <a target='_blank' href='/join-whatsapp'><i className='fa fa-whatsapp'/> Whatsapp</a>
            </div>
            <div className='inline-block'>
              <a target='_blank' href='/join-slack'><i className='fa fa-slack'/> Slack</a>
            </div>
            <div className='inline-block'>
              <a target='_blank' href='/meetup-group'><i className='fa fa-meetup'/> Meetup</a>
            </div>
            <div className='inline-block'>
              <a target='_blank' href='https://github.com/me-io'><i className='fa fa-github'/> Github</a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

