import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './component/Main/Main.jsx';
import Home from './component/Home/Home.jsx';
import Login from './component/Login/Login.jsx';
import Register from './component/Register/Register.jsx';
import AuthProvider from './AuthProvider/AuthProvider.jsx';
import ChefDetails from './component/ChefDetails/ChefDetails.jsx';
import NotFound from './component/404/NotFound.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
    {
      path: "/",
      element:<Home></Home>,
    },
    {
      path:'/login',
      element:<Login></Login>
    },
    {
      path:'/register',
      element:<Register></Register>
    },
    {
      path:'/chefdetails/:chefId',
      element:<ChefDetails></ChefDetails>,
      // loader:({params})=>fetch(`http://localhost:5000/chefdetails/${params.chefId}`)
    
    },
    
   
    ]
    },
    {
      path:'*',
      element:<NotFound></NotFound>
    },
    
    
   
    
  
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider> <RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
