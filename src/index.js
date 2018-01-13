import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from 'shared/components/App/App';
import store from 'shared/stores';

ReactDOM.render(
  <Provider store={ store }>
      <App />
  </Provider>, document.getElementById('root'));
