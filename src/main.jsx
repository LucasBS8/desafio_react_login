import React from 'react'
import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/pages/login/Login";
import Cadastro from "./components/pages/cadastro/Cadastro";
import HomePage from "./components/pages/homePage/HomePage";
import NovoUser from './components/pages/novoUser/NovoUser';
import EditarUser from './components/pages/editarUser/EditarUser';


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
  {
    path: "/NovoUser",
    element: <NovoUser />,
  },
  {
    path: "/EditarUser",
    element: <EditarUser />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
