import { Navigate, Outlet } from 'react-router-dom';

export function PrivateRoute({ authenticated }) {
  return authenticated ? <Outlet /> : <Navigate to='/' replace />;
}
