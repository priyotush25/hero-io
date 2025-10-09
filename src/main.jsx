import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router/dom";
import "./index.css";
import Routes from "./Routes/Routes";

createRoot(document.getElementById("root")).render(
  <RouterProvider router={Routes} />
);
