import { Routes, Route, Link } from 'react-router-dom';
import { BasePage } from '../pages';
import { ChatsPage } from '../pages';
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
        <Route path='/profile' element={<h2>Profile Page</h2>} />
      </Route>
      <Route path='*' element={<h2>404: Not found</h2>} />
    </Routes>
  );
}
