import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { chatsReducer } from './chats';
import { messagesReducer } from './messages';
import { profileReducer } from './profile';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  combineReducers({
    chats: chatsReducer,
    messages: messagesReducer,
    profile: profileReducer,
  }),
  composeEnhancers(applyMiddleware(thunk))
);
