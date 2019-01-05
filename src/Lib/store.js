import { action, observable } from "mobx";

let store = null;

class Store {
  @observable appConfig = null;

  // notification
  constructor(isServer, initStore, data) {
    if (data) {
      this.appConfig = data.appConfig || {};
    }
  }

  @observable toastMsg = [];
  @action addToast = (msg, type, stack) => {
    if (stack) {
      this.toastMsg.push({ msg, type });
    } else {
      this.toastMsg = [{ msg, type }];
    }
  };


  @observable ajaxToastMsg = []; // ajax only toast message component
  @action addAjaxToast = (data, stack) => {
    if (stack) {
      this.ajaxToastMsg.push(data);
    } else {
      this.ajaxToastMsg = [data];
    }
  };

  // example
  @observable githubLink = null;
  @observable markdownBody = null;
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
