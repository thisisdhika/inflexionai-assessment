import pMinDelay from 'p-min-delay'
import { Splash } from '@/components'
import loadable from '@loadable/component'
import { Navigate } from 'react-router-dom'
import { AuthenticatedLayout, GuestLayout } from '@/layouts'

const Page = loadable(({ name }) => pMinDelay(import(`@/pages/${name}/index.jsx`), 2500), {
  cacheKey: ({ name }) => name,
  fallback: <Splash />,
})

const routes = [
  {
    path: '/auth',
    element: <GuestLayout />,
    children: [
      {
        path: '/auth',
        element: <Navigate to="/auth/sign-in" replace />,
      },
      {
        path: '/auth/sign-in',
        element: <Page name="sign-in" />,
      },
      {
        path: '/auth/sign-up',
        element: <Page name="sign-up" />,
      },
    ],
  },
  {
    path: '/',
    element: <AuthenticatedLayout />,
    children: [
      {
        path: '/dashboard',
        element: <Page name="tables" />,
      },
      {
        path: '/tables',
        element: <Page name="tables" />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/auth" replace />,
  },
]

export default routes
