import React from 'react';
import { Component } from '../framework';
import { Image } from '../image';
import { Link } from '../link';

export class LogoHeader extends Component {

  render() {
    return (
      <div className="flex items-stretch justify-start mr-2">
        <Link prefetch route='home' params={ {} } className='navbar-brand'>
          <Image alt='logo' style={ { height: '25px' } } src={ require('static/logo-original.png') }/>
        </Link>
      </div>
    );
  }

}
