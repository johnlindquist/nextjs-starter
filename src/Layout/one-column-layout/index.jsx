import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';
import { Slot } from '@Lib/layout/Slot';
import { LogoHeader } from '@Components/header/LogoHeader';
import { LeftHeader } from '@Components/header/LeftHeader';
import { RightHeader } from '@Components/header/RightHeader';
import { ContainerHeader } from '@Components/header/ContainerHeader';
import { RightFooter } from '@Components/footer/RightFooter';
import { ContainerFooter } from '@Components/footer/ContainerFooter';
import { LogoFooter } from '@Components/footer/LogoFooter';
import { LeftFooter } from '@Components/footer/LeftFooter';
import { Component } from '@Components/framework';

class OneColumnLayout extends Component {
  static propTypes = {
    sections: PropTypes.object.isRequired,
  };

  // @link https://ux.stackexchange.com/questions/91406/what-is-the-difference-between-alert-notification-banner-and-toast-message
  // @link https://philipwalton.github.io/solved-by-flexbox/demos/holy-grail/
  render() {
    const sections = this.props.sections;
    return (
      <>
        <div className="bg-primary h-2"/>
        <div className="layout one-column-layout flex flex-col w-screen min-h-screen">
          <Slot sections={ sections } name="header-wrapper" className='layout-header-wrapper'>
            <Slot sections={ sections } name="header" className="layout-header" component="header">
              <ContainerHeader>
                <Slot sections={ sections } name="header-logo" className="layout-header-logo" component="<>">
                  <LogoHeader/>
                </Slot>
                <Slot sections={ sections } name="header-left-menu" className="layout-header-left-menu" component="<>">
                  <LeftHeader/>
                </Slot>
                <Slot sections={ sections } name="header-right-menu" className="layout-header-right-menu" component="<>">
                  <RightHeader/>
                </Slot>
              </ContainerHeader>
            </Slot>
          </Slot>

          <Slot sections={ sections } name="main" className="layout-main flex-1" component="main">
            <Slot sections={ sections } name="content-wrapper" className="layout-content-wrapper">
              <Slot sections={ sections } name="content" className="layout-content" component="<>"/>
            </Slot>
          </Slot>

          <Slot sections={ sections } name="footer-wrapper" className="layout-footer-wrapper">
            <Slot sections={ sections } name="footer" className="layout-footer" component="footer">
              <ContainerFooter>
                <Slot sections={ sections } name="footer-logo" className="layout-footer-logo" component="<>">
                  <LogoFooter/>
                </Slot>
                <Slot sections={ sections } name="footer-left-menu" className="layout-footer-left-menu" component="<>">
                  <LeftFooter/>
                </Slot>
                <Slot sections={ sections } name="footer-right-menu" className="layout-footer-right-menu" component="<>">
                  <RightFooter/>
                </Slot>
              </ContainerFooter>
            </Slot>
          </Slot>
        </div>
      </>
    );
  }
}

export default OneColumnLayout;
