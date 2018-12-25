import React from 'react';
import { PureComponent } from '../framework';
import { Image } from '../image';
import { Link } from '../link';

export class LogoHeader extends PureComponent {

  render() {
    return (
      <div className="flex items-stretch justify-start mr-2">
        <Link prefetch route='home' params={ {} } className='navbar-brand'>
          <Image alt='logo' style={ { height: '25px' } } src={ 'static/logo-o.png' }/>
        </Link>
      </div>
    );
  }

}
