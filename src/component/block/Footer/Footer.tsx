import { FC } from 'react';
import './Footer.css';

interface FooterProps {
  text: string;
};

const Footer: FC<FooterProps> = ({ text }): JSX.Element => {
  return (
    <div className="footer">
      <a href="https://github.com/jason-horvath" target="_blank" rel="noreferrer">{text}</a></div>
  );
}

export default Footer;