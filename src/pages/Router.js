import React, { Suspense, lazy } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { selectAuthStatus } from '../store/auth';
import { Routes, Route } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';

const Chat = lazy(() => import('../components/Chat/Chat'));
const PleaseSelectChat = lazy(() =>
  import('../components/PleaseSelectChat/PleaseSelectChat')
);
const SignInForm = lazy(() => import('../components/SignInForm/SignInForm'));
const SignUpForm = lazy(() => import('../components/SignUpForm/SignUpForm'));

const BasePage = lazy(() => import('./BasePage'));
const ChatsPage = lazy(() => import('./ChatsPage'));
const HomePage = lazy(() => import('./HomePage'));
const ProfilePage = lazy(() => import('./ProfilePage'));
const GistsPage = lazy(() => import('./GistsPage'));
const PrivateRoute = lazy(() => import('./PrivateRoute'));
const PublicRoute = lazy(() => import('./PublicRoute'));

export function Router() {
  const authenticated = useSelector(selectAuthStatus, shallowEqual);

  return (
    <Suspense fallback={<CircularProgress />}>
      <Routes>
        <Route path='/' element={<BasePage />}>
          <Route
            path=''
            element={<PublicRoute authenticated={authenticated} />}
          >
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
        <Route path='*' element={<h2>404: Not found</h2>} />
      </Routes>
    </Suspense>
  );
}
