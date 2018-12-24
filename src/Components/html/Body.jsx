import React from 'react';
import { PureComponent } from '../framework';

export class Body extends PureComponent {

  render() {
    return (
      <body>
      <div className='bg-primary-lightest text-base text-primary-darker font-normal relative'>
        { this.props.children }
      </div>
      </body>
    );
  }
}

