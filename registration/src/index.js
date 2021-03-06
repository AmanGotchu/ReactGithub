import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login/Login';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import store from './redux/store';

const ReduxApp = () => {
  return (
    <Provider store={store}>
      <Login />
    </Provider>
  )
}

ReactDOM.render(<ReduxApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
