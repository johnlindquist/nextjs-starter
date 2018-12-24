import React from 'react';
import { PureComponent } from '../framework';

export class Body extends PureComponent {

  render() {
    return (
      <body>
      <div className='text-base text-primary-darkest font-normal relative'>
        { this.props.children }
      </div>
      </body>
    );
  }
}

