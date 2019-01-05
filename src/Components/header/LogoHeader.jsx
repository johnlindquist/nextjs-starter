import React from 'react';

import { Link } from '../link';
import { Image } from '../image';
import logo from '@static/logo-o.png';
import { PureComponent } from '../framework';

export class LogoHeader extends PureComponent {

  render() {
    return (
      <div className="flex items-stretch justify-start mr-2">
        <Link prefetch route='home' params={{}} className='navbar-brand'>
          <Image alt='logo' style={{ height: '25px' }} src={logo}/>
        </Link>
      </div>
    );
  }

}
