import { useRoutes} from 'react-router-dom';
import Cart from '../pages/Cart'
import InitialPage from '../pages/InitialPage';

function ServiceRouter() {
  const routes = useRoutes([
    { path: '/', element: <InitialPage /> },
    { path: '/carrinho', element: <Cart /> },
    // { path: '*', element: <NotFound /> },
  ]);

  return <div>{routes}</div>;
}

export default ServiceRouter;
