import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home, Layout, ErrorPage, Country } from './pages/index';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home />, errorElement: <ErrorPage /> },
      { path: ':country', element: <Country /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

//TODO fix styles ✅
//TODO deploy on vercel ✅
//TODO put results into pages
