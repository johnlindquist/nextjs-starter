import React from 'react';
import { Component } from '../../components/framework';

class RowHero extends Component {
  render() {
    return (
      <>
        <div className='bg-white'>
          <div className='w-full' style={ { background: 'url("static/img/bg_web.jpg") bottom center no-repeat', backgroundSize: 'contain' } }>
            <div className="w-full max-w-2xl mx-auto pt-10">
              <div className="pb-5 px-4 md:px-2 text-center">
                <h1 className="text-primary-darker text-2xl font-bold mt-4 mb-6 leading-none md:text-5xl"><span className='bg-white'>Community of Developers</span></h1>
                <p className="text-black leading-normal mx-auto text-lg max-w-lg md:text-xl">
                  <span className='bg-white'>A Developer centric community by developers, focused around</span> <span className='bg-yellow-lighter'>open-source</span>, <span className='bg-yellow-lighter'>practical knowledge</span>, <span className='bg-yellow-lighter'>tech culture</span>
                  , <span className='bg-yellow-lighter'>career growth</span> and <span className='bg-yellow-lighter'>connecting developers
              together</span>.
                </p>
              </div>
            </div>
            <div className='hidden md:block md:h-64'/>
            <div className='hidden md:block md:h-64'/>
            <div className='h-32 block md:hidden'/>
          </div>
        </div>
      </>
    );
  }
}

export default RowHero;
