import React from 'react';
import styles from './styles';
import { Component } from '../framework';
import { inject, observer } from 'mobx-react';
import { Link } from '../link';

@inject('store') @observer

export class RightHeader extends Component {
  store = this.props.store;

  handleLogout = () => {
    this.store.logout();
    this.store.toast('You have successfully logged out', 'success');
  };

  render() {
    let btn1 =
      <Link route='login' params={ {} } className='bg-white py-2 px-4 rounded hover:bg-grey-light md:block hidden'>
        Log In
      </Link>;

    let btn2 =
      <Link route='signup' params={ {} } className='bg-green py-2 px-4 rounded hover:bg-green-dark md:block hidden'>
        Sign Up
      </Link>;

    if (this.store.isLoggedIn) {
      btn1 =
        <button onClick={ this.handleLogout } className='btn btn-white md:block hidden'>
          Log out
        </button>
      ;
      btn2 =
        <Link route='user-account-panel' className='btn btn-green md:block hidden'>
          My Account
        </Link>;

    }

    return (
      <div className="flex justify-end">
        <button className="btn btn-white block md:hidden hidden">
          <i className="fa fa-bars h4"/>
        </button>
        <div className='spaced-x-15 md:block hidden'>
          <Link route='https://www.meetup.com/ME-IO-DXB/' className='btn btn-white text-red hover:bg-white hover:text-red' target='_blank'>
            <i className='fa fa-meetup mr-2'/> Meetup
          </Link>
          <Link route='https://github.com/me-io/community' className='btn btn-white text-black hover:bg-white' target='_blank'>
            <i className='fa fa-github mr-2'/> Github
          </Link>
          <Link route='https://github.com/me-io/community' className='btn btn-white text-black hover:bg-white' target='_blank'>
            <i className='fa fa-phone mr-2'/> Contact Us
          </Link>
        </div>
        <div className='spaced-x-15 block md:hidden'>
          <Link route='https://www.meetup.com/ME-IO-DXB/' className='btn btn-white text-red hover:bg-white hover:text-red' target='_blank'>
            <i className='fa fa-meetup mr-2'/>
          </Link>
          <Link route='https://github.com/me-io/community' className='btn btn-white text-black hover:bg-white' target='_blank'>
            <i className='fa fa-github mr-2'/>
          </Link>
          <Link route='https://github.com/me-io/community' className='btn btn-white text-black hover:bg-white' target='_blank'>
            <i className='fa fa-phone mr-2'/>
          </Link>
        </div>

        <div className='hidden'>
          <div className="inline-flex mr-2 text-primary">
            { btn1 }
          </div>
          <div className="inline-flex text-white">
            { btn2 }
          </div>
        </div>
        <style jsx>{ styles }</style>
      </div>
    );
  }

}

