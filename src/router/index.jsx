import routes from './routes'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const Router = () => <RouterProvider router={createBrowserRouter(routes)} />

export default Router
