import React from 'react';
import { Component } from '@Components/framework';
import { stylesRow4 } from './styles';
import { Row4Item } from '@Components/example/row4-item';

export class RowFour extends Component {
  render() {
    return (
      <div className='w-full bg-grey-lighter'>
        <style jsx>{ stylesRow4 }</style>
        <div className="max-w-2xl mx-auto py-10">
          <div className="row4 md:max-w-2xl mb-6 grid md:grid-gap-4 md:grid-columns-2 lg:grid-columns-3">
            <Row4Item heading={ 'Fresh Veggies & Fruits' } faIcon={ 'fa-leaf' }/>
            <Row4Item heading={ 'Locally Grown Vegetables' } faIcon={ 'fa-hands' }/>
            <Row4Item heading={ 'Natural As It\'s In Nature' } faIcon={ 'fa-tree' }/>
            <Row4Item heading={ 'From Country Side' } faIcon={ 'fa-map' }/>
            <Row4Item heading={ 'Alkaline Water' } faIcon={ 'fa-water' }/>
            <Row4Item heading={ 'Fresh Air' } faIcon={ 'fa-air-freshener' }/>
          </div>
        </div>
      </div>
    );
  }
}
