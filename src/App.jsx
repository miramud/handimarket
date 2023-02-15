import './App.scss'
import React from 'react'
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Layout from './Layout';
import Home from './pages/home/Home';
import Gigs from './pages/gigs/Gigs';
import Gig from './pages/gig/Gig';
import MyGigs from './pages/myGigs/MyGigs';
import Message from './pages/message/Message';
import Messages from './pages/messages/Messages';
import Orders from './pages/Orders/Orders';
import Settings from './pages/settings/Settings';
import AddNewGig from './pages/addGig/AddNewGig';
import Register from './pages/register/Register';
import Login from './pages/login/Login'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/gigs',
        element: <Gigs />
      },
      {
        path: '/messages',
        element: <Messages />
      },
      {
        path: '/message/:id',
        element: <Message />
      },
      {
        path: '/settings',
        element: <Settings />
      },
      {
        path: '/orders',
        element: <Orders />
      },
      {
        path: '/mygigs',
        element: <MyGigs />
      },
      {
        path: '/gig/:id',
        element: <Gig />
      },
      {
        path: '/addnew',
        element: <AddNewGig />
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
])

function App() {

  <Layout />
  return <RouterProvider router={router} />;

}

export default App
