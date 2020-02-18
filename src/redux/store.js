import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import reducers from './modules';

const middleware = [];

const store = createStore(reducers, composeWithDevTools(applyMiddleware(...middleware)));

export default store;