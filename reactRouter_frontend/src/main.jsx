import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppLayout from "./AppLayout.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/home/Home.jsx";
import About from "./components/about/About.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
