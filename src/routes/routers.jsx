import App from "../App";

//Rotas
import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';
import Cart from '../pages/Cart';
import Details from '../pages/Details';

import { createBrowserRouter, Navigate } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    element: <App/>,
    children: [
      {
        path: '/home',
        element: <Home/>
      },
      {
        path: '/',
        element: <Login/>
      },
      {
        path: '/register',
        element: <Register/>
      },
      {
        path: '/cart',
        element: <Cart/>
      },
      {
        path: '/produto/:id',
        element: <Details/>
      },
      {
        path: '*',
        element: <Navigate to="/"/>
      }
    ]
  }
])