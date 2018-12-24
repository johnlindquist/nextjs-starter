import React from 'react';
import { Component } from '@Components/framework';
import { Image } from '@Components/image';
import { stylesRow2 } from './styles';

export class RowTwo extends Component {
  render() {
    return (
      <div className='w-full bg-grey-lighter'>
        <div className="max-w-2xl mx-auto py-10">
          <div className="row2 px-3 md:px-0 md:max-w-2xl md:mx-auto md:flex md:justify-center mb-6">
            <div className="card rounded-lg w-full md:mr-6 overflow-hidden flex flex-col">
              <Image src={ require('static/img/example/img_1.jpg') }/>
              <div className="px-6 p-6 leading-tight text-center">
                <div className="text-2xl tracking-wide mb-2 font-bold">Organic Dragon Fruit</div>
              </div>
              <div className="px-6 flex-grow">
                <p className='mb-3'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              </div>
              <div className="px-6 pb-6 flex-grow">
                <p className=''>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
              </div>
            </div>
            <div className="card rounded-lg w-full md:mr-6 overflow-hidden flex flex-col">
              <Image src={ require('static/img/example/img_2.jpg') }/>
              <div className="px-6 p-6 leading-tight text-center">
                <div className="text-2xl tracking-wide mb-2 font-bold">Organic Sprout Veggie</div>
              </div>
              <div className="px-6 flex-grow">
                <p className='mb-3'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              </div>
              <div className="px-6 pb-6 flex-grow">
                <p className=''>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
              </div>
            </div>
            <div className="card rounded-lg w-full md:mr-6 overflow-hidden flex flex-col">
              <Image src={ require('static/img/example/img_3.jpg') }/>
              <div className="px-6 p-6 leading-tight text-center">
                <div className="text-2xl tracking-wide mb-2 font-bold">Organic Watercress</div>
              </div>
              <div className="px-6 flex-grow">
                <p className='mb-3'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              </div>
              <div className="px-6 pb-6 flex-grow">
                <p className=''>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
              </div>
            </div>
          </div>
          <div className="row2 px-3 md:px-0 md:max-w-2xl md:mx-auto md:flex md:justify-center mb-0">
            <div className="card rounded-lg w-full md:mr-6 overflow-hidden flex flex-col">
              <Image src={ require('static/img/example/img_4.jpg') }/>
              <div className="px-6 p-6 leading-tight text-center">
                <div className="text-2xl tracking-wide mb-2 font-bold">Organic Carrots</div>
              </div>
              <div className="px-6 flex-grow">
                <p className='mb-3'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              </div>
              <div className="px-6 pb-6 flex-grow">
                <p className=''>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
              </div>
            </div>
            <div className="card rounded-lg w-full md:mr-6 overflow-hidden flex flex-col">
              <Image src={ require('static/img/example/img_5.jpg') }/>
              <div className="px-6 p-6 leading-tight text-center">
                <div className="text-2xl tracking-wide mb-2 font-bold">Organic Bell Pepper</div>
              </div>
              <div className="px-6 flex-grow">
                <p className='mb-3'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              </div>
              <div className="px-6 pb-6 flex-grow">
                <p className=''>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
              </div>
            </div>
            <div className="card rounded-lg w-full md:mr-6 overflow-hidden flex flex-col">
              <Image src={ require('static/img/example/img_6.jpg') }/>
              <div className="px-6 p-6 leading-tight text-center">
                <div className="text-2xl tracking-wide mb-2 font-bold">Organic Cucumber</div>
              </div>
              <div className="px-6 flex-grow">
                <p className='mb-3'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              </div>
              <div className="px-6 pb-6 flex-grow">
                <p className=''>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
              </div>
            </div>
          </div>
        </div>
        <style jsx>{ stylesRow2 }</style>
      </div>
    );
  }
}
