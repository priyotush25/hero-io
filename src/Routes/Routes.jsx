import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        path: "/",
        element: <h1>Home pages 2</h1>,
      },
    ],
  },
]);

export default Routes;
