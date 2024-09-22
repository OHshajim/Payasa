import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Layout from "../Layout/Layout";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import PrivetRoute from "./PrivetRoute";
import MoneyTransfer from "../Pages/MoneyTransfer";
import AdminLayout from "../Layout/AdminLayout";
import AgentDashBoard from "../Pages/Agent/AgentDashBoard";
import AgentLayout from "../Layout/AgentLayout";
import Overview from "../Pages/Admin/Overview";
import Transactions from "../Pages/Admin/Transactions";
import Clients from "../Pages/Admin/Clients";
import Requests from "../Pages/Admin/Requests";
import AgentAddMoney from "../Pages/Agent/AgentAddMoney";
import CashOutReport from "../Pages/Agent/CashOutReport";
import AllFeedbacks from "../Pages/Admin/AllFeedbacks";
import DashBoard from "../Layout/DashBoard";
import PrivetTransactions from "../Pages/Dashboard/PrivetTransactions";
import PrivetRequest from "../Pages/Dashboard/PrivetRequest";
import FeedbackForm from "../Pages/Dashboard/Feedback";
import Report from "../Pages/Dashboard/Report";
import Reports from "../Pages/Admin/Reports";

const Routes = createBrowserRouter([
  // Admin
  {
    path: "Admin",
    element: <AdminLayout />,
    children: [
      {
        path: "OverView",
        element: <Overview />,
      },
      {
        path: "Transactions",
        element: <Transactions />,
      },
      {
        path: "Clients",
        element: <Clients />,
      },
      {
        path: "Requests",
        element: <Requests />,
      },
      {
        path: "Reports",
        element: <Reports />,
      },
      {
        path: "Feedbacks",
        element: <AllFeedbacks />,
      },
    ],
  },

  // Agent
  {
    path: "Agent",
    element: <AgentLayout />,
    children: [
      {
        path: "",
        element: <AgentDashBoard />,
      },
      {
        path: "AddMoneyRequest",
        element: <AgentAddMoney />,
      },
      {
        path: "CashOutReport",
        element: <CashOutReport />,
      },
    ],
  },

  // General Users
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
  // Dashboard
  {
    path: "Dashboard/:number",
    element: <DashBoard />,
    children: [
      {
        path: "Overview",
        element: <></>,
      },
      {
        path: "Transactions",
        element: <PrivetTransactions />,
      },
      {
        path: "Requests",
        element: <PrivetRequest />,
      },
      {
        path: "Report",
        element: <Report />,
      },
      {
        path: "Feedback",
        element: <FeedbackForm />,
      },
    ],
  },
]);

export default Routes;
