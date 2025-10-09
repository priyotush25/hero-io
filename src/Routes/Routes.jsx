import { createBrowserRouter } from "react-router";
import Apps from "../Component/Apps/Apps";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/apps",
        element: <Apps />,
      },
    ],
  },
]);

export default Routes;
