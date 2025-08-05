import { createBrowserRouter, RouterProvider } from 'react-router';
import RootComponents from './components/RootComponets';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import Favorites from './pages/Favorites';
import Inbox from './pages/Inbox';
import OrderLists from './pages/OrderLists';
import ProductStock from './pages/ProductStock';
import Pricing from './pages/Pricing';
import Calender from './pages/Calender';
import ToDo from './pages/ToDo';
import Contact from './pages/Contact';
import Invoice from './pages/Invoice';
import UIElements from './pages/UIElements';
import Team from './pages/Team';
import Table from './pages/Table';
import Settings from './pages/Settings';
import NotFound from './pages/notFound';
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootComponents></RootComponents>,
      children: [
        {
          path: '/',
          element: <Dashboard></Dashboard>,
        },

        {
          path: '/Products',
          element: <Products></Products>,
        },
        {
          path: '/Favorites',
          element: <Favorites></Favorites>,
        },
        {
          path: '/Inbox',
          element: <Inbox></Inbox>,
        },
        {
          path: '/OrderLists',
          element: <OrderLists></OrderLists>,
        },
        {
          path: '/ProductStock',
          element: <ProductStock></ProductStock>,
        },
        {
          path: '/Pricing',
          element: <Pricing></Pricing>,
        },
        {
          path: '/Calender',
          element: <Calender></Calender>,
        },
        {
          path: '/ToDo',
          element: <ToDo></ToDo>,
        },
        {
          path: '/Contact',
          element: <Contact></Contact>,
        },
        {
          path: '/Invoice',
          element: <Invoice></Invoice>,
        },
        {
          path: '/UIElements',
          element: <UIElements></UIElements>,
        },
        {
          path: '/Team',
          element: <Team></Team>,
        },
        {
          path: '/Table',
          element: <Table></Table>,
        },
        {
          path: '/Settings',
          element: <Settings></Settings>,
        },

        {
          path: '*',
          element: <NotFound></NotFound>,
        },
      ],
    },
  ]);

  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
