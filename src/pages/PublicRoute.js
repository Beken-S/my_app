import { Navigate, Outlet } from 'react-router-dom';

export default function PublicRoute({ authenticated }) {
  return !authenticated ? <Outlet /> : <Navigate to='/chats' replace />;
}
