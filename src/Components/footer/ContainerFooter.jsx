import React from 'react';
import styles from './styles';
import { Component } from '../framework';

export class ContainerFooter extends Component {

  render() {
    return (
      <div className="bg-primary text-white">
        <div className="container mx-auto max-w-2xl">
          <div className="px-4 pb-4 md:pb-0 leading-loose">
            { this.props.children }
            <style jsx>{ styles }</style>
            <div className="hidden">start date:{ 'TODO' }</div>
          </div>
        </div>
      </div>
    );
  }
}

