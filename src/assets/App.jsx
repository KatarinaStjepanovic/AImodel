import React from "react";
import { useRef } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import AImodel from "./AImodel";
import FrontPage from "./FrontPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <FrontPage />,
    loader: async () => {
      await new Promise((r) => setTimeout(r, 1500));
      return null;
    },
  },
  {
    path: "/AIchat",
    element: <AImodel />,
    loader: async () => {
      await new Promise((r) => setTimeout(r, 1500));
      return null;
    },
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
