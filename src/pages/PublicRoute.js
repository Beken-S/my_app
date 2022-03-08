import { Navigate, Outlet } from 'react-router-dom';

export function PublicRoute({ authenticated }) {
  return !authenticated ? <Outlet /> : <Navigate to='/chats' replace />;
}
