import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Login from './pages/Login/Login.tsx'
import Dashboard from './pages/Dashboard/Dashboard.tsx'
import Systems from './pages/Systems/Systems.tsx'
import Waypoints from './pages/Waypoints/Waypoints.tsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GlobalPlayerInfoContextProvider } from './contexts/PlayerInfoContext.tsx'
import Contracts from './pages/Contracts/Contracts.tsx'
import Shipyards from './pages/Shipyards/Shipyards.tsx'
import Markets from './pages/Markets/Markets.tsx'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,

  },
  {
    path: "/dashboard",
    element: <Dashboard />,


  },
  {
    path: "/systems",
    element: <Systems />,

  },
  {
    path: "/waypoints/:id",
    element: <Waypoints />,

  },
  {
    path: "/contracts",
    element: <Contracts />,
  },
  {
    path: "/shipyards/:systemid/:waypointid",
    element: <Shipyards />,

  },
  {
    path: "/Markets/:systemid/:waypointid",
    element: <Markets />,

  },
  {
    path: "*",
    element: <NotFoundPage />,
  }

]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalPlayerInfoContextProvider>
      <RouterProvider router={router} />
    </GlobalPlayerInfoContextProvider>
  </React.StrictMode>,
);
