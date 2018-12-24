import React from 'react';
import { PureComponent } from '../framework';

export class ContainerFooter extends PureComponent {

  render() {
    return (
      <div className="bg-green-dark text-white">
        <div className="container mx-auto max-w-2xl">
          <div className="px-4 pb-4 md:pb-0 leading-loose">
            { this.props.children }
          </div>
        </div>
      </div>
    );
  }
}

