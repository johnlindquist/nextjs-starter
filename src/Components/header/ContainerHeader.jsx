import React from 'react';
import { PureComponent } from '../framework';

export class ContainerHeader extends PureComponent {

  render() {
    return (
      <div className=''>
        <div className="container mx-auto max-w-2xl">
          <nav className="flex px-2 lg:px-0 py-5 items-end">
            { this.props.children }
          </nav>
        </div>
        <div className="bg-green-dark h-2"/>
      </div>
    );
  }
}
