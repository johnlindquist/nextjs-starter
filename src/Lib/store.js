import { action, computed, observable } from 'mobx';
import { Cookie } from '@Util/cookie';
import { echo } from '@Util/echo';

let store = null;

class Store {
  @observable lastUpdate = null;
  @observable locale = 'en';
  @observable ssDate = null;
  @observable appUser = null;

  @observable appConfig = null;
  // notification
  @observable notification = [];
  @observable toastMsg = [];
  @observable resToastMsg = []; // ajax only toast message component
  @observable flashMsg = [];

  // @link https://mobx.js.org/refguide/computed-decorator.html
  @computed get isLoggedIn() {
    return this.appUser && this.appUser.user || false;
  }

  @computed get username() {
    return this.appUser && this.appUser.user ? this.appUser.user.username : false;
  }

  @computed get userId() {
    return this.appUser && this.appUser.user ? this.appUser.user._id : false;
  }

  constructor(isServer, initStore, data) {
    if (data) {
      this.ssDate = data.ssDate || null;
      this.locale = data.locale || 'en';
      this.appUser = data.appUser || {};
      this.appConfig = data.appConfig || {};
      // this.isLoggedIn = data.appUser && data.appUser.user || false;
    }
  }

  // @todo import actions from modules? or multistore?
  @action logout = () => {
    // todo call api to invalidate the token maybe?
    Cookie.destroy(null, 'tokenJwt');
    this.appUser = {};
    echo(document.cookie);
    // if url is /user/.... redirect to home page otherwise keep in same page
  };

  @action toast = (msg, type, stack) => {
    if (stack) {
      this.toastMsg.push({ msg, type });
    } else {
      this.toastMsg = [{ msg, type }];
    }
  };

  @action resToast = (data, stack) => {
    if (stack) {
      this.resToastMsg.push(data);
    } else {
      this.resToastMsg = [data];
    }
  };

}

export function initializeStore(isServer, initStore, data) {
  if (isServer) {
    return new Store(isServer, initStore, data);
  } else {
    if (store === null) {
      store = new Store(isServer, initStore, data);
    }
    return store;
  }
}
