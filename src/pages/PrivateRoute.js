import { Navigate, Outlet } from 'react-router-dom';

export default function PrivateRoute({ authenticated }) {
  return authenticated ? <Outlet /> : <Navigate to='/' replace />;
}
