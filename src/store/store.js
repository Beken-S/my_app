import { createStore, combineReducers } from 'redux';
import { chatsReducer } from './chats';
import { messagesReducer } from './messages';
import { profileReducer } from './profile';

export const store = createStore(
  combineReducers({
    chats: chatsReducer,
    messages: messagesReducer,
    profile: profileReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
