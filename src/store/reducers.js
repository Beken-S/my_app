import { combineReducers } from 'redux';
import { chatsReducer } from './chats';
import { gistsReducer, gistsRequestReducer } from './gists';
import { messagesReducer } from './messages';
import { profileReducer } from './profile';

const rootReducer = combineReducers({
  chats: chatsReducer,
  messages: messagesReducer,
  profile: profileReducer,
  gistsRequest: gistsRequestReducer,
  gists: gistsReducer,
});

export { rootReducer };
