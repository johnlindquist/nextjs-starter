import React from "react";
import { Image } from "@Components/image";
import { Component } from "@Components/framework";

export class RowOne extends Component {
  render() {
    return (
      <>
        <h1 className='text-center text-xl mb-3 uppercase font-thin'>About</h1>
        <h3 className='text-center text-3xl mb-2'>Our Company History</h3>
        <div className='mb-3'>
          <Image src={require("@static/img/example/slider_4.jpg")} alt={"about us"} className='rounded rounded-lg' />
        </div>
        <div className='text-xl leading-normal'>
          <p className='mb-3'>
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
            A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
          </p>
          <p className='mb-3'>
            Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
          </p>
        </div>
        <div className='text-xl leading-normal'>
          <p className='mb-3'>
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
          </p>
          <p className='mb-3'>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
        </div>
      </>
    );
  }
}
