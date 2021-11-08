import { FC, KeyboardEvent, RefObject } from 'react';
import { numberOnly } from '@utility/event/input'

interface NumberInputProps {
  className?: string;
  defaultValue: number;
  ref?: RefObject<HTMLInputElement>;
}

const NumberInput: FC<NumberInputProps> = ({ className, defaultValue, ref }): JSX.Element => {
  return (
    <>
      <input type="text"
        className={className}
        onKeyPress={(e: KeyboardEvent<HTMLInputElement>) => numberOnly(e)}
        ref={ref}
        defaultValue={defaultValue}
      />
    </>
  );
}

export default NumberInput;