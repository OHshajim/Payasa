import { useContext } from "react";
import { useForm } from "react-hook-form";
import { FaLock, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import useAxios from "../CustomHooks/useAxios";

const Register = () => {
  const navigate = useNavigate();
  const axiosSecure = useAxios();
  const { setLoad ,setUser} = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const NewUser = data;

    await axios
      .post("http://localhost:5000/authentication/register", NewUser)
      .then(async(data) => {
        const { success, access_token, userID } = data.data;
        if (access_token && success) {
          localStorage.setItem("access_key", access_token);
          localStorage.setItem("userID", userID);
          await axiosSecure.get(`/userDetails/${userID}`).then((data) => {
            setUser(data?.data);
            setLoad(false);
            data.data.status === "Admin"
              ? navigate("/Admin/Overview")
              : data.data.status === "Agent"
              ? navigate("/Agent")
              : navigate("/");
          });
        }
      });
  };

  // console.log(errors);
  return (
    <section className="min-h-screen flex justify-center items-center py-10 select-none bg-black">
      <div className="container px-6 mx-auto w-full">
        <div className="flex flex-col justify-center items-center w-full">
          <div className="w-full flex flex-col justify-center items-center">
            <img
              className="sm:max-w-xs w-36 sm:w-full"
              src="/Logo.png"
              alt="logo"
            />

            <h1 className="mt-4 text-gray-600 dark:text-gray-300 ">
              Register now for get Bonus 🌟
            </h1>

            <h1 className="mt-4 text-2xl font-medium text-gray-800 capitalize lg:text-3xl dark:text-white">
              Create your new account
            </h1>
          </div>

          <div className="flex flex-col justify-center items-center w-full mt-8">
            <form
              className="w-full lg:max-w-xl"
              onSubmit={handleSubmit(onSubmit)}
            >
              {/* email */}
              <div className="relative flex items-center">
                <span className="absolute">
                  <MdOutlineMail className="text-2xl ml-3 text-zinc-300" />
                </span>
                <input
                  type="email"
                  className="block w-full py-3 border rounded-lg px-11 bg-black text-gray-300 border-gray-600  focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Email address"
                  {...register("email", { required: true })}
                />
              </div>
              {errors.email && (
                <span className="text-red-600 font-semibold text-sm mt-1">
                  Email is required ***
                </span>
              )}

              {/* Number */}
              <div className="relative flex items-center mt-4">
                <span className="absolute">
                  <FaPhoneAlt className="text-xl ml-3 text-zinc-300" />
                </span>
                <input
                  type="number"
                  className="block w-full py-3 border rounded-lg px-11 bg-black text-gray-300 border-gray-600  focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Phone Number"
                  {...register("number", {
                    required: true,
                    minLength: 10,
                    maxLength: 14,
                  })}
                />
              </div>
              {(errors.number?.type == "required" && (
                <span className="text-red-600 font-semibold text-sm mt-1">
                  Phone number is required ***
                </span>
              )) ||
                (errors.number?.type == "maxLength" && (
                  <span className="text-red-600 font-semibold text-sm mt-1">
                    Phone number length must be in 14 ***
                  </span>
                )) ||
                (errors.number?.type == "minLength" && (
                  <span className="text-red-600 font-semibold text-sm mt-1">
                    Phone number length must be equal or more than 10 ***
                  </span>
                ))}

              {/* Pin */}
              <div className="relative flex items-center mt-4">
                <span className="absolute">
                  <FaLock className="text-xl ml-3 text-zinc-300" />
                </span>
                <input
                  type="password"
                  className="block w-full py-3 border rounded-lg px-11 bg-black text-gray-300 border-gray-600  focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Pin"
                  {...register("pin", {
                    required: true,
                    minLength: 5,
                    maxLength: 5,
                    pattern: /^(?=.*[0-9]).*$/,
                  })}
                />
              </div>

              {(errors.pin?.type === "required" && (
                <span className="text-red-600 font-semibold text-sm mt-1">
                  Pin is required ***
                </span>
              )) ||
                (errors.pin?.type === "pattern" && (
                  <span className="text-red-600 font-semibold text-sm mt-1">
                    Pin must be in 5-digit number ***
                  </span>
                )) ||
                ((errors.pin?.type === "maxLength" ||
                  errors.number?.type === "minLength") && (
                  <span className="text-red-600 font-semibold text-sm mt-1">
                    Pin must be in 5-digit ***
                  </span>
                ))}

              {/* Button */}
              {AuthenticateBtn("Registration")}
              <Link to={"/login"}>
                <p className="text-sm text-center mt-3 text-gray-400">
                  Already have an account?{" "}
                  <span className="  text-[#56c12b] link"> Login Now</span>
                </p>
              </Link>
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
        className="w-full px-6 py-3 text-sm font-medium  text-white rounded-lg bg-green-600 hover:bg-green-700"
      >
        {text}
      </button>
    </div>
  );
};
export default Register;
