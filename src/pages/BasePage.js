import { Outlet } from 'react-router-dom';
import { BaseLayout } from '../components';
import { Header } from '../components';

export function BasePage() {
  return <BaseLayout header={<Header />} content={<Outlet />} />;
}
