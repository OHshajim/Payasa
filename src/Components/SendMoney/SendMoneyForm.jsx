import { FaLock, FaPhoneAlt } from "react-icons/fa";
import { AuthenticateBtn } from "../../Pages/Register";
import { useForm } from "react-hook-form";

const SendMoneyForm = ({ number }) => {
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    if (user.balance < data.amount){
      return alert("insufficient balance");
    }
      await fetch(`${import.meta.env.VITE_URL}/numberValidate/${data.number}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          // if (data?.success) {

          // } else {
          //   alert(data.message);
          // }
        });
  };
  return (
    <section className="container mx-auto">
      <div className=" max-w-screen-sm mx-auto my-20 bg-green-900 p-10 ">
        <form className="w-full lg:max-w-xl" onSubmit={handleSubmit(onSubmit)}>
          {/* Number */}
          <label>Recipient Number or A/C No </label>
          <div className="relative flex items-center mb-4">
            <span className="absolute">
              <FaPhoneAlt className="text-xl ml-3" />
            </span>
            <input
              type="number"
              className="block w-full py-3 border rounded-lg px-11 bg-black text-gray-300 border-gray-600  focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 "
              value={`0${number}`} readOnly
              {...register("number")}
            />
          </div>
          {/* Amount */}
          <label>Amount</label>
          <div className="relative flex items-center mb-4">
            <span className="absolute">
              <FaLock className="text-xl ml-3 " />
            </span>
            <input
              type="number"
              className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-black dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Amount"
              {...register("amount", {
                required: true,
                pattern: /^(?=.*[0-9]).*$/,
              })}
            />
          </div>
          {errors.Amount?.type === "required" && (
            <span className="text-red-600 font-semibold text-sm mt-1">
              Amount is required ***
            </span>
          )}

          {/* Pin */}
          <label>Pin</label>
          <div className="relative flex items-center">
            <span className="absolute">
              <FaLock className="text-xl ml-3 " />
            </span>
            <input
              type="password"
              className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-black dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
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

          {AuthenticateBtn("Next ")}
        </form>
      </div>
    </section>
  );
};

import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
SendMoneyForm.propTypes = {
  number: PropTypes.number,
};
export default SendMoneyForm;
