import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './pages/Root';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import AuthProvider from './providers/AuthProvider';
import AddArtifacts from './pages/AddArtifacts';
import PrivateRoute from './providers/PrivateRoute';
import AllArtifacts from './pages/AllArtifacts';
import About from './pages/About';
import ArtifactDetails from './pages/ArtifactDetails';
import MyArtifacts from './pages/MyArtifacts';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement : <ErrorPage></ErrorPage>,
    children : [
      {
        path: "/",
        element : <Home></Home>
      },
      {
        path: "/about",
        element : <About></About>
      },
      {
        path : "/login",
        element : <Login></Login>
      },
      {
        path : "/register",
        element : <Register></Register>,
      },
      {
        path: "/add-artifact",
        element: <PrivateRoute><AddArtifacts></AddArtifacts></PrivateRoute>
      },
      {
        path: "/all-artifacts",
        element: <PrivateRoute><AllArtifacts></AllArtifacts></PrivateRoute>
      },
      {
        path:"/artifact-details",
        element: <PrivateRoute><ArtifactDetails></ArtifactDetails></PrivateRoute> 
      },
      {
        path:"/my-artifacts",
        element: <PrivateRoute><MyArtifacts></MyArtifacts></PrivateRoute> 
      },
      {
        path:"/artifacts/:id",
        element: <PrivateRoute><ArtifactDetails></ArtifactDetails></PrivateRoute> 
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
  </StrictMode>,
)
