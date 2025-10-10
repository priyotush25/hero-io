import { createBrowserRouter } from "react-router";
import Apps from "../Component/Apps/Apps";
import MainLayouts from "../Layouts/MainLayouts";
import AppDetails from "../Pages/AppDetails";
import Home from "../Pages/Home";
import InstalledApps from "../Pages/InstalledApps";

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
      {
        path: "/app/:id",
        element: <AppDetails />,
      },
      {
        path: "/install",
        element: <InstalledApps />,
      },
    ],
  },
]);

export default Routes;
