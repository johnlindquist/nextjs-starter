import React from 'react';
import Link from '../../components/link';
import SubscribeForm from '../../components/subscribe/subscribe-form';
import { Component } from '../../components/framework';

export class RowThree extends Component {
  render() {
    return (
      <>
        <div className="bg-white mt-3">
          <div className='w-full max-w-2xl mx-auto'>
            <div className="py-8 px-4 md:px-2 text-center w-full md:w-1/2 inline-block">
              <div>
                <p className='text-primary-darker text-2xl mb-2 text-center font-bold md:text-3xl'>Get Involved</p>
                <p>Find us through the channels below</p>
              </div>
              <div className="px-3 lg:px-0 py-8 w-full mx-auto">
                <Link route='https://www.meetup.com/ME-IO-DXB/' className='btn bg-grey-lighter' target='_blank'>
                  <i className='fa fa-meetup mr-2'/> Meetup
                </Link>
                <Link route='https://website.com/join-whatsapp' className='btn bg-grey-lighter ml-2' target='_blank'>
                  <i className='fa fa-whatsapp mr-2'/> WhatsApp
                </Link>
                <Link route='https://website.com/join-telegram' className='btn bg-grey-lighter ml-2' target='_blank'>
                  <i className='fa fa-telegram mr-2'/> Telegram
                </Link>
                <Link route='https://website.com/twitter' className='btn bg-grey-lighter ml-2' target='_blank'>
                  <i className='fa fa-twitter mr-2'/> Twitter
                </Link>
              </div>
            </div>
            <div className="py-8 px-4 md:px-2 text-center w-full md:w-1/2 inline-block">
              <div>
                <p className="text-primary-darker text-2xl mb-2 text-center font-bold md:text-3xl">Get the Newsletter</p>
                <p>Upcoming meetups, news, articles, projects</p>
              </div>
              <div className="px-3 lg:px-0 py-8 w-full lg:w-4/5 mx-auto">
                <SubscribeForm target={ 'group-newsletter' } cta={ 'Subscribe' }/>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
