import { FC } from 'react';

interface InputProps {
  type: string;
};

const Input: FC<InputProps> = ({ type }): JSX.Element => {
  return (
    <>
      <input type={type} />
    </>
    
  );
}

export default Input;