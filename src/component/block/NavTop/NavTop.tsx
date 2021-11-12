import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import './NavTop.css';


const NavTop: FC = (): JSX.Element => {
  const navLinkClass: string = 'nav-top__item';

  return (
    <nav className="nav-top">
      <NavLink to="/" className={navLinkClass}>Home</NavLink>
      <NavLink to="/count" className={navLinkClass}>Count</NavLink>
      <NavLink to="/about" className={navLinkClass}>About</NavLink>
    </nav>
  );
}

export default NavTop;