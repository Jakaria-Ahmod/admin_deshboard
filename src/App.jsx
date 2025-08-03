import { createBrowserRouter, RouterProvider } from 'react-router';
import RootComponents from './components/RootComponets';
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootComponents></RootComponents>,
      children: [
        {
          path: '/',
          element: <div>Home</div>,
        },
        {
          path: '/about',
          element: <div>about</div>,
        },
      ],
    },
  ]);

  return (
    <>
      <div>
        <RouterProvider router={router} />,
      </div>
    </>
  );
}

export default App;
