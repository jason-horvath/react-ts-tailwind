import { FC } from 'react';
import { RouteInterface } from '@interface';

const PrivateRoute: FC<RouteInterface> = (props): JSX.Element => {
  return (
    <div className="newClassName"></div>
  );
}

export default PrivateRoute;