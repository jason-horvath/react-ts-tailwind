import { FC } from 'react';
import './Header.css';

interface HeaderProps {
  text: string;
};

const Header: FC<HeaderProps> = ({ text }): JSX.Element => {
  return (
    <div className="header">
      <h1 className="header__title">{text}</h1>
    </div>
  );
}

export default Header;