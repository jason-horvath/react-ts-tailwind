import { FC, KeyboardEventHandler, RefObject } from 'react';
import './Input.css';

interface InputProps {
  className?: string;
  defaultValue: string | number;
  inputRef?: RefObject<HTMLInputElement>;
  name: string;
  label: string;
  onKeyPress?: KeyboardEventHandler;
  placeholder?: string;
  type?: string;
}

const Input: FC<InputProps> = ({className='input', defaultValue, inputRef, name, onKeyPress, placeholder, type }): JSX.Element => {
  return (
    <>
      <input type={type || 'text'}
        name={name}
        className={className}
        onKeyPress={onKeyPress || undefined}
        ref={inputRef || undefined}
        defaultValue={defaultValue || ''}
        placeholder={placeholder || ''}
      />
    </>
  );
}

export default Input;