import React, { PureComponent } from 'react';
import { Context } from './Context';
import PropTypes from 'prop-types';

/* Then create a provider Component */
export class Provider extends PureComponent {
  state = {
    layouts: this.props.layouts,
    layout: '',
    sections: null
  };

  static propTypes = {
    layouts: PropTypes.objectOf(PropTypes.any).isRequired,
    children: PropTypes.element.isRequired,
  };

  setData = ({ layout, sections }) => {
    if (!this.state.sections) {
      this.setState({ layout, sections });
    }
  };


  render() {
    return (
      <Context.Provider value={ {
        ...this.state,
        setData: this.setData
      } }>
        { this.props.children }
      </Context.Provider>
    );
  }
}
