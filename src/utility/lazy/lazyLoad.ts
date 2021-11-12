import React from 'react';

export const lazyLoad = (importReturn: any) => {
  return React.lazy(() => importReturn);
}