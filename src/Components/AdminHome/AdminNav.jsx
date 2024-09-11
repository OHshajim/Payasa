import { FaUsers } from "react-icons/fa";
import { FcFeedback, FcMoneyTransfer } from "react-icons/fc";
import { IoGitPullRequestSharp } from "react-icons/io5";
import { MdReport, MdWindow } from "react-icons/md";

import { NavLink } from "react-router-dom";

const AdminNav = () => {
  return (
    <div className="min-h-screen h-full">
      <div className="lg:flex hidden  h-full">
        <div className="bg-[#5c5c5c] text-[#ffffff]  px-10 pt-10 ">
          <div className="flex flex-col justify-center items-center">
            <img
              src={"/Logo.png"}
            //   alt=""
              className="rounded-full ring-4 ring-[#0d3d0b] w-20  mb-3"
            />
          </div>
          <ul className="font-medium pt-8 uppercase space-y-5">
            <li>
              <NavLink
                to="Overview"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#3dc029] flex items-center gap-2 scale-110"
                    : "flex items-center gap-2 hover:scale-110 transform transition duration-300 ease-in-out"
                }
              >
                <MdWindow  className="text-2xl" />
                Overview
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/addCamp"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                   ? "text-[#3dc029] flex items-center gap-2 scale-110"
                    : "flex items-center gap-2 hover:scale-110 transform transition duration-300 ease-in-out"
                }
              >
                <FcMoneyTransfer  className="text-2xl" />
                Transactions
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/manageCamp"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#3dc029] flex items-center gap-2 scale-110"
                    : "flex items-center gap-2 hover:scale-110 transform transition duration-300 ease-in-out"
                }
              >
                <FaUsers  className="text-2xl" />
                Clients
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/userManagement"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#3dc029] flex items-center gap-2 scale-110"
                    : "flex items-center gap-2 hover:scale-110 transform transition duration-300 ease-in-out"
                }
              >
                <IoGitPullRequestSharp  className="text-2xl" />
                Requests
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/manageRegisters"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#3dc029] flex items-center gap-2 scale-110"
                    : "flex items-center gap-2 hover:scale-110 transform transition duration-300 ease-in-out"
                }
              >
                <MdReport className="text-2xl" />
                Reports
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/manageRegisters"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#3dc029] flex items-center gap-2 scale-110"
                    : "flex items-center gap-2 hover:scale-110 transform transition duration-300 ease-in-out"
                }
              >
                <FcFeedback  className="text-2xl" />
                Feedbacks
              </NavLink>
            </li>

          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminNav;
