import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Category from '../pages/Category/Category';
import Item from '../pages/Item/Item';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/category/:category',
    element: <Category />,
  },
  {
    path: '/item/:id',
    element: <Item />,
  },
]);
