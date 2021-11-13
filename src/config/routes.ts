import { RouteInterface } from '@interface';
import { lazyLoad } from '@utility/lazy/lazyLoad';

const routes: RouteInterface[] = [
  {
    path: '/',
    name: "Home Page",
    component: lazyLoad(import('@page/Home/HomePage')),
    private: false,
    exact: true,
    componentProps: {
      title: "Home Page"
    }
  },
  {
    path: '/about',
    name: "About Page",
    component: lazyLoad(import('@page/About/AboutPage')),
    private: false,
    exact: true,
    componentProps: {
      title: "About Page"
    }
  },
  {
    path: '/count',
    name: "Count Page",
    component: lazyLoad(import('@page/Count/CountPage')),
    private: false,
    exact: true,
    componentProps: {
      title: "Count Page",
      initialCount: 20
    }
  },
  {
    path: '/todo',
    name: "Todo Page",
    component: lazyLoad(import('@page/Todo/TodoPage')),
    private: false,
    exact: true,
    componentProps: {
      title: "Todo Page"
    }
  }
];

export default routes;