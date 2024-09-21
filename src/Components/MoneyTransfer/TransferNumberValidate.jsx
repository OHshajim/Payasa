import { AuthenticateBtn } from "../../Pages/Register";
import { FaPhoneAlt } from "react-icons/fa";
import { useForm } from "react-hook-form";

const TransferNumberValidate = ({ setValid, setNumber }) => {
  const axiosSecure = useAxios();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { pathname } = useLocation();
  const onSubmit = async (data) => {
    await axiosSecure.get(`/numberValidate/${data.number}`)
      .then((data) => {
        console.log(data);
        if (data?.data?.success) {
          setNumber(data?.data?.number);
          pathname === "/sendMoney" && setValid(true);
          if (pathname === "/cashOut") {
            data?.data?.status === "Agent" ? setValid(true) : alert("this number is not our agent");
          }
          
          if (pathname === "/addMoney") {
            data?.data?.status === "Agent"
              ? setValid(true)
              : alert("this number is not our agent");
          }
        } else {
          alert(data?.data?.message);
        }
      });
  };
  return (
    <section className="container mx-auto">
      <div className=" max-w-screen-sm mx-auto my-20 bg-green-900 p-10 ">
        <form className="w-full lg:max-w-xl" onSubmit={handleSubmit(onSubmit)}>
          {/* Number */}
          <label>Recipient Number or A/C No </label>
          <div className="relative flex items-center mt-4">
            <span className="absolute">
              <FaPhoneAlt className="text-xl ml-3" />
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
          {AuthenticateBtn("Next")}
        </form>
      </div>
    </section>
  );
};

import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import useAxios from "../../CustomHooks/useAxios";
TransferNumberValidate.propTypes = {
  setValid: PropTypes.func,
  setNumber: PropTypes.func,
};

export default TransferNumberValidate;
