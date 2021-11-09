import { FC } from 'react';
import { NavTop } from '@block';
import './Header.css';

interface HeaderProps {
  text: string;
};

const Header: FC<HeaderProps> = ({ text }): JSX.Element => {
  return (
    <div className="header">
      <h1 className="header__title">{text}</h1>
      <NavTop />
    </div>
  );
}

export default Header;