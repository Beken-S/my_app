import { NavLink, Outlet } from 'react-router-dom';
import { BaseLayout } from '../components';

const header = (
  <nav>
    <ul>
      <li>
        <NavLink to='/'>Home</NavLink>
      </li>
      <li>
        <NavLink to='/chats'>Chats</NavLink>
      </li>
      <li>
        <NavLink to='/profile'>Profile</NavLink>
      </li>
    </ul>
  </nav>
);

export function BasePage() {
  return <BaseLayout header={header} content={<Outlet />} />;
}
