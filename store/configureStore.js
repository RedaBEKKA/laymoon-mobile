import {createStore, combineReducers, applyMiddleware} from 'redux';
import cardReducer from '../reducers/cardReducer';
import userReducer from '../reducers/userReducer';
import walletReducer from '../reducers/walletReducer';
import chatReducer from '../reducers/chatReducer';
import thunk from 'redux-thunk';
const rootReducer = combineReducers({cardReducer,chatReducer, userReducer, walletReducer});

export const Store = createStore(rootReducer, applyMiddleware(thunk));
