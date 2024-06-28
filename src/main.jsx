import React from 'react'
import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/login/Login";
import Cadastro from "./components/cadastro/Cadastro";
import HomePage from "./components/homePage/HomePage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/Cadastro",
    element: <Cadastro />,
  },
  {
    path: "/HomePage",
    element: <HomePage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
