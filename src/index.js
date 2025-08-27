import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppLayout from './AppLayout';
//import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import About from './component/About';
import Contactus from './component/Contactus';
import Errorpage from './component/Errorpage';
import Body from './component/Body';
import RestaurentMenu from './component/RestaurentMenu';
import CartItem from './component/CartItem';


const appRouter =createBrowserRouter([
  {
    path: '/' ,
    element: <AppLayout/>,
    children:[
      {
        path: '/',
        element:<Body/>
      },
      {
        path: '/about',
        element:<About/>
      },
      {
        path: '/contactus',
        element:<Contactus/>
      },
      {
        path:'/restaurentMenu/:id',
        element:<RestaurentMenu/>
      },
      {
        path:'/cart',
        element:<CartItem/>
      },
    ],
    errorElement:<Errorpage/>
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter}/>
  </React.StrictMode>
);
 



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

