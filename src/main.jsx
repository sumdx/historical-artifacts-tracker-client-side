import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AuthProvider from "./providers/AuthProvider";
import AddArtifacts from "./pages/AddArtifacts";
import PrivateRoute from "./providers/PrivateRoute";
import AllArtifacts from "./pages/AllArtifacts";
import About from "./pages/About";
import ArtifactDetails from "./pages/ArtifactDetails";
import MyArtifacts from "./pages/MyArtifacts";
import LikedArtifacts from "./pages/LikedArtifacts";
import UpdatePage from "./pages/UpdatePage";
import { HelmetProvider } from "react-helmet-async";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/add-artifact",
        element: (
          <PrivateRoute>
            <AddArtifacts></AddArtifacts>
          </PrivateRoute>
        ),
      },
      {
        path: "/all-artifacts",
        element: (
         
            <AllArtifacts></AllArtifacts>
         
        ),
      },
      {
        path: "/artifact-details",
        element: (
          <PrivateRoute>
            <ArtifactDetails></ArtifactDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-artifacts",
        element: (
          <PrivateRoute>
            <MyArtifacts></MyArtifacts>
          </PrivateRoute>
        ),
      },
      {
        path: "/artifacts/:id",
        element: (
          <PrivateRoute>
            <ArtifactDetails></ArtifactDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/liked-artifacts",
        element: (
          <PrivateRoute>
            <LikedArtifacts></LikedArtifacts>
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <UpdatePage></UpdatePage>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </HelmetProvider>
  </StrictMode>
);
