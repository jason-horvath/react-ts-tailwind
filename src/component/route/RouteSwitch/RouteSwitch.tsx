import { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import { PublicRoute, PrivateRoute } from '@route';
import { RouteInterface } from '@interface';
import routes from '@config/routes';

interface RouteSwitchProps {};

const RouteSwitch: FC<RouteSwitchProps> = (props): JSX.Element => {
  return (
    <Switch>
      {routes.map((route: RouteInterface, index: number) => {
        const RouteComponent: FC<RouteInterface> = route.private ? PrivateRoute : PublicRoute;
        return (
          <RouteComponent
            key={index}
            {...route}
          />
        )
      })}
    </Switch>
  );
}

export default RouteSwitch;