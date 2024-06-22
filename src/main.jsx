import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import MainLayout from "./MainLayout/MainLayout";

import Banner from "./Banner/Banner";
import Home from "./Home/Home";
import Visual from "./Visual/Visual";
import DummySection from "./DummySection/DummySection";
import Gallery from "./Gallery/Gallery";
import ExploreMassart from "./ExploreMassart/ExploreMassart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    // errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/",
        element: <Visual></Visual>,
      },
      {
        path: "/",
        element: <DummySection></DummySection>,
      },
      {
        path: "/",
        element: <Gallery></Gallery>,
      },
      {
        path: "/",
        element: <ExploreMassart></ExploreMassart>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
