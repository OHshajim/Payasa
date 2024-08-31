import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Layout from "../Layout/Layout";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import PrivetRoute from "./PrivetRoute";
import MoneyTransfer from "../Pages/MoneyTransfer";
import AdminLayout from "../Layout/AdminLayout";
import AdminDashboard from "../Pages/Admin/AdminDashboard";
import AgentDashBoard from "../Pages/Agent/AgentDashBoard";

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
            <MoneyTransfer />
          </PrivetRoute>
        ),
      },
      {
        path: "/cashOut",
        element: (
          <PrivetRoute>
            <MoneyTransfer />
          </PrivetRoute>
        ),
      },
      {
        path: "/addMoney",
        element: (
          <PrivetRoute>
            <MoneyTransfer />
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
  {
    path: "Admin",
    element: <AdminLayout />,
    children: [
      {
        path: "home",
        element: <AdminDashboard />,
      },
    ],
  },
  {
    path: "Agent",
    element: <AdminLayout />,
    children: [
      {
        path: "home",
        element: <AgentDashBoard />,
      },
    ],
  },
]);

export default Routes;
