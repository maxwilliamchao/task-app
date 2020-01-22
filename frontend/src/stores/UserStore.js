import { extendObservable } from 'mobx';

// This is a User Store


class UserStore {
  constructor() {
    extendObservable(this, {

      loading: true,
      isLoggedIn: false,
      username: ''

    })
  }
}

export default new UserStore();