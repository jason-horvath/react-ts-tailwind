import { RouteInterface } from '@interface';
import { About, Home } from '@page';

const routes: RouteInterface[] = [
  {
    path: '/',
    name: "Home Page",
    component: Home,
    private: false,
    exact: true
  },
  {
    path: '/about',
    name: "About Page",
    component: About,
    private: false,
    exact: true
  },
  {
    path: '/count',
    name: "Count Page",
    component: Home,
    private: false,
    exact: true
  },
];

export default routes;