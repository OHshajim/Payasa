import { FaLock, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthenticateBtn } from "./Register";

const Login = () => {
    return (
        <section className="min-h-screen flex justify-center items-center py-10">
      <div className="container px-6 mx-auto w-full ">
        <div className="flex flex-col justify-center items-center w-full">
          <div className="w-full flex flex-col justify-center items-center">
            <img className="sm:max-w-xs w-36 sm:w-full" src="/Logo.png" alt="logo" />

            <h1 className="mt-4 text-gray-600 dark:text-gray-300 ">
              Welcome back 
            </h1>

            <h1 className="mt-4 text-2xl font-medium text-gray-800 capitalize lg:text-3xl dark:text-white">
              Login now
            </h1>
          </div>

          <div className="flex flex-col justify-center items-center w-full mt-8">
            <form className="w-full lg:max-w-xl">
              <div className="relative flex items-center">
                <span className="absolute">
                    <FaUserCircle  className="text-2xl ml-3"/>
                 </span>

                <input
                  type="email"
                  className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-black dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Email or Number"
                />
              </div>
              <div className="relative flex items-center mt-4">
                <span className="absolute">
                <FaLock className="text-xl ml-3"/>
                </span>
                <input
                  type="password"
                  className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-black dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="pin"
                />
              </div>

              {AuthenticateBtn("Login")}
                <Link to={"/registration"}><p className="text-sm text-center mt-3">Have not any account? <span className="  text-[#56c12b] link">Register Now</span></p></Link>
            </form>
          </div>
        </div>
      </div>
    </section>
    );
};

export default Login;