import { Routes, Route } from 'react-router-dom';
import { BasePage, ChatsPage, ProfilePage, GistsPage } from '.';
import { Chat } from '../components';

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<BasePage />}>
        <Route index element={<h2>Home Page</h2>} />
        <Route path='/chats' element={<ChatsPage />}>
          <Route index element={<span>Please select a chat</span>} />
          <Route path=':chatId' element={<Chat />} />
        </Route>
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/gists' element={<GistsPage />} />
      </Route>
      <Route path='*' element={<h2>404: Not found</h2>} />
    </Routes>
  );
}
