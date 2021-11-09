import { FC } from 'react';

export default interface RouteInterface {
  path: string;
  name: string;
  component: FC;
  props?: any;
  private: boolean;
  exact: boolean;
};