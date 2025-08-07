// Layouts

// Pages
import Home from '~/pages/Home';
import Cart from '~/pages/Cart';
import Category from '~/pages/Category';

const publicRoutes = [
  { path: '/', component: Home },
  { path: '/cart', component: Cart },
  { path: '/category', component: Category },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
