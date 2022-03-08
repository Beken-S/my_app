import { Outlet } from 'react-router-dom';
import { HomePageLayout } from '../components';

export function HomePage() {
  return <HomePageLayout form={<Outlet />} />;
}
