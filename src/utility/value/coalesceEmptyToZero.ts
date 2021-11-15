import { isEmpty } from '@utility/value/isEmpty';

export const coalesceEmptyToZero = (value: any) => {
  return isEmpty(value) ? 0 : parseInt(value);
}