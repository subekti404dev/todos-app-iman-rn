import PouchyStore from 'pouchy-store';
import AppConfig from '../config/AppConfig';

class TodoStore extends PouchyStore {
  get name() {
    return AppConfig.DB_NAME;
  }

  get urlRemote() {
    return AppConfig.DB_HOST;
  }

  get optionsRemote() {
    return {
      auth: {
        username: AppConfig.DB_USER,
        password: AppConfig.DB_PASS
      },
    };
  }
}

export default new TodoStore();