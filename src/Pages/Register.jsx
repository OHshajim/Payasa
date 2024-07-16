import { FaLock, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <section className="min-h-screen flex justify-center items-center py-10">
      <div className="container px-6 mx-auto w-full">
        <div className="flex flex-col justify-center items-center w-full">
          <div className="w-full flex flex-col justify-center items-center">
            <img className="sm:max-w-xs w-36 sm:w-full" src="/Logo.png" alt="logo" />

            <h1 className="mt-4 text-gray-600 dark:text-gray-300 ">
              Register now for get Bonus 🌟
            </h1>

            <h1 className="mt-4 text-2xl font-medium text-gray-800 capitalize lg:text-3xl dark:text-white">
              Create your new account
            </h1>
          </div>

          <div className="flex flex-col justify-center items-center w-full mt-8">
            <form className="w-full lg:max-w-xl">
              <div className="relative flex items-center">
                <span className="absolute">
                  <MdOutlineMail className="text-2xl ml-3" />
                </span>

                <input
                  type="email"
                  className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-black dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Email address"
                />
              </div>
              <div className="relative flex items-center mt-4">
                <span className="absolute">
                  <FaPhoneAlt className="text-xl ml-3" />
                </span>

                <input
                  type="number"
                  className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-black dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Phone Number"
                />
              </div>

              <div className="relative flex items-center mt-4">
                <span className="absolute">
                  <FaLock className="text-xl ml-3 " />
                </span>
                <input
                  type="password"
                  className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-black dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="pin"
                />
              </div>
              {AuthenticateBtn("Registration")}
              <Link to={"/login"}><p className="text-sm text-center mt-3">Already have an account? <span
               className="  text-[#56c12b] link">Login Now</span></p></Link>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
};


export const AuthenticateBtn = (text) => {
  return (
    <div className="mt-8 md:flex md:items-center w-full">
      <button 
      className="w-full px-6 py-3 text-sm font-medium  text-white rounded-lg
      bg-gradient-to-t from-[#428527] via-[#65b325] to-[#AFE84F]
      hover:bg-gradient-to-t hover:from-[#224514]  hover:via-[#397a04] hover:to-[#6a961c]
      ">
        {
          text
        }
      </button>
    </div>
  );
};
export default Register;
