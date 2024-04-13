import { createBrowserRouter } from 'react-router-dom'
import Login from './src/views/Login'
import Signup from './src/views/Signup'
import DefaultLayout from './src/views/layouts/DefaultLayout'
import UserLayout from './src/views/layouts/UserLayout'
import Homepage from './src/views/user/Homepage'
import CreateReviewer from './src/views/user/CreateReviewer'
import Reviewer from './src/views/user/Reviewer'
import TestSession from './src/views/user/TestSession'
import TestResult from './src/views/user/TestResult'

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
    ],
  },
  {
    path: '/',
    element: <UserLayout />,
    children: [
      {
        path: '/:username/',
        element: <Homepage />,
      },
      {
        path: '/:username/create',
        element: <CreateReviewer />,
      },
      {
        path: '/:username/:set_title',
        element: <Reviewer />,
      },
      {
        path: '/:username/prac-test',
        element: <TestSession />,
      },
      {
        path: '/:username/result',
        element: <TestResult />,
      },
    ],
  },
])

export default router
