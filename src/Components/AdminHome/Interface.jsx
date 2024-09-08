import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Interface = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    <div className=" flex justify-between items-center container mx-auto">
      <div className="flex justify-between items-center gap-5">
        <div>
          <img
            src="https://i.ibb.co/6gR6rQ6/Shajim.png"
            alt="Admin"
            className="max-w-80 rounded-full ring-4 ring-green-600 "
          />
        </div>
        <div className="flex flex-col justify-start p-5">
          <h3 className="text-3xl flex justify-start">Welcome</h3>
          <p>
            to the Admin Dashboard! Manage your content, monitor user activity,
            and oversee all operations from one place.
          </p>
          <div className="flex flex-col my-2  items-start">
            <h4 className="font-semibold text-base ">{user.email}</h4>
            <p className="text-xs text-zinc-400 font-bold">
              0{user?.number} - {user?.status}
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-8 w-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Total Accounts</div>
            <div className="stat-value">31K</div>
            <div className="stat-desc">2006 - {new Date().getFullYear()}</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-8 w-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Daily Transaction</div>
            <div className="stat-value">4,200</div>
            <div className="stat-desc">↗︎ 100 (22%)</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-8 w-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Total Transactions</div>
            <div className="stat-value">1,200</div>
            <div className="stat-desc"> 90 (14%)</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interface;
