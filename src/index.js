import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import configureStore from './store/configureStore'
import { increment, decrement, incrementBy } from './actions/countActions';
import { Provider } from 'react-redux';

const store = configureStore()
//console.log(store)

//console.log(store.getState())

store.subscribe(() => {
  console.log('updated value', store.getState())
})

store.dispatch(increment())


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);



