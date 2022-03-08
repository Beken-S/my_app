import { combineReducers } from 'redux';
import { authReducer } from './auth';
import { profileReducer } from './profile';
import { chatsReducer } from './chats';
import { messagesReducer } from './messages';
import { gistsReducer, gistsRequestReducer } from './gists';

const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  chats: chatsReducer,
  messages: messagesReducer,
  gistsRequest: gistsRequestReducer,
  gists: gistsReducer,
});

export { rootReducer };
