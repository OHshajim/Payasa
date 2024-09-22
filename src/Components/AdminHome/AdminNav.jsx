import { FaUsers } from "react-icons/fa";
import { FcFeedback, FcMoneyTransfer } from "react-icons/fc";
import { IoGitPullRequestSharp } from "react-icons/io5";
import { MdReport, MdWindow } from "react-icons/md";

import { NavLink } from "react-router-dom";
import LogOut from "../../Shared/Logout";

const AdminNav = () => {
  return (
    <div className="max-h-screen h-full fixed max-w-xs w-full">
      <div className="lg:flex hidden  h-full w-full">
        <div className="bg-[#046A32] text-[#ffffff]  px-10 xl:px-20 pt-10 flex-col flex h-full  w-full">
          <div className="flex flex-col justify-center items-center">
            <img
              src={"/Logo.png"}
              alt="Logo"
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
                <MdWindow className="text-2xl" />
                Overview
              </NavLink>
            </li>
            <li>
              <NavLink
                to="Transactions"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#3dc029] flex items-center gap-2 scale-110"
                    : "flex items-center gap-2 hover:scale-110 transform transition duration-300 ease-in-out"
                }
              >
                <FcMoneyTransfer className="text-2xl" />
                Transactions
              </NavLink>
            </li>
            <li>
              <NavLink
                to="Clients"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#3dc029] flex items-center gap-2 scale-110"
                    : "flex items-center gap-2 hover:scale-110 transform transition duration-300 ease-in-out"
                }
              >
                <FaUsers className="text-2xl" />
                Clients
              </NavLink>
            </li>
            <li>
              <NavLink
                to="Requests"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#3dc029] flex items-center gap-2 scale-110"
                    : "flex items-center gap-2 hover:scale-110 transform transition duration-300 ease-in-out"
                }
              >
                <IoGitPullRequestSharp className="text-2xl" />
                Requests
              </NavLink>
            </li>
            <li>
              <NavLink
                to="Reports"
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
                to="Feedbacks"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#3dc029] flex items-center gap-2 scale-110"
                    : "flex items-center gap-2 hover:scale-110 transform transition duration-300 ease-in-out"
                }
              >
                <FcFeedback className="text-2xl" />
                Feedbacks
              </NavLink>
            </li>
          </ul>
          <div className="flex items-end h-full py-5">
            <LogOut />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminNav;
