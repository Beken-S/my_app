import { Outlet } from 'react-router-dom';
import { HomePageLayout } from '../components';

export default function HomePage() {
  return <HomePageLayout form={<Outlet />} />;
}
