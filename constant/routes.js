import { Component2 } from '../components/component2.js';
import { Component1 } from '../components/component1.js';

export const routes = {
  '/route1' : Component1(),
  '/route2' : Component2(),
};

export const menus = [
  {
    key: 'task',
    label: 'Menu1',
    icon: 'far fa-hourglass-start',
    children: [{
      key: '/route1',
      name: 'Menu1-1',
      component: routes['/route1'],
    }],
  },
  {
    key: 'task',
    label: 'Menu2',
    icon: 'far fa-table',
    children: [{
      key: '/route2',
      name: 'Menu2-2',
      component: routes['/route2'],
    }],
  },
]