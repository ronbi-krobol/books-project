import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from './Components/Routes/Root';
import Homes from './Components/Home/Homes';
import ListedBook from './Components/ListedBook/ListedBook';
import Pages from './Components/ReadPages/Pages';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,

    children: [
      {
        path: "/",
        element: <Homes></Homes>,
      },

      {
        path: "/listedbooks",
        element: <ListedBook></ListedBook>
      },

      {
        path: "/pagesread",
        element: <Pages></Pages>
      }

    ]
  },


]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
