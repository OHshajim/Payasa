import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Layout from "../Layout/Layout";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import PrivetRoute from "./PrivetRoute";
import SendMoney from "../Pages/SendMoney/SendMoney";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <PrivetRoute>
            <Home />
          </PrivetRoute>
        ),
      },
      {
        path: "/sendmoney",
        element: (
          <PrivetRoute>
            <SendMoney/>
          </PrivetRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Register />,
      },
    ],
  },
]);

export default Routes;
