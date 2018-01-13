import { createStore } from 'redux';
import reducer from 'shared/reducers';

const store = createStore(
  reducer
);

export default store;