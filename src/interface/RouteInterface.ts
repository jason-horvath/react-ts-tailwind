import { FC } from 'react';

export default interface RouteInterface {
  path: string;
  name: string;
  component?: FC<any>;
  componentProps?: any;
  private: boolean;
  exact: boolean;
  render?: any;
};