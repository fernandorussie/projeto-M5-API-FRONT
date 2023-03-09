import React, {useContext} from 'react';
import App from "../App";


//Rotas
import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';
import Admin from '../pages/Admin';
import Cart from '../pages/Cart';
import Details from '../pages/Details';

import { createBrowserRouter, Navigate } from 'react-router-dom';


const Private = ({Item}) => {

  const signed = JSON.parse(localStorage.getItem('tokenAuth'));
  return signed > 0 ? <Item/> : <Login/>
}

const PrivateAdm = ({Item}) => {
  
const signed = JSON.parse(localStorage.getItem('tokenAdm'));
return signed> 0 ? <Item/> : <Login/>
}

export const router = createBrowserRouter([
  {
    element: <App/>,
    children: [
      {
        path: '/home',
        element: <Private Item={Home}/>
      },
      {
        path: '/admin',
        element: <PrivateAdm Item={Admin}/>
      },
      {
        path: '/',
        element: <Private Item={Home}/>
      },
      {
        path: '/register',
        element: <Register/>
      },
      {
        path: '/cart',
        element: <Private Item={Cart}/>
      },
      {
        path: '/produto/:id',
        element: <Private Item={Details}/>
      },
      {
        path: '*',
        element: <Navigate to="/"/>
      }
    ]
  }
])