import React from 'react';
import { PureComponent } from '@Components/framework';
import { Image } from '../image';
import { Link } from '../link';

export class LogoFooter extends PureComponent {

  render() {
    return (
      <div className="mt-5 w-full md:w-1/6 inline-block text-left">
        <Link prefetch route='home' params={ {} } className='navbar-footer'>
          <Image alt="logo" style={ { height: '25px' } } src={ 'static/logo-w.png' } className="mb-4"/>
        </Link>
      </div>
    );
  }

}
