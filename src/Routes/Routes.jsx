import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";

const Routes = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
  ]);

export default Routes;