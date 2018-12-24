import React from 'react';
import { Component } from '@Components/framework';

export class RowThree extends Component {
  render() {
    return (
      <div className='w-full' style={ { background: 'url("static/img/example/slider_2.jpg") bottom center no-repeat', backgroundSize: 'cover' } }>
        <div className="w-full max-w-2xl mx-auto pt-24">
          <div className="pb-5 px-4 md:px-2 text-center" style={ { textShadow: '1px 1px 2px black' } }>
            <h1 className="text-white text-4xl font-bold mt-4 mb-6 leading-none md:text-6xl uppercase"><span className=''>FRESH & NON-GMO PRODUCTS</span></h1>
            <p className="text-white leading-normal mx-auto text-lg max-w-lg md:text-2xl">
              <span className=''>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</span>
            </p>

          </div>
        </div>
        <div className='hidden md:block md:h-32'/>
        <div className='h-16 block md:hidden'/>
      </div>
    );
  }
}
