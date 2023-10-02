import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from 'pages/HomePage/HomePage';
import ProfilePage from 'pages/ProfilePage/ProfilePage';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/profile/:id',
    element: <ProfilePage />,
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
