import { FC } from 'react';
import { Route } from 'react-router-dom';
import { RouteInterface } from '@interface';

const PublicRoute: FC<RouteInterface> = (props): JSX.Element => {
  return (
    <>
      <Route {...props}/>
    </>
  );
}

export default PublicRoute;