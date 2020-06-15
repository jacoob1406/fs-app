import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App/App';
import * as serviceWorker from './serviceWorker';
import { createStore , applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './state/reducers/rootReducer'
import rootSaga from './state/sagas/rootSaga';
import createSagaMiddleware from 'redux-saga';
import 'font-awesome/css/font-awesome.min.css';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
)
rootSaga.forEach(sagaMiddleware.run);

ReactDOM.render(
 <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
