import { FC } from 'react';
import { NavLink } from 'react-router-dom';


const NavTop: FC = (): JSX.Element => {
  return (
    <nav className="nav-top">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/count">Count</NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
  );
}

export default NavTop;