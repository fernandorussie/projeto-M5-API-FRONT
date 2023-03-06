import App from "../App";

//Rotas
import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';

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
        path: '*',
        element: <Navigate to="/"/>
      }
    ]
  }
])