import { FC, ReactNode, MouseEventHandler } from 'react';
import './Button.css';

interface ButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: MouseEventHandler;
  type?: 'button' | 'reset' | 'submit';
};

const Button: FC<ButtonProps> = ({ children, className='button', type='button', ...otherProps }): JSX.Element => {
  return (
    <button className={className} type={type} {...otherProps}>
      {children}
    </button> 
  );
}

export default Button;