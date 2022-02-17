import { combineReducers } from 'redux';
import { chatsReducer } from './chats';
import { messagesReducer } from './messages';
import { profileReducer } from './profile';

const rootReducer = combineReducers({
  chats: chatsReducer,
  messages: messagesReducer,
  profile: profileReducer,
});

export { rootReducer };
