import { shallowEqual, useSelector } from 'react-redux';
import { selectAuthStatus } from '../store/auth';
import { Routes, Route } from 'react-router-dom';
import {
  BasePage,
  ChatsPage,
  HomePage,
  ProfilePage,
  GistsPage,
  PrivateRoute,
  PublicRoute,
} from '.';
import {
  Chat,
  Header,
  PleaseSelectChat,
  SignInForm,
  SignUpForm,
} from '../components';

export function Router() {
  const authenticated = useSelector(selectAuthStatus, shallowEqual);

  return (
    <Routes>
      <Route path='/' element={<BasePage />}>
        <Route path='' element={<PublicRoute authenticated={authenticated} />}>
          <Route path='' element={<HomePage />}>
            <Route index element={<SignUpForm />} />
            <Route path='sign_in' element={<SignInForm />} />
          </Route>
        </Route>
        <Route
          path='/chats'
          element={<PrivateRoute authenticated={authenticated} />}
        >
          <Route path='' element={<ChatsPage />}>
            <Route index element={<PleaseSelectChat />} />
            <Route path=':chatId' element={<Chat />} />
          </Route>
        </Route>
        <Route
          path='/profile'
          element={<PrivateRoute authenticated={authenticated} />}
        >
          <Route path='' element={<ProfilePage />} />
        </Route>
        <Route path='/gists' element={<GistsPage />} />
      </Route>
      <Route path='/test' element={<Header />} />
      <Route path='*' element={<h2>404: Not found</h2>} />
    </Routes>
  );
}
