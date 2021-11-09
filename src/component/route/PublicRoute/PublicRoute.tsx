import { FC } from 'react';
import { Route } from 'react-router-dom';
import { RouteInterface } from '@interface';

const PublicRoute: FC<RouteInterface> = (props): JSX.Element => {
  return (
    <div className="newClassName"></div>
  );
}

export default PublicRoute;