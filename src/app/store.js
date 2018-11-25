import { createStore, combineReducers, applyMiddleware } from 'redux';
import promise from 'redux-promise-middleware';

import math from './reducers/mathReducer';

export default createStore(
    combineReducers({
        math
    }),
    {},
    applyMiddleware(promise())
);
