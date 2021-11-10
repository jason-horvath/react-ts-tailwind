import { FC } from 'react';
import { RouteComponentProps, Switch } from 'react-router-dom';
import { PublicRoute, PrivateRoute } from '@route';
import { RouteInterface } from '@interface';
import routes from '@config/routes';
import DefaultLayout from '@layout/DefaultLayout/DefaultLayout';

interface RouteSwitchProps {};

const RouteSwitch: FC<RouteSwitchProps> = (props): JSX.Element => {
  return (
    <Switch>
      {routes.map((route: RouteInterface, index: number) => {
        const RouteComponent: FC<RouteInterface> = route.private ? PrivateRoute : PublicRoute;
        const RenderComponent: any = route.component;
        return (
          <RouteComponent
            key={index}
            path={route.path}
            name={route.name}
            private={route.private}
            exact={route.exact}
            render={(props: RouteComponentProps) => (
              <DefaultLayout>
                <RenderComponent
                  {...props}
                  {...route.componentProps}
                />
              </DefaultLayout>
            )}
          />
        )
      })}
    </Switch>
  );
}

export default RouteSwitch;