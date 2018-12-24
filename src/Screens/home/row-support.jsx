import React from 'react';
import { Component } from '../../components/framework';

export class RowSupport extends Component {
  sendEmail = (e) => {
    const req = e.target.getAttribute('data-req');
    const to = 'community@website.com';
    let subject = 'Hello there!';
    let body = 'Dear Community, My name is';
    switch (req) {
      case 'speak-at-event':
        subject = '[Speaker] Hello there!';
        break;
      case 'co-organize':
        subject = '[Organizer] Hello there!';
        break;
      case 'sponsor-an-event':
        subject = '[Sponsor] Hello there!';
        break;
    }

    window.location.href = `mailto:${ to }?subject=${ subject }&body=${ body }`;
    e.preventDefault();
    e.stopPropagation();
  };

  render() {
    return (
      <>
        <div className="bg-primary pt-4 md:pt-14 pb-24 -mb-42">
          <div className="py-8 px-4 md:px-2 text-center">
            <div className="text-primary-lightest text-2xl text-center mb-2 font-bold md:text-3xl">Participate and Support</div>
            <p className='mb-10 text-primary-lighter text-xl'>Help us empower, build and grow the community</p>
          </div>
        </div>
        <div>
          <div className="px-3 md:px-0 md:max-w-2xl md:mx-auto md:flex md:justify-center mb-12">
            <div className="card rounded-lg  w-full mt-10 md:mr-6 overflow-hidden flex flex-col mb-10">
              <div className="px-10 p-8 leading-tight text-center">
                <div className="text-2xl tracking-wide mb-2 text-primary font-bold">Be a Speaker</div>
                <p>Speak at our next event</p>
              </div>
              <div className="px-10 pb-8 flex-grow">
                <p className='mb-3'>Whether you are an aspiring speaker who wants to speak or a veteran with an interesting idea, reach out to us and speak at one of the upcoming meetups.</p>
                <p>Please make sure to reach out to us even if you are short of ideas to speak about - we can come up with something for you.</p>
              </div>
              <a href='javascript:void(0)' onClick={ this.sendEmail }>
                <span data-req="speak-at-event" className='className="w-full block bg-primary hover:bg-primary-dark py-6 px-4 text-primary-lighter tracking-widest no-underline font-bold text-center uppercase text-lg'>
                  <i className="fa fa-envelope mr-3"/>
                  Be a speaker
                </span>
              </a>
            </div>
            <div className="card rounded-lg  w-full mt-14 md:mt-10 md:mx-6 overflow-hidden flex flex-col  mb-10">
              <div className="px-10 p-8 leading-tight text-center">
                <div className="text-2xl tracking-wide mb-2 text-primary font-bold">Co-Organize</div>
                <p>Help us in what we do.</p>
              </div>
              <div className="px-10 pb-8 flex-grow">
                <p className='mb-3'>Building and growing a community is a hectic task and we will be more than happy to get your help in growing the community.</p>
                <p>Help us by getting the word out, contributing to newsletter, by speaking or suggesting the ideas etc. Reach out to us and let us help you get started.</p>
              </div>
              <a href='javascript:void(0)' onClick={ this.sendEmail }>
                <span data-req="co-organize" className='className="w-full block bg-primary hover:bg-primary-dark py-6 px-4 text-primary-lighter tracking-widest no-underline font-bold text-center uppercase text-lg'>
                <i className="fa fa-envelope mr-3"/>
                  Join Forces
                </span>
              </a>
            </div>
            <div className="card rounded-lg  w-full mt-14 md:mt-10 md:ml-6 overflow-hidden flex flex-col mb-10">
              <div className="px-10 p-8 leading-tight text-center">
                <div className="text-2xl tracking-wide mb-3 text-primary font-bold">Sponsor an event</div>
                <p>Help us empower the community</p>
              </div>
              <div className="px-10 pb-8 flex-grow">
                We are always looking for Sponsors who could support the community growth and activities.
                Please reach out if you could help with:-
                <ul className="list-reset text-lg tracking-wide text-grey-darker mt-5 bg-yellow-lighter p-2 px-5 rounded-lg">
                  <li className="flex py-1"><span className="font-bold text-black">Venue hosting</span></li>
                  <li className="flex py-1"><span className="font-bold text-black">Food and Drinks</span></li>
                  <li className="flex py-1 items-center"><span className="font-bold text-black">Media and Recording</span></li>
                </ul>
              </div>
              <a href='javascript:void(0)' onClick={ this.sendEmail }>
                <span data-req="sponsor-an-event" className='className="w-full block bg-primary hover:bg-primary-dark py-6 px-4 text-primary-lighter tracking-widest no-underline font-bold text-center uppercase text-lg'>
                  <i className="fa fa-envelope mr-3"/>
                  Become a sponsor
                </span>
              </a>
            </div>
          </div>
          <p className="text-center mb-12 px-4 text-black text-xl text-grey-dark">
            For feedback, suggestions and inquiries. Please <a href="mailto:community@website.com" className="text-primary hover:text-white font-bold border-b-2 border-primary pb-1 hover:bg-primary px-2">get in touch!</a>
          </p>
        </div>
      </>
    );
  }
}
