import { FC, KeyboardEvent, RefObject } from 'react';
import { numberOnly } from '@utility/event/input'

interface NumberInputProps {
  className?: string;
  defaultValue: number;
  inputRef?: RefObject<HTMLInputElement>;
}

const NumberInput: FC<NumberInputProps> = ({ className, defaultValue, inputRef }): JSX.Element => {
  return (
    <>
      <input type="text"
        className={className}
        onKeyPress={(e: KeyboardEvent<HTMLInputElement>) => numberOnly(e)}
        ref={inputRef}
        defaultValue={defaultValue}
      />
    </>
  );
}

export default NumberInput;