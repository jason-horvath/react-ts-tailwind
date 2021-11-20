import { MouseEvent } from 'react';

export const isDoubleClick = (e: MouseEvent) => {
  return (e.detail === 2);
}