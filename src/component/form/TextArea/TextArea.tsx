import { FC, KeyboardEventHandler, RefObject } from 'react';
import './TextArea.css';

interface TextAreaProps {
  className?: string;
  defaultValue: string | number;
  inputRef?: RefObject<HTMLTextAreaElement>;
  name: string;
  label: string;
  onKeyPress?: KeyboardEventHandler;
  placeholder?: string;
}

const TextArea: FC<TextAreaProps> = ({className='textarea', defaultValue, inputRef, name, onKeyPress, placeholder, children }): JSX.Element => {
  return (
    <>
      <textarea
        name={name}
        className={className}
        onKeyPress={onKeyPress || undefined}
        ref={inputRef || undefined}
        defaultValue={defaultValue || ''}
        placeholder={placeholder || ''}
      >{children}</textarea>
    </>
  );
}

export default TextArea;